import product from "./database/med_schema.js"



const api = (req,res)=>{
    product.find(req.query).sort('generic_name')
    .then((data)=>res.json(data))
    .then(()=>console.log('medicine-api-loaded'))
    .catch(()=>console.log('error in loading data'))
}

export default api