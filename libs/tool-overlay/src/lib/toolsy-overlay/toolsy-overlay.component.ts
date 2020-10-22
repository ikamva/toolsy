import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { ToolsyOverlayRef } from '../toolsy-overlay-ref';

@Component({
  selector: 'tly-overlay',
  templateUrl: './toolsy-overlay.component.html',
  styleUrls: ['./toolsy-overlay.component.scss']
})
export class ToolsyOverlayComponent implements OnInit {

  contentType: 'template' | 'string' | 'component';
  content: string | TemplateRef<any> | Type<any>;
  context;

  constructor(private ref: ToolsyOverlayRef) { }

  close() {
    this.ref.close(null);
  }

  ngOnInit() {
    this.content = this.ref.content;

    if (typeof this.content === 'string') {
      this.contentType = 'string';
    } else if (this.content instanceof TemplateRef) {
      this.contentType = 'template';
      this.context = {
        close: this.ref.close.bind(this.ref)
      };
    } else {
      this.contentType = 'component';
    }
  }

}
