import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsyOverlayComponent } from './toolsy-overlay/toolsy-overlay.component';
import { ToolsyOverlayService } from './toolsy-overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [ToolsyOverlayComponent]
})
export class ToolOverlayModule {
  static forRoot(): ModuleWithProviders<ToolOverlayModule> {
    return {
      ngModule: ToolOverlayModule,
      providers: [ToolsyOverlayService]
    };
  }
}
