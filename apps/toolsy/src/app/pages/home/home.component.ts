import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICategory, ITool } from '@toolsy/models';
import { ToolsyOverlayService } from '@toolsy/tool-overlay';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'toolsy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  tool: ITool;
  tools$: Observable<ITool[]>;


  constructor(private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore) {

  }

  ngOnInit() {
    this.tools$ = this.firestore.collection<ITool>('tools').valueChanges();
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

  selected(tool: ITool) {
    this.tool = tool;
  }


}
