import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USER } from './user-mock';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    let users = USER;
    return {users};
  }
}