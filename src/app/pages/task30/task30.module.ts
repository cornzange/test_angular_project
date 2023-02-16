import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task30Component } from './task30.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task30/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task30Service } from './task30.service';
import { M1Module } from './m1/m1.module'
@NgModule({
    imports: [M1Module, DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task30Component],
    providers: [Task30Service]
})
export class Task30Module { }
