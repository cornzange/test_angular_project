import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task41Component } from './task41.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from './description/description.module'
import { Task41Guard } from '../../guards/task41.guard';
import { ExitTask41Guard } from 'src/app/guards/exit.task41.guard';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task41Component],
    providers: [Task41Guard, ExitTask41Guard]
})
export class Task41Module { }
