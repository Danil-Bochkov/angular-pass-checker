import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PasswordStrengthComponent }   from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ PasswordStrengthComponent ],
    bootstrap:    [ PasswordStrengthComponent ]
})
export class AppModule { }