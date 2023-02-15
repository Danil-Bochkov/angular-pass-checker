import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string = '';

  calculateStrength(): void {
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasNumber = /[0-9]/.test(this.password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    const hasLength = this.password.length >= 8;

    if (this.password === '') {
      this.strength = '';
    } else if (!hasLength) {
      this.strength = 'empty';
    } else if (!hasLowerCase && !hasUpperCase && !hasNumber && !hasSymbol) {
      this.strength = 'weak';
    } else if ((hasLowerCase || hasUpperCase) && hasNumber && !hasSymbol) {
      this.strength = 'moderate';
    } else if ((hasLowerCase || hasUpperCase) && hasNumber && hasSymbol) {
      this.strength = 'strong';
    }
  }
}
