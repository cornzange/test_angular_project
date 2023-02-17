import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task38Component } from './task38.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from './description/description.module'
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [RouterModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task38Component],
})
export class Task38Module { }
