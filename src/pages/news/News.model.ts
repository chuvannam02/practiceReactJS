// News.model.ts

export interface INews {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class NewsModel implements INews {
  //   userId: number;
  //   id: number;
  //   title: string;
  //   body: string;

  //   constructor(userId: number, id: number, title: string, body: string) {
  //     this.userId = userId;
  //     this.id = id;
  //     this.title = title;
  //     this.body = body;
  //   }

  // Cách này tự động tạo field và gán giá trị luôn — ngắn gọn và phổ biến hơn.
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string
  ) {}
}
