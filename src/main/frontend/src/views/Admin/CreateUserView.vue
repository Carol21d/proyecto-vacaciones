<script setup>
import { ref } from 'vue';
import FormComponent from '../../components/FormComponent.vue';
import { useAdminStore } from '../../stores/adminStore';

const adminStore = useAdminStore()
const adviceCreateUser = ref(false)

const createUser = async (emit) => {
    await adminStore.createUser(emit)

    adviceCreateUser.value = true
    setTimeout(() => {
        adviceCreateUser.value = false
    }, 2000);
}
</script>

<template>
    <div class="create-user-wrapper">
        <h1>CREAR USUARIO</h1>
        <transition>
            <v-alert v-if="adviceCreateUser == true" type="success" title="Usuario creado con exito" width="30%"></v-alert>
        </transition>
        <div class="form-wrapper">
            <FormComponent @emit-create-user="createUser" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/main' as *;
.create-user-wrapper {


    @include flexDisplay(column, normal, center);
    width: 100%;


    h1 {
        text-align: center;
        margin-top: 3vh;
        text-transform: uppercase;
    }

    .form-wrapper {
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 2vh;

    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
}
</style>