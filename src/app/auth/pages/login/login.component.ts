import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRouteNames } from 'src/app/shared/routes';
import { LoginParams } from '../../model/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  subscriptions: Subscription[] = [];
  hasAccount = false;
  loginForm!: FormGroup;
  isLoggingIn = false;
  name: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setupLoginForm();
  }

  login(loginCredentials: LoginParams): void {
    console.log('credentials here --> ', loginCredentials);
    if (!loginCredentials.password) {
      return;
    }
    this.isLoggingIn = true;
    this.subscriptions.push(
      this.authService.signIn(loginCredentials).subscribe(
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
  private setupLoginForm(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
