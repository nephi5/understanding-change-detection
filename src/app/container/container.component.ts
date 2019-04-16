import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public changeObj = {
    firstName: 'Nephi',
    lastName: 'Szvoboda',
    age: 30,
    hobbies: ['Cross Fit', 'Running', 'Swimming'],
  };

  constructor() { }

  ngOnInit() {
  }

  public changeLastName() {
    this.changeObj.lastName = 'Changed';
  }

}
