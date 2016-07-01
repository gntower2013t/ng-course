/**
 * Created by Eyal on 6/17/2016.
 */
import {Component, Input, SkipSelf} from "@angular/core";
import {Service} from "./Service";
import {NgCourse} from "./ng_course_directives";

@NgCourse()
@Component({
    selector: 'child',
    directives: [],
    providers: [],
    styles: [`:host{display: block;padding: 8px;border: 1px solid red;}`],
    template: `
<div>
  Child: <b>{{name}}</b>, service id: <b>{{service.id}}</b>
</div>
`
})
export class Child {
    @Input()name:string;
    constructor(/*@SkipSelf()*/ private service:Service){}
}