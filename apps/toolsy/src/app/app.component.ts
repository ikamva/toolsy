import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICategory } from '@toolsy/models';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'toolsy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories$: Observable<ICategory[]>;
  categoryForm: FormGroup;
  Categories: ICategory[];

  constructor(private firestore: AngularFirestore, private fb: FormBuilder) {

  }

  ngOnInit() {

    // Gets Categories
    this.getCategories();

    this.categoryForm = this.fb.group({
      category: [[]]
    })
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

  get category() {
    return this.categoryForm.controls.category.value;
  }

  getTags(id: string) {
    return this.Categories.find(category => category.id === id)
  }

  categorySelected(category: ICategory) {
    console.log(category)
  }
}
