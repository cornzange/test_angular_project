import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PostsService } from './posts.service';


@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class PostsComponent implements OnInit, OnDestroy {
    constructor(private service: PostsService) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getPosts();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getPosts(): void {
        this.observable$ = this.service.getAllPosts()
    }
}
