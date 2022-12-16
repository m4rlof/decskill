import { Tweet } from "../models/tweet.model";

export const getTweet = () => {
    const tweetList: Tweet[] = JSON.parse(localStorage.getItem('tweets')!);
    return tweetList
}