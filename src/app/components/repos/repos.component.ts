import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input, OnChanges, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos = [];
  constructor(private github: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.repoUrl) {
      this.github.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos;
          this.ref.detectChanges();
        });
    } else {
      (err) => {
        console.log(err);
      };
    }
  }

}
