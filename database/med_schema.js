import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    "medicine_name": {type:String},
    "generic_name": {type:String},
    "genre": {type:String},
    "category": {type:String},
    "price_inr": {type:Number},
    "image_url":{type:String},
})

const product = mongoose.model('Medicine',schema);

export default product