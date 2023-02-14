import { NgModule } from "@angular/core";
import { Margin10Directive } from './margins.directive'
import { BGBlueDirective } from './bgBlue.directive'

@NgModule({
    declarations: [
        BGBlueDirective, Margin10Directive
    ],

    exports: [
        BGBlueDirective, Margin10Directive
    ]
})
export class DirectivesModule { }