import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onSelectButtonClick(value: boolean = true): void {
    this.selectClick.emit(value);
  }

  onUpdateButtonClick(value: boolean = true): void {
    this.selectClick.emit(value);
  }

  onDeleteButtonClick(value: boolean = true): void {
    this.selectClick.emit(value);
  }

}
