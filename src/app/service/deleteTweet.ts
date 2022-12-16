import { Tweet } from "../models/tweet.model";

export const deleteTweet = (index: number) => {
    const parsedTweet: Tweet[] = JSON.parse(localStorage.getItem('tweets')!);
    parsedTweet.splice(index, 1)
    localStorage.setItem('tweets', JSON.stringify(parsedTweet));
};