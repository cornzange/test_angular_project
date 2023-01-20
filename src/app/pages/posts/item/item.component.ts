import { Component, Input } from '@angular/core';

@Component({
    selector: 'posts-item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.styles.css']
})
export class ItemComponent {
    @Input() title: string = "";
    @Input() body: string = "";
    @Input() postId: string = "";
    isCommentsVisible: boolean = false;

    public toggleComments() {
        this.isCommentsVisible = !this.isCommentsVisible
    }
}
