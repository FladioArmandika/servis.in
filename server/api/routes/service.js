const express  = require('express')
const route     = express.Router()

const Service   = require('../../models/service')

module.exports = (app) => {
    app.use('/service', route)

    // GET ALL SERVICE
    route.get('/', (req,res,next) => {
        Service.find({})
            .exec((err,result) => {
                if(!err) {
                    res.json(result)
                }
            })
    })

    // GET SERVICE BY ID
    route.get('/:id', (req,res,next) => {
        Service.findOne({_id: req.params.id})
            .exec((err,result) => {
                if(!err) {
                    res.json(result)
                }
            })
    })


    // ADD SERVICE
    route.post('/add', (req,res,next) => {
        const params = req.body

        let service = new Service({
            name: params.name,
            technician: params.technician,
            category: params.category,
            price: params.price,
            description: params.description
        })


        service.save()
            .then((err,result) => {
                // if error
                if(err) {
                    res.status(401).json({
                        err
                    })
                
                // success
                } else {
                    res.status(200).json({
                        msg: 'Service added successfully'
                    })
                }
            })
    })
}