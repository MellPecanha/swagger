import {Request, Response} from 'express';

import {ListAllUsersUseCase} from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const {user_id} = <{user_id: string}>req.headers;

      const users = this.listAllUsersUseCase.execute({user_id});

      return res.json(users);
    } catch (e) {
      return res.status(400).json({error: e.message});
    }
  }
}

export {ListAllUsersController};
