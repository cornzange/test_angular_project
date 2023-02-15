import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task22Component } from './task22.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from '../task22/description/description.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Task22Service } from './task22.service';
import { LogService } from './log.service';
@NgModule({
    imports: [DirectivesModule, BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task22Component],
    providers: [Task22Service, LogService]
})
export class Task22Module { }
