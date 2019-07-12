import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Subject } from 'rxjs';
import { MetaTagService } from 'src/app/shared/services/meta-tag/meta-tag.service';

@Component({
  selector: 'nm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  loginForm: FormGroup;
  serverResponseMsg = '';
  error = false;
  submitting = false;

  constructor(private fb: FormBuilder, private metaTagService: MetaTagService) {
    this.createForm();
  }

  submitForm({ value, valid }): void {
    if (valid) {
      this.login(value);
    }
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(150)
      ])
    });
  }

  login(form: any): void {
    this.submitting = true;
    console.log('logging in');
  }

  getErrorMessage(inputName: string): string {
    const input = this.loginForm.get(inputName);

    return input.hasError('required')
      ? `You must enter a value for ${inputName}.`
      : input.hasError('maxLength')
      ? `Cannot exceed 150 characters for ${inputName}.`
      : '';
  }

  ngOnInit() {
    this.metaTagService.setTitle('Admin Login | Nasir Mohammad Portfolio');
    this.metaTagService.updateImgTagDefault();
    this.metaTagService.updateDescriptionTagDefault();
    this.metaTagService.updateUrlTag('/admin/login');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
