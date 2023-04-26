<script setup>
import { computed } from 'vue';

const props = defineProps(
    {
        state: {
            type : String,
            default: 'Default',
        },
    }
)
const typeStatePicker = computed(() => {
    const options = {
        'Reject': 'rechazada',
        'Accept': 'aceptada',
        'Default': 'pendiente'
    }

    return options[props.state]
})

</script>

<template>
    <div class="state">
        <p :class="['state', typeStatePicker]">{{ typeStatePicker }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as c;

.state {
    background-color: map-get($map: c.$colors, $key: "Yellow");
    width: 15vw;
    p {
        color: black;
        font-size: 2.2vh;
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        font-weight: bold; 
        text-align: center;
        padding: 3%;
    }  
}
.rechazada{
    background-color: map-get($map: c.$colors, $key: "Red");
}
.aceptada{
    background-color: map-get($map: c.$colors, $key: "Green");
}
</style>
