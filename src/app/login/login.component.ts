import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/customValidators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Login';

  reactiveForm: FormGroup;
  invalidLogin: boolean = false;
  users = [
    {
      username: 'martin',
      pass: '1111',
    },
    {
      username: 'admin',
      pass: '2222',
    },
    {
      username: 'test',
      pass: 'test',
    },
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        CustomValidators.minChar,
        CustomValidators.noSpaceAllowed,
      ]),
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
    });
  }

  Onlogin() {
    const username = this.reactiveForm.get('username').value;
    const password = this.reactiveForm.get('password').value;

    const user = this.users.find(
      (u) => u.username === username && u.pass === password
    );

    if (user) {
      this.router.navigate(['/home'], { queryParams: { username: username } });
    } else {
      this.invalidLogin = true;
    }
  }
}
