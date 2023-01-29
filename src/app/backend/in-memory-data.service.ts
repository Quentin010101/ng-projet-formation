import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CATEGORY } from './category-mock';
import { USER } from './user-mock';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    let users = USER;
    let categories = CATEGORY
    return {users,  categories};
  }
}