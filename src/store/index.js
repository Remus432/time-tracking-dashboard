import { reactive } from "vue"
import defaultData from "../data.json"

const state = reactive({
  activities: [],
  currTimeframe: "daily",
  previousTime: "Yesterday"
})

const methods = {
  setActivities(data = defaultData) {
    const currActivities = data.map(activity => ({ title: activity.title, timeframe: activity.timeframes[state.currTimeframe] }))
    state.activities = [...currActivities]
  },

  setPreviousTime() {
    if (state.currTimeframe === "daily") state.previousTime = "Yesterday"
    if (state.currTimeframe === "weekly") state.previousTime = "Last Week"
    if (state.currTimeframe === "monthly") state.previousTime = "Last Month"
  },

  switchCurrTime(e) {
    state.currTimeframe = e.target.textContent.toLowerCase()
    this.setActivities(defaultData)
    this.setPreviousTime()
  }
}

const getters = {
  
}

export default {
  state,
  methods,
  getters
}