import { ref, onMounted, watch } from 'vue'

const STORAGE_KEY = 'ai-camp-progress'

export interface DayProgress {
  completed: boolean
  date: string | null
}

export type ProgressMap = Record<string, DayProgress>

const progress = ref<ProgressMap>({})

export function useProgress() {
  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        progress.value = JSON.parse(stored)
      } catch {
        progress.value = {}
      }
    }
  })

  watch(progress, (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }, { deep: true })

  function isDayCompleted(dayId: string): boolean {
    return progress.value[dayId]?.completed ?? false
  }

  function toggleDay(dayId: string) {
    if (!progress.value[dayId]) {
      progress.value[dayId] = { completed: false, date: null }
    }
    const current = progress.value[dayId]
    current.completed = !current.completed
    current.date = current.completed ? new Date().toISOString().split('T')[0] : null
    // 触发响应式更新
    progress.value = { ...progress.value }
  }

  function getWeekProgress(weekNum: number, days: number): { done: number; total: number; percent: number } {
    const total = days
    let done = 0
    for (let d = 1; d <= days; d++) {
      const id = `week-${String(weekNum).padStart(2, '0')}-day-${String(d).padStart(2, '0')}`
      if (isDayCompleted(id)) done++
    }
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 }
  }

  function getTotalProgress(): { done: number; total: number; percent: number } {
    // 总共40天
    let done = 0
    let total = 0
    const weekDays = [5, 5, 5, 5, 5, 5, 3, 5] // 第7周只有3天
    for (let w = 0; w < weekDays.length; w++) {
      for (let d = 1; d <= weekDays[w]; d++) {
        total++
        const id = `week-${String(w + 1).padStart(2, '0')}-day-${String(d).padStart(2, '0')}`
        if (isDayCompleted(id)) done++
      }
    }
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 }
  }

  return {
    progress,
    isDayCompleted,
    toggleDay,
    getWeekProgress,
    getTotalProgress,
  }
}
