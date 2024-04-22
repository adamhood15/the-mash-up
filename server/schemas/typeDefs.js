const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
    image: String
    condition: String
    seller: String
    category: String
    keyword: String
    
  }
    

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    wishlist: [String]
    products: [Product]
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

 

  type Query {
    
    products: [Product]
    product(productId: ID!): Product
    user: User
    order(_id: ID!): Order
   
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    addProduct(
      name: String!
      description: String!
      image: String!
      seller: String!
      condition: String!
      category: String!
      keyword: String
      price: Int
      quantity: Int
    ): Product
    updateUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!, seller: String): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
