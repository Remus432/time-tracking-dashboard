<template>
    <main class="activities">
      <Activity :key="index" v-for="item, index in store.state.activities" :id="getIcons(item.title)" :title="item.title" :icon="getIcons(item.title)" :previousTimeframe="item.timeframe.previous" :currTimeframe="item.timeframe.current" :prevTime="store.state.previousTime" />
    </main>
</template>

<script>
  import Activity from "./Activity"
  import data from "../data.json"
  import { inject } from "vue"

  export default {
    name: "Activities",
    components: {
      Activity
    },
    methods: {
       getIcons(title) {
          const lowerCaseTitle = title.toLowerCase()
          if (lowerCaseTitle.split(" ").length > 1) return lowerCaseTitle.split(" ").join("-")
          return lowerCaseTitle 
        }
    },
    setup() {
      const store = inject("store")
      
      store.methods.setActivities(data)

      return { data, store }
    }
  }
</script>

<style lang="sass" scoped>

</style>