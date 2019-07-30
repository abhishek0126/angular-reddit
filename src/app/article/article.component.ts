import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding ('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    )
   }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  // domain() extracts the domain from a url
  domain(): string {
    try {
      const domainAndPath: string = this.article.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch(err) {
      return null;
    }
  }

}
