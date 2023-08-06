import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  message3!: string;
  myControl2!: FormControl;

  message4!: string;
  formGroup!: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'ngModelを使う';
    this.text1 = '';

    this.message2 = 'FormControlを使う';
    this.myControl = new FormControl('OK.');

    this.message3 = 'first message.'
    this.myControl2 = new FormControl('');

    this.message4 = 'FormGroupを使う';
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      mail: new FormControl(''),
      age: new FormControl(0)
    }) 
  }

  doClick() {
    this.message3 = '「' + this.myControl2.value + '」と入力しましたね。';
  }

  onSubmit() {
    let result = this.formGroup.value;
    this.message4 = JSON.stringify(result);
  }
}
