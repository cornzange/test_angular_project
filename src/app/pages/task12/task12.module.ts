import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task12Component } from './task12.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule],
    declarations: [Task12Component],
})
export class Task12Module { }
