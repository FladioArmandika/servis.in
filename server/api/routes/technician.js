const express   = require('express')
const route     = express.Router()

const Technician = require('../../models/technician')

module.exports = (app) => {
    app.use('/technician', route)

    // GET ALL TECHNICIAN
    route.get('/', (req,res,next) => {
        Technician.find({})
            .exec((err,result) => {
                if(!err) {
                    res.json(result)
                }
            })
    })


    // GET TECHNICIAN BY 
    route.get('/:id', (req,res,next) => {
        Technician.findOne({_id:req.params.id})
            .exec((err,result) => {
                if(!err) {
                    res.json(result)
                }
            })
    })

    route.post('/add', (req,res,next) => {
        const params = req.body

        const technician = new Technician({
            email: params.email,
            username: params.username,
            password: params.password,
            city: params.city
        })


        technician.save((err,data) => {
            if(err) {
                res.status(401).json({
                    err
                })
            } else {
                res.status(200).json({
                    msg:'Technician Added'
                })
            }
        })
    }) 

}