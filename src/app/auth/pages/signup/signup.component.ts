import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRouteNames } from 'src/app/shared/routes';
import { LoginParams, SignupParams } from '../../model/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  subscriptions: Subscription[] = [];
  hasAccount = false;
  signupForm!: FormGroup;
  isLoggingIn = false;
  name: any = 'Create an account';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setupSignupForm();
  }

  signUp(signupCredentials: SignupParams): void {
    console.log('credentials here --> ', signupCredentials);
    if (!signupCredentials.password) {
      return;
    }
    this.isLoggingIn = true;
    this.subscriptions.push(
      this.authService.signUp(signupCredentials).subscribe(
        (data: any) => {
          this.router.navigateByUrl(`/${AppRouteNames.Dashboard}`, {
            replaceUrl: true,
          });
        },
        () => {},
        () => {
          // this.isLoggingIn = false;
        }
      )
    );
  }
  private setupSignupForm(): void {
    this.signupForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      password: [null, Validators.required],
      emailAddress: [null, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
