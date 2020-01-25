import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.css"]
})
export class NewsEditorComponent implements OnInit {
  newTitle: string;
  newContent: string;
  approves: number;
  id: number;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newTitle = "Title";
    this.newContent = "Content";
    this.approves = 0;
    this.id = Math.floor(Math.random() * 10000);
  }

  addNewItem() {
    if ((this.addNewItem, this.newTitle, this.newContent)) {
      this.newsService.addItem(
        this.newTitle,
        this.newContent,
        this.approves,
        this.id
      );
      this.newTitle = "";
    }
  }
}
