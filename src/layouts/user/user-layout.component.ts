import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  constructor() { }

  title = 'Angular Best Practices';

  ngOnInit(): void {
  }

}
