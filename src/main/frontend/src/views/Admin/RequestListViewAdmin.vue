<script setup>
import CardHistorial from '../../components/CardHistorial.vue';
import { useAdminStore } from '../../stores/adminStore';
import { onBeforeMount, onUpdated } from 'vue';
import { useRouter } from 'vue-router'

const adminStore = useAdminStore()
const router = useRouter()

onBeforeMount(() => {
    adminStore.listAllRequests()
})
const navigateTo = (info)=>{
    router.push({name: 'requestDetailsView', params:{document: info.userDocument, idRequest: info.requestId }})
}

onUpdated(async () => {
    await adminStore.listAllRequests()
})
</script>
<template>
    <div class="list-request-wrapper">
    <h1>HISTORIAL DE SOLICITUDES</h1>
    <div class="card-historial-space"> 
        <CardHistorial @emit-request-details="navigateTo" v-for="request of adminStore.allRequests" :request="request" />
    </div>
    </div>
</template>
<style lang="scss" scoped> 
@use '../../assets/scss/main' as *;

h1{
    margin-top: 1%;
    margin-bottom: 2%;
}
.list-request-wrapper{
    width: 100%;
    @include flexDisplay(column, center, center);
    .card-historial-space{
        width: 80%;
        @include flexDisplay(column, normal, center);
        gap: 3vh
    }
}
</style>