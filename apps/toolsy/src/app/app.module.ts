import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolUiModule } from '@toolsy/tool-ui';
import { ToolOverlayModule } from '@toolsy/tool-overlay';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToolUiModule, ToolOverlayModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
