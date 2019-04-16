import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges {

  @Input()
  testObj: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('something has changed');
    console.log('changes', changes);
  }

  ngOnInit() {

  }

}
