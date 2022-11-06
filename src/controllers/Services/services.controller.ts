import { Request, Response } from 'express';
import { IServicesUseCases } from '../../use_cases/Services/@types';
import { servicesCase } from '../../use_cases/Services/services.case';
import CtrlWrapper from '../../utils/CtrlWrapper';

export default class ServicesController {
  constructor(private useCase: IServicesUseCases) { }

  public create = CtrlWrapper(async (req: Request, res: Response): Promise<Response> => {
    const request = await this.useCase.createCase(req.body);
    return res.status(200).json(request);
  });

  public getAll = CtrlWrapper(async (req: Request, res: Response): Promise<Response> => {
    const request = await this.useCase.getAllCase(req.body, req.query);
    return res.status(200).json(request);
  });

  public getOne = CtrlWrapper(async (req: Request, res: Response): Promise<Response> => {
    const request = await this.useCase.getOneCase(req.params, req.query);
    return res.status(200).json(request);
  });

  public updateOne = CtrlWrapper(async (req: Request, res: Response): Promise<Response> => {
    const request = await this.useCase.updateOneCase(req.params, req.body);
    return res.status(200).json(request);
  });

  public deleteOne = CtrlWrapper(async (req: Request, res: Response): Promise<Response> => {
    const request = await this.useCase.deleteOneCase(req.params);
    return res.status(200).json(request);
  });
}

export const servicesController = new ServicesController(servicesCase);
