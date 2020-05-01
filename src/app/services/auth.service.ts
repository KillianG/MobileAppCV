/*
Killian Gardahaut   1902104 
*/
import { JwtToken } from './../models/jwt-token';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private jwtToken: JwtToken;
  private loggedUser: string;

  constructor(private urlService: UrlService, private httpClient: HttpClient) {
    this.jwtToken = new JwtToken(null);
    this.jwtToken.access_token = '';
    this.jwtToken.refresh_token = '';
  }

  register(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.httpClient.post(this.urlService.getUrl() + "/user/register", body, 
    { headers: new HttpHeaders({ "Content-Type": "application/json"})
    });
  }

  login(username: string, password: string): Observable<boolean> {
    const body = { username, password };
    console.log(body);
    return this.httpClient.post<JwtToken>(this.urlService.getUrl() + "/user/login", body,
    { headers: new HttpHeaders({ "Content-Type": "application/json"})
    })
    .pipe(
      tap(tokens => this.doLoginUser(username, tokens)),
      mapTo(true)
    );
  }

  logout() {
    return this.doLogoutUser();
  }

  getJwtToken() {
    return this.jwtToken;
  }

  refreshToken() {
    const refresh_token = {
      'refresh_token': this.jwtToken.refresh_token
    };

    return this.httpClient.post<JwtToken>(this.urlService.getUrl() + "/user/refresh_token", refresh_token)
    .pipe(
      tap(tokens => { this.storeTokens(tokens)})
    );
  }

  isLoggedIn() {
    this.jwtToken.access_token = localStorage.getItem(this.JWT_TOKEN);
    this.jwtToken.refresh_token = localStorage.getItem(this.REFRESH_TOKEN);
    return !!this.getJwtToken().access_token;
  }

  private doLoginUser(username: string, token: JwtToken) {
    this.loggedUser = username;
    this.storeTokens(token);
  }

  private storeTokens(jwt: JwtToken) {
    localStorage.setItem(this.JWT_TOKEN, jwt.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, jwt.refresh_token);
    this.jwtToken.access_token = jwt.access_token;
    this.jwtToken.refresh_token = jwt.refresh_token;
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    this.jwtToken.access_token = null;
    this.jwtToken.refresh_token = null;
  }
}
