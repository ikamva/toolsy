import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ITool } from '@toolsy/models';
import { ToolsyOverlayRef, ToolsyOverlayService } from '@toolsy/tool-overlay';
import { Observable } from 'rxjs';
import algolia from 'algoliasearch/lite';
import { environment } from '../../../environments/environment';
import { OverlayScrollbarsComponent } from "overlayscrollbars-ngx";

const client = algolia(environment.algolia.appID, environment.algolia.apiKey);

@Component({
  selector: 'toolsy-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  search: string;
  tool: ITool;
  query: string;
  hits: ITool[];
  results: any;
  index = client.initIndex('tools');
  ref: ToolsyOverlayRef;

  constructor(private activatedRoute: ActivatedRoute, private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore) {
    this.search = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.handleSearch(this.search)
  }


  open(content: TemplateRef<any>) {
    this.ref = this.toolsyOverlay.open(content, null, {
      hasBackdrop: true,
      height: '100%',
      width: '100vh',
      minHeight: '100vh',
      minWidth: '100vw',
      maxWidth: '100vw',
      panelClass: [

      ],
      backdropClass: 'bg-backdrop',
      positionStrategy: 'center'
    });

    this.ref.afterClosed$.subscribe(res => { });

  }

  selected(tool: ITool) {
    this.tool = tool;
  }

  async handleSearch(query: string) {
    console.log(query)
    this.query = query;
    this.results = await this.index.search(query);

    this.hits = this.results.hits as ITool[];
  }

}
