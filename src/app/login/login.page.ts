/*
Killian Gardahaut   1902104 
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      data => {
        this.navCtrl.navigateRoot("cv");
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
