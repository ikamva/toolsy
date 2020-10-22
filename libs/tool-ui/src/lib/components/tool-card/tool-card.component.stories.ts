
import { ToolCardComponent } from './tool-card.component';

export default {
  title: 'ToolCardComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ToolCardComponent,
  template: `<div style="padding: 2%"> <tly-tool-card></tly-tool-card></div>`,
  props: {
  }
})