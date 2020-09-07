import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    this.auth.signIn(email, password)
    .then((res) => {
      this.router.navigateByUrl('');
      this.toastr.success('Signin Success');
    })
    .catch((err) => {
      console.log(err.message);
      this.toastr.error('Signin Failed');
    });
  }

}
