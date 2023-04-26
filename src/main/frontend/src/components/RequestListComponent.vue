<script setup>
import StateIndicator from './StateIndicator.vue';
import { onBeforeMount } from 'vue';
import { useResposableStore } from '../stores/responsableStore'

const responsableStore = useResposableStore()

const props = defineProps({
        request: {
            type: Object,
        },
    })
onBeforeMount(() => {
    responsableStore.findUserOfRequest(props.request.id)
})


const emits = defineEmits(['emitRequestDetails'])

const emitRequestDetails = () => {
  emits('emitRequestDetails', {
    userDocument: responsableStore.temporalUser.document,
    requestId: props.request.id
  })
}

</script>

<template>
    <div class="request-wrapper"  @click="emitRequestDetails()">
                <p class="workerName">{{ request.workerName }}</p>
                <p class="date">{{ request.startDate }} - {{ request.endDate }}</p>                 
                <p class="days">Días de vacaciones: {{ request.quantityOfDays }} </p>
                <StateIndicator :state="request.state" />
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as c;


.request-wrapper {
    border: solid 2px;
    border-color: map-get($map: c.$colors, $key: "Orange");
    border-radius: 0.5vw;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-block: 2vh;

p {
    margin-block: 2vh;
    font-size: 3vh;
}

.workerName {
    font-size: 4vh;
}
}
</style>