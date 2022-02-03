import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  constructor() { }
  @Input() icon: string = 'fa-pen';
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {}

  onUserClicked(value: boolean = true): void {
    this.clicked.emit(value);
  }

}
