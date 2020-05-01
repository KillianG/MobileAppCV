/*
Killian Gardahaut   1902104 
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public password: string;
  public email: string;

  constructor(private navCrtl: NavController, private authService: AuthService) { }
  
  ngOnInit() {
  }

  goBack() {
    this.navCrtl.back();
  }

  onSubmit() {
    this.authService.register(this.email, this.password).subscribe(
      data => {
        this.navCrtl.back();
      },
      error => {
      }
    );
  }
}
