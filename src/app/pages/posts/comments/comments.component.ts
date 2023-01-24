import { Component, Input, OnChanges, OnDestroy, OnInit, } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CommentsService } from './comments.service'

@Component({
    selector: 'comments-component',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.styles.css', '../../../common/button.styles.css']
})
export class CommentsComponent implements OnChanges, OnInit, OnDestroy {
    constructor(private service: CommentsService) { }

    comments$: Observable<any>;
    @Input() commentsPostId: number
    @Input() likes: number[] = []
    @Input() isCommentsVisible: boolean = false
    locationSubscriptoin: string
    items: any

    ngOnChanges() {
        console.log('This method should run before ngOnInit')
    }

    ngOnInit() {
        this.comments$ = this.service.getCommentsForPost(this.commentsPostId).pipe(tap((elements) => console.log(elements)))
        this.items = this.comments$.subscribe({
            next(position) {
                console.log('Current Position: ', position);
            },
            error(msg) {
                console.log('Error Getting Location: ', msg);
            }
        });
    }

    ngDoCheck() {

        console.log("This method should run after ngOnChanges and ngOnInit")
    }

    ngAfterContentInit() {
        console.log("This method should run after ngOnChanges and ngOnInit")
    }

    ngAfterContentChecked() {
        console.log("This method should run after ngAfterContentInit() and ngDoCheck()")
    }

    ngAfterViewInit() {
        console.log("ngAfterViewChecked")
    }

    ngAfterViewChecked() {
        console.log("This method should run after ngAfterViewInit() and ngAfterContentChecked()")
    }

    ngOnDestroy() {
        this.items.unsubscribe()
        console.log(`onDestroy`);
    }

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
