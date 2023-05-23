module.exports = {
    routes:[
        {
            method: 'GET',
            path: '/categoria/:slug',
            handler: "api::categoria.categoria.findBySlug",
            config:{
                auth: false
            }
        }
    ]
}