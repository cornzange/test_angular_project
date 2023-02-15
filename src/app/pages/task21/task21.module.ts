import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task21Component } from './task21.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task21/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
@NgModule({
    imports: [DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task21Component],
})
export class Task21Module { }
