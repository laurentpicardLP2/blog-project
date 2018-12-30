import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


export class PostsService {

    posts:any[] = [];
    postsSubject = new Subject<any[]>();

    constructor() {
        this.getPosts();
    }

    ngOnInit() {
    }

    emitPostsSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    getPosts() {
        firebase.database().ref('/posts')
            .on('value', (data: DataSnapshot) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPostsSubject();
            });
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    savePost(loveIts, id){
        const postIndex = this.posts.findIndex((postEl) => postEl.id == id);;
        this.posts[postIndex].loveIts = loveIts;
        this.savePosts();
        this.emitPostsSubject();
    }

    removePost(id){
        const postIndexToRemove = this.posts.findIndex((postEl) => postEl.id == id);

        if (this.posts[postIndexToRemove] != undefined) {
            this.posts.splice(postIndexToRemove, 1);
            this.savePosts();
        }
        this.emitPostsSubject();
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPostsSubject();
    }
}