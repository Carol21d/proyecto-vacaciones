<script setup>
import iconArrowLeft from '@/assets/img/iconArrowLeft.png';
import RequestListComponent from '../../components/RequestListComponent.vue';
import { useRouter } from 'vue-router';
import { useResposableStore } from '../../stores/responsableStore';
import { onBeforeMount,onUpdated } from 'vue';
import { useAuthStore } from '../../stores/authStore';
import { reactive,ref } from 'vue';
import { useRoute } from 'vue-router';


const responsableStore = useResposableStore();
const authStore = useAuthStore()
const router = useRouter();
const route = useRoute()

onBeforeMount(async () =>{
   await responsableStore.listAllRequests(authStore.username);
   await responsableStore.listAllEmployes(authStore.username)
})

const navigateTo = (info) =>{
    router.push({name:'requestDetailsofResponsableView', params:{ document: info.userDocument, idRequest: info.requestId }})
    /* console.log(info); */
}

/* onUpdated(async () =>{
    await responsableStore.listAllRequests(authStore.username)
}) */





</script>

<template>
    <div class="sectionContainer">
        <nav>
            <h2>Historial de solicitudes</h2>
        </nav>
        <div class="componentList">
            <ul>
                <li v-for="request of responsableStore.allRequests" :key="index">
                    <RequestListComponent   @emit-request-details="navigateTo" :request="request" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sectionContainer {
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .componentList {
        width: 80%;
        display: flex;
        flex-direction: column;
    }
}

li {
    list-style: none;

}

</style>



           


                