export abstract class Rule {
    abstract validate(value: any): Promise<boolean> | boolean; 
    abstract getErrorMessage(): string;
  }
  
export class RequiredRule extends Rule {
    validate(value: any): boolean {
      return value.trim().length > 0;
    }
  
    getErrorMessage(): string {
      return 'To pole jest wymagane.';
    }
  }
  

export class EmailRule extends Rule {
  validate(value: any): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  getErrorMessage(): string {
    return 'Wprowadź poprawny adres e-mail.';
  }
}
  
export class PasswordRule extends Rule {
    validate(value: any): boolean {
      return value.length >= 6;
    }
  
    getErrorMessage(): string {
      return 'Hasło musi mieć co najmniej 6 znaków.';
    }
  }

  export class LengthRule extends Rule {
    private minLength: number;
  
    constructor(minLength: number) {
      super();
      this.minLength = minLength;
    }
  
    validate(value: any): boolean {
      return value.length >= this.minLength;
    }
  
    getErrorMessage(): string {
      return `Wartość musi mieć co najmniej ${this.minLength} znaków.`;
    }
  }