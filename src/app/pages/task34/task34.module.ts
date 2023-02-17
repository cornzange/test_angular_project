import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task34Component } from './task34.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from './description/description.module'
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task34Component],
})
export class Task34Module { }
