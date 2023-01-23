import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'comment-component',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.styles.css']
})
export class CommentComponent {
    constructor() { }
    @Input() commentId: number
    @Input() postId: number
    @Input() name: string
    @Input() email: string
    @Input() body: string
    @Input() isCommentLiked: boolean = false;


    @Output() onChanged = new EventEmitter<number>();
    toggleLike() {
        console.log("toggleLike")
        this.onChanged.emit(this.commentId);
    }
}
