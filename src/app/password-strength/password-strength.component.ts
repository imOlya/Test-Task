import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  strength: string = '';

  checkPasswordStrength(event: Event): void {
    const passwordInput = event.target as HTMLInputElement;
    const password = passwordInput.value;

    if (password.length === 0) {
      this.strength = '';
    } else if (password.length < 8) {
      this.strength = 'easy';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[^a-zA-Z0-9]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.strength = 'strong';
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.strength = 'medium';
      } else {
        this.strength = 'easy';
      }
    }
  }
}
