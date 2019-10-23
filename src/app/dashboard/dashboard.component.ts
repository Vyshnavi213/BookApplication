import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { User } from '../user';
import { HeroService } from '../hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private http: HttpClient) {

  }

  public httpHeaders = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'responseType': 'json'
    })
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
