import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Book } from 'src/app/core/models';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, OnChanges {

  @Input('pages') books: Book[];

  private page: number;
  private bookObserve: BehaviorSubject<Book[]>;
  private paging: Book[];
  private start: number;
  private pageimgNumber: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.paging = null;
    this.bookObserve = new BehaviorSubject(this.books);
    this.start = 0;
    this.pageimgNumber = 10;
  }

  goToEnd(): void {
    this.router.navigate(['/book', { id: this.books.length }]);
    this.start = this.books.length - this.books.length % 10;
  }

  goToStart(): void {
    this.router.navigate(['/book', { id: 1 }]);
    this.start = 0;
  }

  goToPage(flag: number): void {
    
    if(flag > 0 && this.page < this.books.length) this.page++;
    else if( flag > 0 ) this.page = this.books.length;

    if(flag < 0 && this.page > 1) this.page--;
    else if( flag < 0 ) this.page = 1;

    this.router.navigate(['/book', { id: this.page }]);
    this.getPages();
  }

  getPages(){
    while( this.page > this.start + this.pageimgNumber || this.page <= this.start ){
      if( this.page > this.start + this.pageimgNumber ){
        this.start = this.start + this.pageimgNumber;
      } else if( this.page <= this.start ) {
        this.start = this.start - this.pageimgNumber;
      }
    }
  }

  ngOnChanges() {
    this.bookObserve.next(this.books);
  }

  ngOnInit() {
    this.bookObserve.subscribe( (res: Book[]) => { this.paging = res; this.getPages() } );
    let subscribtion = this.route.paramMap.pipe( map( (params: ParamMap) => params.get('id') ) );
    subscribtion.subscribe( res => this.page = +res );
  }

}
