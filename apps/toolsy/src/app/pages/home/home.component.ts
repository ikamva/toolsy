import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ITool } from '@toolsy/models';
import { ToolsyOverlayRef, ToolsyOverlayService } from '@toolsy/tool-overlay';
import { Observable } from 'rxjs';
import { IntersectionObserverService, INTERSECTION_ROOT_MARGIN, INTERSECTION_THRESHOLD } from '@ng-web-apis/intersection-observer';
@Component({
  selector: 'toolsy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    IntersectionObserverService,
    {
      provide: INTERSECTION_THRESHOLD,
      useValue: 0.1,
    },
    {
      provide: INTERSECTION_ROOT_MARGIN,
      useValue: '400px',
    },
  ],
})
export class HomeComponent implements OnInit {
  scrolledUp = false;
  ref: ToolsyOverlayRef;
  tool: ITool;
  tools$: Observable<ITool[]>;
  toolsLoading = new Array<number>(12);

  constructor(private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore, private router: Router, @Inject(IntersectionObserverService) entries$: IntersectionObserverService,) {
    entries$.subscribe(entries => {
      // Don't forget to unsubscribe
      console.log(entries);
    });


  }

  goToSearch(search: string) {
    this.router.navigate(['/search', search]);
  }

  ngOnInit() {
    this.tools$ = this.firestore.collection<ITool>('tools').valueChanges();
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

  onIntersection(intersections: IntersectionObserverEntry[]) {
    this.scrolledUp = !intersections[0].isIntersecting && intersections[0].boundingClientRect.y < -60;
    console.log(intersections[0])
  }

}
