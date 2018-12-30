export class Post {
    id: number;
    loveIts: number;
    created_at: string;

    constructor(public title: string, public content: string){}
}