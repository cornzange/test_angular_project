import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task23Component } from './task23.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task23/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task23Service } from './task23.service';
import { LogService } from './log.service';
@NgModule({
    imports: [DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task23Component],
    providers: [Task23Service, LogService]
})
export class Task23Module { }
