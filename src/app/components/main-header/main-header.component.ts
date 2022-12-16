import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { saveTweet } from 'src/app/service/saveTweet';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Output() refresh: EventEmitter<boolean> = new EventEmitter();

  whatsHappeningInput: string = '';
  tweet: Tweet = new Tweet;
  maxChars: number = 130;


  createTweet(content: string) {
    const user = {
      name: 'Marlo',
      imageUrl: 'https://pbs.twimg.com/profile_images/1583138034878484480/Vo185c3s_x96.jpg',
      userName: 'marlo_felipe'
    }

    const tweet = {
      ...this.tweet,
      user: user,
      content: content,
      createdDate: new Date()
    }

    saveTweet(tweet);
    this.whatsHappeningInput = '';
    this.refresh.emit(true);
  }

  subTract(str: string) {
    let limit = 130
    const stringSize = str.split('').length;
    const charLeft = limit - stringSize
    return charLeft;
  }

}

