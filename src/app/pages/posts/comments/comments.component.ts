import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsService } from './comments.service'

@Component({
    selector: 'comments-component',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.styles.css']
})
export class CommentsComponent {
    constructor(private service: CommentsService) { }

    comments$: Observable<any>;
    @Input() commentsPostId: number
    @Input() isCommentsVisible: boolean

    ngOnDestroy() { console.log(`onDestroy`); }

    getComments(postId: number): void {
        this.comments$ = this.service.getCommentsForPost(postId)
    }
}
