import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { deleteTweet } from 'src/app/service/deleteTweet';
import { getTweet } from 'src/app/service/getTweet';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  tweets: Tweet[] = []

  constructor() { }

  ngOnInit(): void {
    this.refreshList()
  }

  refreshList() {
    this.tweets = getTweet();
  }

  excludeTweet(index: number) {
    deleteTweet(index);
    this.refreshList();
  }

}
