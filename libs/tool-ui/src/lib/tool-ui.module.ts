import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolCardComponent } from './components/tool-card/tool-card.component';
import { ToolDialogUiComponent } from './components/tool-dialog-ui/tool-dialog-ui.component';
import { TruncateModule } from '@yellowspot/ng-truncate';

@NgModule({
  imports: [CommonModule, TruncateModule],
  declarations: [ToolCardComponent, ToolDialogUiComponent],
  exports: [ToolCardComponent, ToolDialogUiComponent],
})
export class ToolUiModule {
}
