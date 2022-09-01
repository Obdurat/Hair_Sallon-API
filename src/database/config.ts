import mongoose, { DocumentSetOptions } from 'mongoose';

const url = 'mongodb://localhost:27017/xablau';

const options = {
  authSource: 'admin',
  user: 'admin',
  pass: 'password',
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function run(model: DocumentSetOptions) {
  try {
    await mongoose.connect(url, options);
    await model.save();
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}
