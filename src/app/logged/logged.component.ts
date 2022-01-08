import { Component, OnInit } from '@angular/core';
import { User } from './logged';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css'],
})
export class LoggedComponent implements OnInit {
  message = '';
  json = '';
  model = new User('', '');
  submitted = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.submitted = true;
  }

  checkUser() {
    this.json = JSON.stringify(this.model);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('access-control-allow-origin', '*');

    this.http
      .get(`http://localhost:3000/check?json=${this.json}`)
      .subscribe((res) => {
        if (JSON.stringify(res).indexOf('success') != -1) {
          this.message = 'You are logged in successfully!';
        } else {
          this.message = 'Invalid credentials!';
        }
      });
  }

  ngOnInit(): void {}
}
