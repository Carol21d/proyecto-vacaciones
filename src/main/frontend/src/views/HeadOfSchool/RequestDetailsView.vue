<script setup>
import RequestDescription from '../../components/RequestDescription.vue';
import iconArrowLeft from '@/assets/img/iconArrowLeft.png';
import { onBeforeMount, onUpdated, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useResposableStore } from '../../stores/responsableStore';
import { useRoute } from 'vue-router';

const respoStore = useResposableStore()
const route = useRoute()
const userDocument = route.params.document
const idRequest = route.params.idRequest
const router = useRouter()
let OneRequest = reactive({})


onBeforeMount(() => {
    
    OneRequest = respoStore.infoRequest(idRequest)
})


const acceptRequest = async () => {
    await respoStore.changeStateOfRequest(userDocument, idRequest, 'Accept')
    OneRequest = respoStore.infoRequest(idRequest)
}

const rejectRequest = async () =>{
    await respoStore.changeStateOfRequest(userDocument, idRequest, 'Reject')
    OneRequest = respoStore.infoRequest(idRequest)
}



</script>

<template>
    <div class="container">
        <!-- <RequestDescription class="RequestDescription"/> -->
           
        <div class="wrapper">
            <RequestDescription :request="respoStore.IndividualRequest" @accept-emit="acceptRequest" @reject-emit="rejectRequest()" />

        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/main' as *;
    .container{
        display: flex;
        justify-content: center;
        .RequestDescription{
            width: 90%;
            @include flexDisplay(row, center, center);
        }
    }
</style>