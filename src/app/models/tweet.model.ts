import { User } from "./user.model";

export class Tweet {
    user: User = new User;
    content: string = '';
    likes: number[] = [];
    retweets: number[] = [];
    comments: any[] = [];
    createdDate: Date = new Date;
}
