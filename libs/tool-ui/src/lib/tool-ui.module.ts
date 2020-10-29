import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolCardComponent } from './components/tool-card/tool-card.component';
import { ToolDialogUiComponent } from './components/tool-dialog-ui/tool-dialog-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToolCardComponent, ToolDialogUiComponent],
  exports: [ToolCardComponent, ToolDialogUiComponent],
})
export class ToolUiModule {
}
