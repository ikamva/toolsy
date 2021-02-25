import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from '@toolsy/models';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'toolsy-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Output() handleCategory = new EventEmitter<string>()
  @Output() handleTags = new EventEmitter<string[]>()
  categories$: Observable<ICategory[]>;
  categoryForm: FormGroup;
  Categories: ICategory[];

  constructor(private firestore: AngularFirestore, private fb: FormBuilder, private router: Router) {

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

  categorySelected(id: string) {
    this.handleCategory.emit(this.Categories.find(category => category.id === id).name.toLowerCase())
  }
}
