import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row-component.html',
  styleUrls: ['./data-row-component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onSelectClick(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }
  onUpdateClick(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }
  onDeleteClick(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }


}