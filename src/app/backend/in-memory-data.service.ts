import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CATEGORY } from './category-mock';
import { IMAGE } from './image-mock';
import { USER } from './user-mock';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    let users = USER;
    let images = IMAGE
    let categories = CATEGORY
    return {users, images, categories};
  }
}