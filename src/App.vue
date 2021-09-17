<template>
  <Report/>
  <Activities />
</template>

<script>
  import Report from "./components/Report"
  import Activities from "./components/Activities"
  import { provide } from "vue"
  import store from "@/store"

  export default {
    name: 'App',
    components: {
      Report,
      Activities
    },
    setup() {
      provide("store", store)

      return {
        store
      }
    }
  }
</script>

<style lang="sass" >
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap')
  @import "@/styles/_variables.sass"
  @import "@/styles/_global.sass"
  @import "@/styles/_report.sass"
  @import "@/styles/_activities.sass"
  @import "@/styles/_activity.sass"
  @import "@/styles/_queries.sass"
  
</style>
