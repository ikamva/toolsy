import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ITool } from '@toolsy/models';
import { ToolsyOverlayRef, ToolsyOverlayService } from '@toolsy/tool-overlay';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
@Component({
  selector: 'toolsy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scrolledUp = false;
  ref: ToolsyOverlayRef;
  tool: ITool;
  tools: ITool[];
  toolsTemp: ITool[];
  toolsLoading = new Array<number>(12);

  constructor(private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore, private router: Router) {

  }

  goToSearch(search: string) {
    this.router.navigate(['/search', search]);
  }

  ngOnInit() {
    this.getCategories()
  }

  onCategory(name: string) {
    this.tools = this.toolsTemp.filter(tool => {
      return tool.categories.findIndex(category => category === name) > -1
    })
  }

  async getCategories() {
    this.tools = this.toolsTemp = await this.firestore.collection<ITool>('tools').valueChanges().pipe(first()).toPromise();
  }

  open(content: TemplateRef<any>) {
    this.ref = this.toolsyOverlay.open(content, null, {
      hasBackdrop: true,
      maxHeight: '100vh',
      minHeight: '100vh',
      minWidth: '100vw',
      maxWidth: '100vw',
      panelClass: [
        'overflow-y-auto'
      ],
      backdropClass: 'bg-backdrop',
      positionStrategy: 'center'
    });

    this.ref.afterClosed$.subscribe(() => { });
  }

  selected(tool: ITool) {
    this.tool = tool;
  }

}
