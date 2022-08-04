const { default: mongoose } = require('mongoose')
const Celebritie = require('../models/Celebritie')



const getCelebrities = async (req, res) => {
    const celebrities = await Celebritie.find({})
    res.status(200).json(celebrities)
} 

const getCelebritie = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such celebritie'})
    }
    
    const celebritie = await Celebritie.findById(id)

    if(!celebritie){
        return res.status(404).json({error: 'No such celebritie'})
    }
    res.status(200).json(celebritie)
}



const createCelebritie = async (req,res) => {
    const {name, categorie, images} = req.body
    try{
        const celebritie = await Celebritie.create({name, categorie, images})
        res.status(200).json(celebritie)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}



const deleteCelebritie = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such celebritie'})
    }
    
    const celebritie = await Celebritie.findOneAndDelete({_id: id})

    if(!celebritie){
        return res.status(404).json({error: 'No such celebritie'})
    }
    res.status(200).json(celebritie)
}



const updateCelebritie = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such celebritie'})
    }
    
    const celebritie = await Celebritie.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!celebritie){
        return res.status(404).json({error: 'No such celebritie'})
    }
    res.status(200).json(celebritie)
}


module.exports = {
    getCelebritie,
    getCelebrities,
    createCelebritie,
    deleteCelebritie,
    updateCelebritie
}