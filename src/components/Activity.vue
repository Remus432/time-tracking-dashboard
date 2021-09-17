<template>
  <article class="activity">
    <div class="activity__label">
      <img :src="`/images/icon-${icon}.svg`" class="activity__label-img" />
    </div>
    <div class="activity__card">
      <div class="activity__name">
        <span>{{ title }}</span>
        <img src="/images/icon-ellipsis.svg" />
      </div>  
      <div class="activity__time">
        <p class="activity__time-current">{{ currTimeframe }}hrs</p>
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