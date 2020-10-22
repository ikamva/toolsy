
import { ToolUiModule } from '../../tool-ui.module';
import { ToolCardComponent } from './tool-card.component';

export default {
  title: 'Tools UI'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ToolUiModule]
  },
  component: ToolCardComponent,
  template: `<div style="padding: 2%"><tly-tool-card></tly-tool-card></div>`,
  props: {
  }
})