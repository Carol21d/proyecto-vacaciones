<script setup>
import { computed } from 'vue';
import StateIndicator from './StateIndicator.vue';
const props = defineProps({
  request: {
    type: Object,
    required: true
  }
});

const invertedDate = computed(() => {
  if (!props.request.startDate || !props.request.endDate) {
    return '';
  }

  const startDateParts = props.request.startDate.split('-');
  startDateParts.reverse();
  const newStartDate = startDateParts.join('/');

  const endDateParts = props.request.endDate.split('-');
  endDateParts.reverse();
  const newEndDate = endDateParts.join('/');

  return `${newStartDate} - ${newEndDate}`;
});
</script>
<template>
    <div class="simple-request-wrapper">
      <div class="dates-zone">
        <h4>{{ invertedDate }}</h4>
      </div>
      <div class="status-zone">
        <StateIndicator :state="request.state"/>
      </div>
    </div>
  </template>
  
<style lang="scss" scoped>
@use '../assets/scss/main' as *;
    .simple-request-wrapper{
        width: 100%;
        @include flexDisplay(row, space-around, center);
        border-radius: 10px;
        height: 6vh;
        border: map-get($map: $colors, $key: "Orange") 2px solid;

        .dates-zone{
            width: 40%;
            @include flexDisplay(row, space-around, center);
        }
        .status-zone{
            width: 30%;
            @include flexDisplay(row, center, center);

        }
    }
</style>
