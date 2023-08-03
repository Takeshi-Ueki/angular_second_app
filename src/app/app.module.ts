import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Formsモジュールを追加, ReactiveFormsModuleを追加
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    // Formsモジュールを追加
    FormsModule,
    // ReactiveFormsModuleを追加
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
