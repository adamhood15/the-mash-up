const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');


const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
      
    }
   ],
  orders: [Order.schema],

  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  // console.log(password, this.password);
  // const revert = await bcrypt.hash(password, 10);
  // console.log(revert);
  return await bcrypt.compare(password, this.password);
  
};

const User = mongoose.model('User', userSchema);

module.exports = User;
