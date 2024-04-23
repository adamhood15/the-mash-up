const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { User } = require('./models/User');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Separate REST API routes
app.post('/api/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email.' });
    }
    // Create a new user using the data received from the client
    const newUser = new User({ username, email, password });
    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  persistedQueries: false,
});

// Start the Apollo Server
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  // Start listening for connections after the database connection is established
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Start the Apollo Server
startApolloServer();
