import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  private _name: string;

  constructor() {
  }

  @Input()
  set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name;
  }

  ngOnInit(): void {
  }

}
