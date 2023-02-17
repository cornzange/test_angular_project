import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'comma'
})
export class CommaPipe implements PipeTransform {
    transform(value: number, args?: any): string {

        return value.toString().replace(".", ",");
    }
}