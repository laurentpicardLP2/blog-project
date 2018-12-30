import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIts(loveIts, id){
    this.loveIts += loveIts;
    this.postsService.savePost(loveIts, id);
  }

  onRemovePost(id) {
    this.postsService.removePost(id);
  }

}
