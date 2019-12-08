import { Component, Directive, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-learning-app';
}

@Directive({
  selector: '[first]'
})
export class FirstDirective {
  @HostBinding() 
  innerText = 'This is atext';

}