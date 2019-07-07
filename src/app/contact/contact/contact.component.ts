import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocialMediaLink } from 'src/app/shared/models/social-media.model';
import { socialMedia } from 'src/app/shared/data/footer-social-media-list';
import { ContactService } from '../services/contact.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContactForm } from '../models/contact-form.model';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective
} from '@angular/forms';
import { MetaTagService } from 'src/app/shared/services/meta-tag/meta-tag.service';

@Component({
  selector: 'nm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  socialMediaList: SocialMediaLink[] = socialMedia;
  contactForm: FormGroup;
  serverResponseMsg = '';
  error = false;
  submitting = false;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private metaTagService: MetaTagService
  ) {
    this.createForm();
  }

  submitForm({ value, valid }, formDirective: FormGroupDirective): void {
    if (valid) {
      this.sendEmail(value, formDirective);
    }
  }

  createForm(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(150)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(150)
      ]),
      phone: new FormControl('', [Validators.maxLength(20)]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)
      ])
    });
  }

  sendEmail(form: ContactForm, formDirective: FormGroupDirective): void {
    this.submitting = true;
    this.contactService
      .sendEmail(form)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        result => {
          // console.log(result);
          this.contactForm.reset();
          formDirective.resetForm();
          this.serverResponseMsg = result.message;
          this.error = false;
          this.submitting = false;
        },
        error => {
          // console.log(error);
          this.serverResponseMsg = error.error.message;
          this.error = true;
          this.submitting = false;
        }
      );
  }

  getErrorMessage(inputName: string): string {
    const input = this.contactForm.get(inputName);

    return input.hasError('required')
      ? `You must enter a value for ${inputName}.`
      : input.hasError('email')
      ? 'Not a valid email.'
      : input.hasError('maxlength') && inputName === 'phone'
      ? `Cannot exceed 20 characters for ${inputName}.`
      : input.hasError('maxLength')
      ? `Cannot exceed 150 characters for ${inputName}.`
      : '';
  }

  ngOnInit() {
    this.metaTagService.setTitle('Contact | Nasir Mohammad Portfolio');
    this.metaTagService.updateImgTagDefault();
    this.metaTagService.updateDescriptionTagDefault();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
