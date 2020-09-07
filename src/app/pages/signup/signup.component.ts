import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
    ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    this.auth.signUp(email, password)
    .then((res) => {
      this.router.navigateByUrl('/');
      this.toastr.success('Signup Success');
    })
    .catch((err) => {
      console.log(err.message);
      this.toastr.error('Signup Failed');
    });
  }


}
