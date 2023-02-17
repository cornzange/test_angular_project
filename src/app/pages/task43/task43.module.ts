import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task43Component } from './task43.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from './description/description.module'
import { CommaPipe } from 'src/app/pipes/comma.pipe';
import { JoinPipe } from 'src/app/pipes/join.pipe';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task43Component, CommaPipe, JoinPipe],
})
export class Task43Module { }
