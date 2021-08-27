import mongoose, { Mongoose } from 'mongoose';

class MongoDBConnector {
  async connect(): Promise<Mongoose> {
    return await mongoose.connect(process.env.MONGOURL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async close(): Promise<void> {
    await mongoose.connection.close();
  }
}

export default MongoDBConnector;
