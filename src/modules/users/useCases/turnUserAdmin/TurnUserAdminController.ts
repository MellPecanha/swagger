import {Request, Response} from 'express';

import {TurnUserAdminUseCase} from './TurnUserAdminUseCase';

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const {user_id} = req.params;
      const user = this.turnUserAdminUseCase.execute({user_id});
      return res.send(user);
    } catch (e) {
      return res.status(404).json({error: e.message});
    }
  }
}

export {TurnUserAdminController};
