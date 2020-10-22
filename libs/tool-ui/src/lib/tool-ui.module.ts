import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolCardComponent } from './components/tool-card/tool-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToolCardComponent],
  exports: [ToolCardComponent],
})
export class ToolUiModule {}
