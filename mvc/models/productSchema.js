const {Schema,model}=require('mongoose');
let Category=require('/data/data/com.termux/files/home/mongodbAllClass/mvc/models/categorySchema.js');
const productSchema= new Schema({
  name:{
   type:String,
   trim:true,
 required:[true, "name is required"],
minLength:[3, "must be 3 charecter"],
  },
slug:{
  type:String,
 required:[true, "slug is required"],
 unique:[true, "slug must be unique"],
}, 
description:{
  type:String,
  trim:true,
  required:[true, "description mest be required"],
  minLength:[3, "must be 3 charecter"],
  maxLength:[150, "maximum length 150 charecter"],
},
price:{
  type:Number,
  required:[true, "price is required"],
  trim:true,
  validate:{
    validator: (v)=> v>0,
  message:(props)=>`${props.value} is valid number. Not nagative Number`,
  },
},
image:{
  type:Buffer,
  required:[true, "image is required"],
},
quantity:{
  type:Number,
  required:[true, "quantity is required"],
  trim:true,
  validate:{
    validator: (v)=> v>0,
  message:(props)=>`${props.value} is valid number. Not nagative Number`,
  },
},
shipping:{
  type:Number,
  trim:true,
  validate:{
    validator: (v)=> v>0,
  message:(props)=>`${props.value} is valid number. Not nagative Number`,
  },
},
sold:{
  type:Number,
  default:0,
  //required:[true, "sold is required"],
 },
 category:{
   type:String,
   ref:'category',
   required:true,
 },
 rating:{
  type:Number,
  default:4.1,
 }
},{timestamps:true});
const Product=new model('product', productSchema);
module.exports=Product;
