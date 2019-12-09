import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = null;
  }

  ngOnInit() {

    let sub = this.route.paramMap.pipe( switchMap( (params: ParamMap) => params.get('id') )  );

    sub.subscribe( 
      res => this.id = +res, 
      err => console.log(err) 
    );

  }

}
