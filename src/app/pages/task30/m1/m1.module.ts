import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemModule } from '../item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { M1Component } from './m1.component';
@NgModule({
    imports: [ReactiveFormsModule, BrowserModule, FormsModule, ItemModule, HttpClientModule],
    declarations: [M1Component],
    exports: [M1Component]
})
export class M1Module { }
