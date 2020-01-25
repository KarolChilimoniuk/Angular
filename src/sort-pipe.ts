import { Pipe, PipeTransform } from "@angular/core";
import { NewsData } from "../src/app/news-data";

@Pipe({ name: "sortingByApproves" })
export class SortingByApproves implements PipeTransform {
  transform(posts: NewsData[]): NewsData[] {
    return posts.sort((a: NewsData, b: NewsData) => {
      return b.approves - a.approves;
    });
  }
}
