const mongoose = require('mongoose');

const { Schema } = mongoose;


const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  condition: {
    type: String,
    required: true,
  },
  category: {
   type: String,
   required: true,
    
  },
  keyword: {
    type: String,
    lowercase: true,
  },
  
  seller: {
    type: String,
    required: true,
  }
});

productSchema.index({
  name: "text",
  description: "text",
  category: "text",
},
{
  weights: {
    name: 5,
    keyword: 4,
    category: 3,
    description: 1,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
