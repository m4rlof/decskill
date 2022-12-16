import { Tweet } from "../models/tweet.model";

export const saveTweet = (tweet: Tweet) => {
    const parsedTweet: Tweet[] = JSON.parse(localStorage.getItem('tweets')!);

    if (parsedTweet !== null) {
        parsedTweet.unshift(tweet)
        localStorage.setItem('tweets', JSON.stringify(parsedTweet));
        
    } else {
        localStorage.setItem('tweets', JSON.stringify([tweet]));
    }

};