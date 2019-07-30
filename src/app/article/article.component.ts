import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { Article } from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding ('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Output() changeVote = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    this.changeVote.next('abc');
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
