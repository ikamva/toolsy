import { Component, Input, OnInit } from '@angular/core';
import { ITool } from '@toolsy/models';
@Component({
  selector: 'tly-tool-dialog-ui',
  templateUrl: './tool-dialog-ui.component.html',
  styleUrls: ['./tool-dialog-ui.component.scss']
})
export class ToolDialogUiComponent implements OnInit {

  index = 0;

  @Input() tool: ITool;

  constructor() { }
  ngOnInit() {

  }

  goToTool(url: string) {
    window.open(url, '_blank');
  }
}
