import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolUiModule } from '@toolsy/tool-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToolUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
