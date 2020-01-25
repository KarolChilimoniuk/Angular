export class NewsData {
  public title: string;
  public content: string;
  public approves: number;
  public id: number;
  public imageUrl: string;

  constructor(title: string, content: string, approves: number, id: number) {
    this.title = title;
    this.content = content;
    this.approves = approves;
    this.id = id;
  }
}
