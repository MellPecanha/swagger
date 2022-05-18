import {Response, Request} from 'express';

import {CreateUserUseCase} from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const {email, name} = req.body;
      const user = this.createUserUseCase.execute({email, name});

      if (user) {
        return res.status(201).json(user);
      }
    } catch (e) {
      return res.status(400).json({error: e.message});
    }
  }
}

export {CreateUserController};
