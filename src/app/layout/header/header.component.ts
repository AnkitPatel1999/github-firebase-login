import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    ) {
        this.auth.getUser().subscribe((user) => {
          this.email = user.email;
        });
   }

  ngOnInit() { }

  async handleSignOut() {
    try {
      const res = await this.auth.signOut();
      this.router.navigateByUrl('signin');
      this.toastr.info('Login Again To Continue');
      this.email = null;
    } catch (error) {
      this.toastr.error('Something is wrong');
    }
  }

}
