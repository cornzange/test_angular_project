import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DescriptionComponent } from './description.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [DescriptionComponent],
    exports: [DescriptionComponent],
})
export class DescriptionModule { }
