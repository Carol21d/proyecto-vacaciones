<script setup>
import ButtonComponent from './ButtonComponent.vue';
import StateIndicator from './StateIndicator.vue';
import { useRoute } from 'vue-router';
import { computed } from "vue";


const route = useRoute()
const userDocument = route.params.document
const idRequest = route.params.idRequest

const props = defineProps({
    request: {
        type: Object
    }
})


const emits = defineEmits(['acceptEmit'],['rejectEmit'])

const acceptEmit = ()=>{
    emits('acceptEmit', 'Accept')
}

const rejectEmit = ()=>{
    emits('rejectEmit', 'Reject')
}


const invertedDate = computed(() => {
  const startDateParts = props.request.requestUser.startDate.split('-');
  startDateParts.reverse();
  const newStartDate = startDateParts.join('/');

  const endDateParts = props.request.requestUser.endDate.split('-');
  endDateParts.reverse();
  const newEndDate = endDateParts.join('/');

  return `${newStartDate} - ${newEndDate}`;
});


</script>
<template>
    <div class="mainContainer">


            <div class="usuario">
                <h2 class="empleado"> {{ request.name }}</h2>
                <h2 class="solicitud">Solicitud:
                    <StateIndicator :state="request.requestUser.state" />
                </h2>

            </div>

            <div class="texto">
                <p id="fecha"> {{ invertedDate }} </p>
                <p id="comentario"> {{ request.requestUser.issue }}</p>
            </div>
            <div class="comment-section" v-if="request.requestUser.state == 'Default'">
                <v-textarea class="textarea" rows="3" color="#FF4700" bg-color="white"
                    label="Añada un comentario si lo desea" hide-details="true"> </v-textarea>
                <div class="buttons-section">
                    <ButtonComponent :button="'Aceptar'" :type="'accept'" @click="acceptEmit()" />
                    <ButtonComponent :button="'Rechazar'" :type="'reject'" @click="rejectEmit()" />
                </div>
            </div>
        </div>

</template>
<style lang="scss" scoped>
.mainContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .usuario {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .solicitud {
            display: flex;
        }

        .empleado {
            display: flex;
        }

    }


    .titulo {
        margin-left: 30%;
    }

}

.texto {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #D9D9D9;
    padding: 2%;
    border-radius: 10px;
    margin-top: 1vh;
    gap: 2vh;


    #fecha {
        background-color: white;
        border-radius: 10px;
        padding: 1vw;
        text-align: center;
    }

    #comentario {
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 1vw;
    }
}



.comment-section {
    width: 100%;
    display: flex;
    background-color: #D9D9D9;
    margin-top: 2%;
    border-radius: 10px;
}
.textarea {
    padding: 2%;

}
.buttons-section {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding-right: 2%;
    justify-content: center;
    gap: 4vh;
    
    
}
</style>