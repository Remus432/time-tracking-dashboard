<template>
  <nav class="report">
    <div class="report__user">
      <img src="/images/image-jeremy.png" alt="Jeremy Robson Profile Pic" class="report__user-pic">
      <div class="report__user-info">
        <p class="report__user-info-label">Report for</p>
        <p class="report__user-info-name">Jeremy Robson</p>
      </div>
    </div>
    <div class="report__timeframe">
      <p @click="store.methods.switchCurrTime" :class="`report__timeframe-value ${store.state.currTimeframe === 'daily' ? 'active' : ''}`">Daily</p>
      <p @click="store.methods.switchCurrTime" :class="`report__timeframe-value ${store.state.currTimeframe === 'weekly' ? 'active' : ''}`">Weekly</p>
      <p @click="store.methods.switchCurrTime"  :class="`report__timeframe-value ${store.state.currTimeframe === 'monthly' ? 'active' : ''}`">Monthly</p>
    </div>
  </nav>
</template>

<script>
  import { inject } from "vue"

  export default {
    name: "Report",
    setup() {
      const store = inject("store")

      return { store }
    }
  }
</script>

<style lang="sass" scoped>

</style>