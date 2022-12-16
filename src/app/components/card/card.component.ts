import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { counter } from 'src/app/utils/counter';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() profileImage: string = '';
  @Input() name: string = '';
  @Input() userName: string = '';
  @Input() content: string = '';
  @Input() date: Date = new Date;
  @Output() deleteTweet: EventEmitter<boolean> = new EventEmitter();

  open: boolean = false
  createdSeconds: number = 0;
  cancelWrapper: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.createdSeconds = counter(this.date)
  }

  openPopover() {
    this.open = !this.open
  }

  excludeTweet() {
    this.deleteTweet.emit(true);
  }

  openCancelWrapper() {
    this.cancelWrapper = !this.cancelWrapper
  }


  cancelDelete() {
    this.cancelWrapper = !this.cancelWrapper
    this.open = !this.open;
  }
}
