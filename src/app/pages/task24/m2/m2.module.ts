import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItemModule } from '../item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { M2Component } from './m2.component';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule],
    declarations: [M2Component],
    exports: [M2Component]
})
export class M2Module { }
