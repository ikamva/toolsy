import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tly-tool-card',
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.scss']
})
export class ToolCardComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() description: string;
  @Input() link: string;

  @Output() viewHandle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  viewClicked() {
    this.viewHandle.emit(true);
  }

}
