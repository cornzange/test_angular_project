import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Task16Component } from './task16.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { DescriptionModule } from './description/description.module'
import { Margin10Directive } from 'src/app/directives/margins.directive';
import { BGBlueDirective } from 'src/app/directives/bgBlue.directive';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule, DescriptionModule],
    declarations: [Task16Component, Margin10Directive, BGBlueDirective],
})
export class Task16Module { }
