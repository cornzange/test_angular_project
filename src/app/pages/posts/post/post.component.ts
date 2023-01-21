import { Component, Input } from '@angular/core';

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.styles.css']
})
export class PostComponent {
    @Input() title: string = "";
    @Input() body: string = "";
    @Input() postId: string = "";
    isCommentsVisible: boolean = false;

    public getPostId() {
        return this.postId
    }
    public toggleComments() {
        this.isCommentsVisible = !this.isCommentsVisible
    }
}
