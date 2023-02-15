import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task24Component } from './task24.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task24/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task24Service } from './task24.service';
@NgModule({
    imports: [DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task24Component],
    providers: [Task24Service]
})
export class Task24Module { }
