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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
