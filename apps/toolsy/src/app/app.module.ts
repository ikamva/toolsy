import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolUiModule } from '@toolsy/tool-ui';
import { ToolOverlayModule } from '@toolsy/tool-overlay';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, ToolUiModule, ToolOverlayModule.forRoot(), AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
