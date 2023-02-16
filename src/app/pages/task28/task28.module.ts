import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task28Component } from './task28.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task28/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task28Service } from './task28.service';
import { M1Module } from './m1/m1.module'
@NgModule({
    imports: [M1Module, DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task28Component],
    providers: [Task28Service]
})
export class Task28Module { }
