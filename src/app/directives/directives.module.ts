import { NgModule } from "@angular/core";
import { Margin10Directive } from './margin10.directive'
import { BGBlueDirective } from './bgBlue.directive'
import { PaddingDirective } from './padding.directive'
import { WhileDirective } from './while.directive'

const directives = [BGBlueDirective, Margin10Directive, PaddingDirective, WhileDirective]

@NgModule({
    declarations: directives,

    exports: directives
})
export class DirectivesModule { }