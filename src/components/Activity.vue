<template>
  <article class="activity">
    <div class="activity__label">
      <img :src="`/images/icon-${icon}.svg`" :alt="icon" class="activity__label-img" />
    </div>
    <div class="activity__card">
      <div class="activity__name">
        <span>{{ title }}</span>
        <img src="/images/icon-ellipsis.svg" alt="Ellipsis Icon" />
      </div>  
      <div class="activity__time">
        <h2 class="activity__time-current">{{ currTimeframe }}hrs</h2>
        <p class="activity__time-previous">{{ prevTime }} - {{ previousTimeframe }}hrs</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: "Activity",
    props: {
      title: String,
      icon: String,
      previousTimeframe: Number,
      currTimeframe: Number,
      prevTime: String
    }
  }
</script>

<style lang="sass" scoped>

</style>