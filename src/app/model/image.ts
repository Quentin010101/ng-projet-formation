import { User } from "./user"

export class Image{
  imageid!: number
  userid!: number
  imagePath!: string
  title!: string
  description!: string
  countLike: number
  user: User
  like!: number
}