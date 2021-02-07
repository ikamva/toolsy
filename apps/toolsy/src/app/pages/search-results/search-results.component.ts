import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ITool } from '@toolsy/models';
import { ToolsyOverlayService } from '@toolsy/tool-overlay';
import { Observable } from 'rxjs';

@Component({
  selector: 'toolsy-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  search: string;
  tool: ITool;
  tools$: Observable<ITool[]>;


  constructor(private activatedRoute: ActivatedRoute, private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore) {
    this.search = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {

  }

  searchTool() {
    // this.tools$ = this.firestore.collection<ITool>('tools', ref => ref.where()).valueChanges();
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
