import { Model } from 'mongoose';
import { IClient } from '../database/models/interfaces';
import { Client } from '../database/models';
import run from '../database/config';

export default class ClientUseCase {
  private Model: Model<IClient>;

  constructor(model: Model<IClient>) {
    this.Model = model;
  }

  async createClient() {
    const client = new this.Model({
      clientName: 'absdb', phone: 123132, address: 'asd', schedules: [],
    });
    await run(client);
    return client;
  }
}

const test = new ClientUseCase(Client);
// eslint-disable-next-line no-underscore-dangle
test.createClient()
  .then((result) => console.log(result));
