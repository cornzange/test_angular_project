import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task25Component } from './task25.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task25/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task25Service } from './task25.service';
import { M1Module } from './m1/m1.module'
import { M2Module } from './m2/m2.module'
@NgModule({
    imports: [M1Module, M2Module, DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task25Component],
    providers: [Task25Service]
})
export class Task25Module { }
