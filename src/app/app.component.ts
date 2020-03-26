import { Component, OnInit } from '@angular/core';
import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A superb app';
  cats: Cat[];

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.getAllCats();
  }

  getAllCats(): void {
    this.catService.getAllCats()
        .subscribe(cats => this.cats = cats);
  }
 }
