import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task15Component } from './task15.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task15/description/description.module';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task15Component],
})
export class Task15Module { }
