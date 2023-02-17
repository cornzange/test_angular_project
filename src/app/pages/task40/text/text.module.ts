import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text.component';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [TextComponent],
    exports: [TextComponent],
    bootstrap: [TextComponent]
})
export class TextModule { }
