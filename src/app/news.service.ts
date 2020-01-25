import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData("Tytułek", "Opisek", 0, 3454),
    new NewsData("Title", "Description", 0, 3753),
    new NewsData("Smutek", "Radość", 0, 3274)
  ];

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  removeItem(i: number) {
    this.news.splice(i, 1);
    this.onChange.emit();
  }

  addItem(title: string, content: string, approves: number, id: number) {
    this.news.push(new NewsData(title, content, approves, id));
    this.onChange.emit();
    this.news[this.news.length - 1].id = Math.floor(Math.random() * 10000);
    console.log(this.news);
  }

  approvePost(id: number) {
    this.news.forEach(el => {
      if (el.id === id) {
        el.approves += 1;
      }
    });
    this.sorting();
    this.onChange.emit();
    console.log(this.news);
  }

  disapprovePost(id: number) {
    this.news.forEach(el => {
      if (el.id === id) {
        el.approves -= 1;
      }
    });
    this.sorting();
    this.onChange.emit();
    console.log(this.news);
  }

  sorting() {
    this.news.sort((a: NewsData, b: NewsData) => {
      return b.approves - a.approves;
    });
  }
}
