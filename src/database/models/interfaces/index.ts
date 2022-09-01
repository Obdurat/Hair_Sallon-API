export interface IClient {
  clientName: string;
  address: string;
  phone: string;
  schedules: IScheduling[];
}

export interface IScheduling {
  _id: string;
  service: IService;
  date: Date;
  updatedAt: Date;
  createdAt: Date;
}

export interface IService {
  serviceName: string;
  price: number;
  duration: number;
}
