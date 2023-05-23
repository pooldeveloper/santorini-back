module.exports = {
    routes:[
        {
            method: 'GET',
            path: '/producto/:slug',
            handler: 'producto.findOne',
            config:{
                auth: false
            }
        }
    ]
}