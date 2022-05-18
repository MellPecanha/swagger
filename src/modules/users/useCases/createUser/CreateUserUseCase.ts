import {User} from '../../model/User';
import {IUsersRepository} from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({email, name}: IRequest): User {
    const userAlredyExists = this.usersRepository.findByEmail(email);

    if (userAlredyExists) {
      throw new Error(`User ${name} already exists!`);
    }

    const user = this.usersRepository.create({email, name});

    return user;
  }
}

export {CreateUserUseCase};