import { AuthService } from './services/auth.service';
import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private auth: AuthService) {
    auth.getUser().subscribe(
      (user) => {
        console.log(user);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  title = 'github-firebase-login';


  ngOnInit() {}
  

}
