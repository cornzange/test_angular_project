import { Component, Input } from '@angular/core';

@Component({
    selector: 'comment-component',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.styles.css']
})
export class CommentComponent {
    constructor() { }
    @Input() postId: number;
    @Input() name: string = "";
    @Input() email: string = "";
    @Input() body: string = "";
    isCommentLiked: boolean = false;

    public toggleLike() {
        this.isCommentLiked = !this.isCommentLiked
    }
}
