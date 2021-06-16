import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFormData } from 'src/layouts/auth/models/interfaces';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  private _data: AuthFormData;

  constructor(private fb: FormBuilder) {
  }

  @Input()
  set data(value: AuthFormData) {
    this._data = value;
  }

  get data(): AuthFormData {
    return this._data;
  }

  form: FormGroup;
  hide = true;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    console.log('On Submit');
  }

  getErrorMessage(controlName: string): string {
    if (this.form.get(controlName).hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get(controlName).hasError(controlName) ? `Not a valid ${controlName}` : '';
  }
}
