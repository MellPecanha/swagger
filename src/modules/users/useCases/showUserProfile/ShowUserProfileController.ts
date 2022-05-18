import {Request, Response} from 'express';

import {ShowUserProfileUseCase} from './ShowUserProfileUseCase';

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const {user_id} = req.params;

      const user = this.showUserProfileUseCase.execute({user_id});

      return res.send(user);
    } catch (e) {
      return res.status(404).json({error: e.message});
    }
  }
}

export {ShowUserProfileController};
