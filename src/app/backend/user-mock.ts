import { User } from "../model/user";

export const USER: User[] = [
  {
    id: 1,
    pseudo: 'admin',
    password: 'admin',
    email: 'admin@gmail.com',
    role: 'ROLE_ADMIN'
  },
  {
    id: 2,
    pseudo: 'user',
    password: 'user',
    email: 'user@gmail.com',
    role: 'ROLE_USER',
    avatar: '/assets/avatar/avatar1.jpg'
  },
  {
    id: 3,
    pseudo: 'quentin',
    password: 'quentin',
    email: 'quentin@gmail.com',
    role: 'ROLE_USER'
  },
  {
    id: 4,
    pseudo: 'tom',
    password: 'tom',
    email: 'tom@gmail.com',
    role: 'ROLE_USER'
  },

]