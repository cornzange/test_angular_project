import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AlbumsService } from './albums.service';


@Component({
    selector: 'albums',
    templateUrl: './albums.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
    constructor(private service: AlbumsService) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getAlbums();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getAlbums(): void {
        this.observable$ = this.service.getAllAlbums()
    }
}
