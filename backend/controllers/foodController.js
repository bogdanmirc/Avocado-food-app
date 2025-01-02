import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item

const addFood = async (req, res) => {


    console.log("File:", req.file);
    console.log("Body:", req.body);

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save(); // this will save in database
        res.json({succes:true, message:"Food Added"})
    } catch(error){
        console.log(error)
        res.json({succes:false,message:"Error"})
    }
}
// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove food item
const removeFood = async (req,res)=> {
    try {
        const food = await foodModel.findById(req.body.id); //find the image
        fs.unlink(`uploads/${food.image}`, ()=>{}) //delete from the folder .unlink(image path)

        await foodModel.findByIdAndDelete(req.body.id) //delete the data from database
        res.json({succes:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }

}

export {addFood,listFood,removeFood}