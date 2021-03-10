import mongoose from 'mongoose';

class Database {
  constructor() {
    this.connection =
      process.env.NODE_ENV === 'development'
        ? {
            uri: `mongodb://localhost/${process.env.DB_NAME}`,
            message: 'Connection to Local Mongodb',
          }
        : {
            uri: `${process.env.MONGO_URL}/${process.env.DB_NAME}?${process.env.MONGO_PERMISSION}`,
            message: 'Connection to Mongodb Atlas',
          };

    this.mongo(this.connection);
  }

  // Connection to NoSQL MongoDB Database
  mongo(connectToMongodb) {
    mongoose
      .connect(connectToMongodb.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      })
      .then(() => console.log(connectToMongodb.message))
      .catch((err) => console.log(err));
  }
}

export default new Database();
