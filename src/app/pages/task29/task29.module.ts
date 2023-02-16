import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task29Component } from './task29.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task29/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task29Service } from './task29.service';
import { M1Module } from './m1/m1.module'
@NgModule({
    imports: [M1Module, DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task29Component],
    providers: [Task29Service]
})
export class Task29Module { }
