import { GithubService } from './../../services/github.service';
import { Component, OnInit , ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;
  userName: string;
  error = null;

  constructor(private github: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  handleFind() {
    this.github.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = 'User Not Found';
        this.ref.detectChanges();
      }
    );
  }

}
