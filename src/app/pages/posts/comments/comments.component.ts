import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsService } from './comments.service'

@Component({
    selector: 'comments-component',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.styles.css']
})
export class CommentsComponent {
    constructor(private service: CommentsService) { }

    observable$: Observable<any>;
    postId: number

    ngOnDestroy() { console.log(`onDestroy`); }

    getComments(postId: number): void {
        this.observable$ = this.service.getCommentsForPost(postId)
    }
}
