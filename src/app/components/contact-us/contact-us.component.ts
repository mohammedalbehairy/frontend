import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      name: this.fb.control(null, [Validators.required]),
      phone: this.fb.control(null, [Validators.required]),
      subject: this.fb.control(null, [Validators.required]),
    });
  }

  submitForm() {

    if (this.contactForm.valid) {
      this.submitted = true;
      this.callHttp();
    }
  }

  callHttp() {
    this.contactService.create(this.contactForm.value).subscribe(
      (res) => {
        this.contactForm.reset();
        this.submitted = false;
      },
      (err) => {
        this.submitted = false;
      }
    );
  }

  get contactFormControl() {
    return this.contactForm.controls;
  }
}
