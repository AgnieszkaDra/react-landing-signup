export interface Field {
    config: {
      name: string;
      label: string;
      type: string;
      required?: boolean;
      placeholder?: string;
      min?: number;
      max?: number;
      options?: { label: string; value: string | number }[];
    };
    errors: string[];
    validate?(value: string): { valid: boolean; message: string };
    getValue(): string;
  }

  export abstract class Rule {
    abstract validate(value: any): Promise<boolean> | boolean; 
    abstract getErrorMessage(): string;
}
export class InputField implements Field {
    public errors: string[] = [];
    private inputElement!: HTMLInputElement;
    private errorElement!: HTMLElement;
  
    constructor(
      public config: { name: string; label: string; type: string, placeholder: string },
      public rules: Rule[] = []
    ) {}
  
    getValue(): string {
      return this.inputElement?.value || '';
    }
  
    validate(value: string): { valid: boolean; message: string } {
        this.errors = [];
        let isValid = true;
      
        for (const rule of this.rules) {
          if (!rule.validate(value)) {
            isValid = false;
            this.errors.push(rule.getErrorMessage());
          }
        }
      
        return {
          valid: isValid,
          message: this.errors[0] || '',
        };
      }

    
}

export default InputField

