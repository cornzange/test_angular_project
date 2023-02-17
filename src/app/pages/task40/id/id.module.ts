import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IdComponent } from './id.component';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [IdComponent],
    exports: [IdComponent],
    bootstrap: [IdComponent]
})
export class IdModule { }
