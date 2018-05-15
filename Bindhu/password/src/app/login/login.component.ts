import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {

  };
  
  len: boolean = false;
  letter: boolean = false;
  capital: boolean = false;
  number: boolean = false;
  symbol: boolean = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  onKey(event: any) {
    console.clear();
    console.log(this.user.password);

    if (this.user.password.length > 0) {

      if (this.user.password.length >= 8) {
          console.log('lenth is good');
          this.len = true;
      } else{
        console.log('lenth should be at least 8');
        this.len = false;
      }

      if (this.user.password.match(/[A-Z]/)) {
          console.log('have at least one capital letter');
          this.capital = true;
      } else{
        console.log('need at least one capital letter');
        this.capital = false;
      }

      if (this.user.password.match(/\d/)) {
          console.log('have at least one number');
          this.number = true;
      } else{
        console.log('need at least one number');
        this.number = false;
      }

      if (this.user.password.match(/[^a-zA-Z0-9\-\/]/)) {
          console.log('have atleast one symbol');
          this.symbol = true;
      } else{
        this.symbol = false;
      }

    }
  }

}
