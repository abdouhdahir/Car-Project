import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import shema from './graphql/shema';

const MONGO_URI = 'mongodb+srv://abdouhdahir:5z4HuljKQQDF5ViS@location.jgrh9.mongodb.net/?retryWrites=true&w=majority&appName=Location';

const app = express(); 

const server = http.createServer(app);

// Connexion à MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(() => {
  console.log("Error connecting to MongoDB");
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: shema, 
  graphiql: true,
}));

server.listen(4700, () => {
  console.log(`Server listening on port 4700`);
  console.log(`http://localhost:4700/graphql`);
});
