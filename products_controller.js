


module.exports={
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');   // now has access to the dbInstance
        const { name, description, price, imageurl } = req.body;
        
        // if I wanted to execute read_product I would use dbInstance.read_product(). 
        // Knowing this we can execute our sql files in every method. Chain a .then to 
        // use res to send status 200 and chain a .catch to use res to send status 500
        dbInstance.create_product()
            .then( product => res.status(200).send( product ) )
            .catch( () => res.status(500).send() );
             
    },
    
    getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
    
        dbInstance.read_product([ params.id ])
          .then( product => res.status(200).send( product ) )
          .catch( () => res.status(500).send() );
    },
    
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
          .then( products => res.status(200).send( products ) )
          .catch( () => res.status(500).send() );
    },
    
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([ params.id, query.desc ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
    },
    
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_product([ params.id ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
    }
}