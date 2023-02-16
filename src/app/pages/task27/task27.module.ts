import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task27Component } from './task27.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task27/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task27Service } from './task27.service';
import { M1Module } from './m1/m1.module'
@NgModule({
    imports: [M1Module, DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task27Component],
    providers: [Task27Service]
})
export class Task27Module { }
