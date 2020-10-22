import { Component, TemplateRef } from '@angular/core';
import { ToolsyOverlayService } from '@toolsy/tool-overlay';

@Component({
  selector: 'toolsy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private toolsyOverlay: ToolsyOverlayService) { }

  open(content: TemplateRef<any>) {
    const ref = this.toolsyOverlay.open(content, null, {
      hasBackdrop: true,
      maxHeight: '80vh',
      minHeight: '80vh',
      minWidth: '80vw',
      maxWidth: '80vw',
      panelClass: [
        'bg-white',
        'shadow-md',
        'rounded-md',
        'animated',
        'slideInRight',
        'faster'
      ],
      backdropClass: 'bg-backdrop',
      positionStrategy: 'center'
    });

    ref.afterClosed$.subscribe(res => { });
  }
}
