import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
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
  toolsTemp: ITool[];
  results: any;
  index = client.initIndex('tools');
  ref: ToolsyOverlayRef;
  tags: string[] = [];
  categories: string[] = [];
  toolsLoading = new Array<number>(12);

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore) {
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

    this.hits = undefined;
    this.query = query;
    this.results = await this.index.search(query);

    this.router.navigate(['../search', query])

    // store tools in temp
    this.toolsTemp = this.results.hits as ITool[];

    console.log(this.tags.length)
    // filter tools by tags
    this.hits = this.categories.length > 0 ? this.toggleTags(this.categories, this.tags) : this.toolsTemp;

  }

  toggleTags(categories: string[], tags: string[]) {
    const tools = this.toolsTemp.filter(tool => {


      return tool.categories.filter(category =>
        categories.indexOf(category) > -1
      ).length > 0 &&
        tool.tags.filter(tag =>
          tags.indexOf(tag) > -1
        ).length > 0
    }
    )

    return tools;
  }

}
