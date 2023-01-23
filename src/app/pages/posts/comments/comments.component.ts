import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CommentsService } from './comments.service'

@Component({
    selector: 'comments-component',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.styles.css', '../../../common/button.styles.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
    constructor(private service: CommentsService) { }

    comments$: Observable<any>;
    @Input() commentsPostId: number
    @Input() likes: number[] = []
    @Input() isCommentsVisible: boolean = false

    ngOnInit() {
        this.comments$ = this.service.getCommentsForPost(this.commentsPostId).pipe(tap((elements) => console.log(elements)))
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    onLikesChanged(commentId: number) {
        console.log("onLikesChanged", commentId)
        if (this.checkLike(commentId)) {
            this.likes = this.likes.filter(like => like !== commentId)
        }
        else {
            this.likes = [...this.likes, commentId]
        }
    }

    checkLike(commentId) {
        return this.likes.includes(commentId)
    }

    public toggleCommentsVisible() {
        this.isCommentsVisible = !this.isCommentsVisible
    }
}
