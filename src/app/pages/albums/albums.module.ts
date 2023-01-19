import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlbumsComponent } from './albums.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule],
    declarations: [AlbumsComponent],
})
export class AlbumsModule { }
