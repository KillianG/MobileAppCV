/*
Killian Gardahaut   1902104 
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private readonly baseUrl: string;

  constructor() { 
    this.baseUrl = "http://localhost:3001";
  }

  getUrl() {
    return this.baseUrl;
  }
}
