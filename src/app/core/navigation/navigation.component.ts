import { Component, OnInit } from '@angular/core';

@Component({
  host: {
    '(document: click)': 'onClick()'
  },
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  show: boolean;

  constructor() {
    this.show = false;
  }

  toggleMenu(event: Event){
    this.cancelToggle(event);
    this.show = !this.show;
  }

  onClick(){
    this.show = false;
  }

  cancelToggle(event: Event){
    event.preventDefault();
    event.stopPropagation();
    event.cancelBubble = true;
    return;
  }

  ngOnInit() {
  }

}
