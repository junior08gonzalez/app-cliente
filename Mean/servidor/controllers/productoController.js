const Producto = require("../models/Producto");

//const mongoose=require('mongoose');
//mongoose.set('bufferTimeoutMS', 20000);
exports.crearProducto = async(req, res)=>{
    //console.log(req.body);
    try{

        let producto;
        //Creamos nuestro producto
        producto = new Producto(req.body);
       // mongoose.set('bufferCommands', false);

        await producto.save();//esperamos hasta que guarde el producto
       
        res.send(producto);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async(req, res)=>{
    try{

        const productos = await Producto.find();
        res.json(productos)

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }    
}

exports.actualizarProducto = async(req,res)=>{
    try{

        const {nombre, categoria, ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({mg: 'No existe el producto'});
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({_id:req.params.id},producto,{new:true});

        res.json(producto);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    
}

exports.obtenerProducto = async(req,res)=>{
    try{

        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({mg: 'No existe el producto'});
        }

        
        res.json(producto);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    
}

exports.eliminarProducto = async(req,res)=>{
    try{

        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({mg: 'No existe el producto'});
        }

        await Producto.findOneAndRemove({_id:req.params.id})        
        res.json({mg: 'Producto Eliminado con Exito'});

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    
}