import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { ToolsyOverlayService } from '@toolsy/tool-overlay';

@Component({
  selector: 'tly-tool-dialog-ui',
  templateUrl: './tool-dialog-ui.component.html',
  styleUrls: ['./tool-dialog-ui.component.scss']
})
export class ToolDialogUiComponent implements OnInit {


  constructor(private toolsyOverlay: ToolsyOverlayService) { }



  ngOnInit() {

  }
}
