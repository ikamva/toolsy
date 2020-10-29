import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ITool } from '@toolsy/models';
import { ToolsyOverlayService } from '@toolsy/tool-overlay';

@Component({
  selector: 'toolsy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tool: ITool;

  constructor(private toolsyOverlay: ToolsyOverlayService) {
    this.tool = {
      name: 'Blob Maker',
      web: {
        url: 'https://www.blobmaker.app',
        website_name: 'www.blobmaker.app'
      },
      tags: ['blob', 'design'],
      media: {
        logo: 'assets/images/tools/blobmaker.png',
        snapshot: ['assets/images/tools/blobmaker_snap.png', 'assets/images/tools/blobmaker_snap.png'],
        videos: []
      },
      description: {
        line: 'Make organic SVG shapes for your next design',
        full: 'Blobmaker is a free generative design tool made with 💕 by z creative labs, to help you quickly create random, unique, and organic-looking SVG shapes.'
      }
    }
  }

  open(content: TemplateRef<any>) {
    const ref = this.toolsyOverlay.open(content, null, {
      hasBackdrop: true,
      maxHeight: '90vh',
      minHeight: '80vh',
      minWidth: '90vw',
      maxWidth: '90vw',
      panelClass: [
        'bg-dialog',
        'shadow-md',
        'rounded-md',
        'animated',
        'slideInRight',
        'faster',
        'overflow-y-auto'
      ],
      backdropClass: 'bg-backdrop',
      positionStrategy: 'center'
    });

    ref.afterClosed$.subscribe(res => { });
  }
}
