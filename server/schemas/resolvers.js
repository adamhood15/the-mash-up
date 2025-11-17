const { ApolloError } = require('apollo-server-express')
const { AuthenticationError } = require('apollo-server-express')
const { User, Product, Order } = require('../models')
const { signToken } = require('../utils/auth')
const { findOneAndUpdate } = require('../models/Order')

const resolvers = {
  Query: {
    products: async (parent, args) => {
      return Product.find(args)
    },
    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId })
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'products'
        })
        console.log(context.user)

        return user
      }

      throw new AuthenticationError('Not logged in')
    },
    order: async (parent, { id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate({
          path: 'orders.products'
        })

        return user.orders.id(id)
      }

      throw new AuthenticationError('Not logged in')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const { email } = args
      // Check if the email already exists
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        throw new ApolloError('Email already exists', 'EMAIL_ALREADY_EXISTS')
      }
      // Create a new user if the email doesn't exist
      const user = await User.create(args)
      const token = signToken(user)

      return { token, user }
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context)
      if (context.user) {
        const order = new Order({ products })

        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order }
        })

        return order
      }

      throw new AuthenticationError('Not logged in')
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true
        })
      }

      throw new AuthenticationError('Not logged in')
    },
    // userWishlist: async (parent, { wishlist }, context) =>  {
    //   if (context.user) {
    //     return User.findOneAndUpdate({username: context.user.username}, {
    //       $addToSet: { wishlist: product._id}
    //     })
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },

    addProduct: async (
      parent,
      {
        name,
        description,
        image,
        condition,
        seller,
        category,
        keyword,
        price,
        quantity
      },
      context
    ) => {
      if (context.user) {
        const product = await Product.create({
          name,
          description,
          image,
          condition,
          seller,
          category,
          keyword,
          price,
          quantity
        })

        await User.findOneAndUpdate(
          { username: context.user.username },
          { $addToSet: { products: product._id } }
        )

        // await User.findOneAndUpdate(
        //   { _id:context.user._id },
        //   { $addToSet: { products: product._id} }
        // );
        return product
      }

      throw new AuthenticationError('Not logged in')
    },

    updateProduct: async (parent, { id, quantity }) => {
      const decrement = Math.abs(quantity) * -1

      return Product.findByIdAndUpdate(
        id,
        { $inc: { quantity: decrement } },
        { new: true }
      )
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('Incorrect email')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password')
      }

      const token = signToken(user)

      return { token, user }
    }
  }
}

module.exports = resolvers
