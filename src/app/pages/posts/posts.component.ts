import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PostsService } from './posts.service';


@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class PostsComponent {
    constructor(private service: PostsService) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getPosts();
    }

    getPosts(): void {
        this.observable$ = this.service.getAllPosts()
    }
}
