import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toolsy-tool-dialog',
  templateUrl: './tool-dialog.component.html',
  styleUrls: ['./tool-dialog.component.scss']
})
export class ToolDialogComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit(true)
  }

}
