export class Post {
  constructor(public title: string, public description: string, public imagePath: string, public author: string, public createdAt: Date, public isFavorite: boolean,
              public likes: number) {
  }
}
