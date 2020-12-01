import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ICategory, ITool } from '@toolsy/models';
import { ToolsyOverlayService } from '@toolsy/tool-overlay';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'toolsy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tool: ITool;
  tools$: Observable<ITool[]>;
  categories$: Observable<ICategory[]>;
  categoryForm: FormGroup;

  constructor(private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore, private fb: FormBuilder) {
    this.tools$ = firestore.collection<ITool>('tools').valueChanges();
    this.categories$ = firestore.collection<ICategory>('categories').valueChanges();
    this.categoryForm = fb.group({
      category: [[]]
    })
  }

  get category() {
    return this.categoryForm.get('category')
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

  categorySelected(category: ICategory) {
    console.log(category)
  }
}
