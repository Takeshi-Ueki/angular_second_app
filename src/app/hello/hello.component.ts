import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  title!: string;
  message!: string;
  text1!: string;

  message2!: string;
  myControl!: FormControl;

  constructor() {

  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'ngModelを使う';
    this.text1 = '';

    this.message2 = 'FormControlを使う';
    this.myControl = new FormControl('OK.')
  }
}
