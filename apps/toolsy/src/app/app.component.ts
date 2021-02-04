import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ICategory, ITool } from '@toolsy/models';
import { ToolsyOverlayService } from '@toolsy/tool-overlay';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'toolsy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tool: ITool;
  tools$: Observable<ITool[]>;
  categories$: Observable<ICategory[]>;
  categoryForm: FormGroup;
  Categories: ICategory[];

  constructor(private toolsyOverlay: ToolsyOverlayService, private firestore: AngularFirestore, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.tools$ = this.firestore.collection<ITool>('tools').valueChanges();

    // Gets Categories
    this.getCategories();

    this.categoryForm = this.fb.group({
      category: [[]]
    })
  }

  get category() {
    return this.categoryForm.get('category')
  }

  async getCategories() {
    this.Categories = await this.firestore.collection<ICategory>('categories').snapshotChanges().pipe(map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    ), first()).toPromise();
  }

  getTags(id: string) {
    return this.Categories.find(category => category.id === id)
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
