import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task26Component } from './task26.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task26/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task26Service } from './task26.service';
import { M1Module } from './m1/m1.module'
@NgModule({
    imports: [M1Module, DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task26Component],
    providers: [Task26Service]
})
export class Task26Module { }
