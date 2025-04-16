import React from 'react';
import { Login } from '../../auth/Login';
import { Register } from '../../auth/Register'; // Assuming you have it

export class AuthFormWrapper {
  type: 'login' | 'register';
  fields: any[];

  constructor(type: 'login' | 'register' = 'login') {
    this.type = type;
    this.fields = [];
  }

  setType(type: 'login' | 'register', fields: any[]) {
    this.type = type;
    this.fields = fields;
  }

  render(): React.ReactElement {
    if (this.type === 'register') {
      return <Register fields={this.fields} />;
    }

    return <Login fields={this.fields} />;
  }
}
