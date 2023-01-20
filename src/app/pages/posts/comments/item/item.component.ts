import { Component, Input } from '@angular/core';

@Component({
    selector: 'comment-item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.styles.css']
})
export class ItemComponent {
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
