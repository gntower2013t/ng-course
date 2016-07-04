import {Component, PLATFORM_DIRECTIVES} from "@angular/core";
import {Users} from "./Users/Users";
import {User} from "./Users/User/User";

@Component({
    selector: 'my-app',
    directives:[Users],
    template: `
    <h1>Hello World</h1>
    <users></users>
`
})
export class App{

}