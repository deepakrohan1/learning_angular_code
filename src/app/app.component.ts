import { Component, Directive, HostBinding, OnInit } from '@angular/core';
import {of } from 'rxjs';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { ExmpleService } from './services/exmple.service';

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
export class FirstDirective implements OnInit{
  @HostBinding() 
  innerText = 'This is atext';
  a = of(1,2,3,4,5);

  constructor(private exampleService: ExmpleService) { };

  ngOnInit(){
    // this.a.subscribe(x => {
    //   console.log(x); 
    // });

    this.exampleService.getSampleData().subscribe(r => {
      console.log(r);
    });
  }

}