import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ProgressCheck from './components/ProgressCheck.vue'
import CollapsibleAnswer from './components/CollapsibleAnswer.vue'
import ParentTip from './components/ParentTip.vue'
import StepCard from './components/StepCard.vue'
import ToolLink from './components/ToolLink.vue'
import DayProgress from './components/DayProgress.vue'
import { useProgress } from './composables/useProgress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProgressCheck', ProgressCheck)
    app.component('CollapsibleAnswer', CollapsibleAnswer)
    app.component('ParentTip', ParentTip)
    app.component('StepCard', StepCard)
    app.component('ToolLink', ToolLink)
    app.component('DayProgress', DayProgress)
  },
}
