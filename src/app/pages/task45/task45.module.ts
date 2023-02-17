import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task45Component } from './task45.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from './description/description.module'
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task45Component],
})
export class Task45Module { }
