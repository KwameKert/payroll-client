import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, Subject } from 'rxjs';
import {
  LoginParams,
  LoginResponse,
  LoginResponseData,
  SignupParams,
  User,
} from '../model/auth.model';
import { environment } from 'src/environments/environment';
import { StoreKeys } from 'src/app/shared/contants';
import { BaseResponseObject } from 'src/app/core/models/base-response.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User | undefined;
  loggedInSource = new Subject<boolean>();
  loggedIn$ = this.loggedInSource.asObservable();

  constructor(private http: HttpClient) {}

  signIn(credentials: LoginParams): Observable<LoginResponse | unknown> {
    return this.http
      .post<LoginResponse>(`${environment.baseApi}/login`, credentials)
      .pipe(
        map((loginResponse: LoginResponse) => {
          this.setUser(loginResponse.data);
          this.announceLogin(true);
          return loginResponse.data;
        }),
        catchError((error) => of(console.log('error', error)))
      );
  }

  signUp(
    credentials: SignupParams
  ): Observable<BaseResponseObject<User> | unknown> {
    return this.http
      .post<LoginResponse>(`${environment.baseApi}/login`, credentials)
      .pipe(
        map((loginResponse: LoginResponse) => {
          this.setUser(loginResponse.data);
          this.announceLogin(true);
          return loginResponse.data;
        }),
        catchError((error) => of(console.log('error', error)))
      );
  }

  setUser(user: LoginResponseData): void {
    this.currentUser = {
      id: user.user.id,
      username: user.user.username,
      lastName: user.user.lastName,
      otherNames: user.user.otherNames,
      email: user.user.email,
      picture: user.user.picture,
      phoneNumber: user.user.phoneNumber,
    } as User;

    localStorage.setItem(StoreKeys.Token, btoa(user.token));
    localStorage.setItem(
      StoreKeys.CurrentUser,
      JSON.stringify(this.currentUser)
    );
  }

  logout(): void {
    this.currentUser = undefined;
    localStorage.removeItem(StoreKeys.CurrentUser);
    localStorage.removeItem(StoreKeys.Token);
  }

  announceLogin(isLoggedIn: boolean): void {
    this.loggedInSource.next(isLoggedIn);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(StoreKeys.CurrentUser);
  }
}
