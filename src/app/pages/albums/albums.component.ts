import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AlbumsService } from './albums.service';


@Component({
    selector: 'albums',
    templateUrl: './albums.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class AlbumsComponent {
    constructor(private service: AlbumsService) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getAlbums();
    }

    getAlbums(): void {
        this.observable$ = this.service.getAllAlbums()
    }
}
