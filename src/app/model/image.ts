import { Category } from "./category"
import { ImageUserLike } from "./image-user-like"
import { User } from "./user"

export class Image{
  imageid!: number
  userid!: number
  imagePath!: string
  title!: string
  description!: string
  countLike: number
  user: User
  like!: ImageUserLike[]
  categories: Category[]
}