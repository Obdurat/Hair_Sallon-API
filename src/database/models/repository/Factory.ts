import Repository from './Repository';
import Client from '../Client';
import Scheduling from '../Scheduling';
import Service from '../Service';
import { IClient, IScheduling, IService } from '../interfaces';

export const ClientRepository = new Repository<IClient>(Client);

export const ScheduleRepository = new Repository<IScheduling>(Scheduling);

export const ServiceRepository = new Repository<IService>(Service);
