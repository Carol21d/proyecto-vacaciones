<script setup>
import { ref, onBeforeMount } from 'vue';
import { useAdminStore } from '../stores/adminStore';
import CreateUserPayload from '../apiCall/payloads/CreateUserPayload';
import ButtonComponent from '../components/ButtonComponent.vue';
import EditProfilePayload from '../apiCall/payloads/EditProfilePayload';


const adminStore = useAdminStore()


const props = defineProps({
    view: {
        type: String,
        default: 'create'
    },
    user:{
        type: Object,
        required:false
    }
})

const name = ref('');
const surnames = ref('');
const dni = ref('');
const email = ref('');
const vacationDays = ref('');
const startDay = ref('');
const finishDay = ref('');
const position = ref('');
const role = ref('');
const workplace = ref('');
const enableEditUser = ref(true)
onBeforeMount(() => {
  if(props.view != 'create'){
    name.value = props.user.profile.firstName
    surnames.value = props.user.profile.lastName
    dni.value = props.user.document
    email.value = props.user.profile.email
    vacationDays.value = props.user.profile.hollydays
    startDay.value = props.user.profile.singUpDate
    finishDay.value = props.user.profile.dateOfWithdrawal
    position.value = props.user.profile.position
    workplace.value = props.user.schoolOfUser
    if(props.user.roles.length > 2 ) role.value = 'Responsable'
    if(props.user.roles.length  < 2 ) role.value = 'Empleado'
    
  }
  if(props.view == 'create') enableEditUser.value = false
})

const nameRules = [
  (value) => !!value || 'Es necesario un nombre.',
  (value) => value.length <= 30 || 'El nombre debe tener 30 caracteres o menos.'
]

const surnamesRules = [
  (value) => !!value || 'Es necesario un apellido.',
  (value) => value.length <= 40 || 'El apellido debe tener 40 caracteres o menos.'
]

const dniRules = [
  (value) => !!value || 'DNI/NIE/Pasaporte es necesario',
  (value) => /^[a-zA-Z0-9]+$/.test(value) || 'DNI/NIE/Pasaporte solo puede tener números y letras.',
  (value) => value.length <= 20 || 'DNI/NIE/Pasaporte debe tener menos de 20 caracteres'
]

const emailRules = [
  (value) => !!value || 'Email es necesario.',
  (value) => /.+@.+\..+/.test(value) || 'Email debe tener un formato válido.'
]


const positionRules = [
  (value) => !!value || 'Es necesaria una posición.'
]

const roleRules = [
  (value) => !!value || 'Tipo de usuario es necesario.'
]

const workplaceRules = [
  (value) => !!value || 'Lugar de trabajo es necesario.'
]

const emits = defineEmits(['emitEditUser', 'emitFireUser', 'emitRestoreUser', 'emitCreateUser'])

const resetForm = ()=> {
  name.value = '';
  surnames.value = '';
  dni.value = '';
  email.value = '';
  vacationDays.value = '';
  startDay.value = '';
  finishDay.value = '';
  position.value = '';
  role.value = '';
  workplace.value = '';
}

const createUser = async () => {

  const payload = new CreateUserPayload(dni.value, name.value, surnames.value, email.value, adminStore.randomPassword(), vacationDays.value, position.value, role.value, workplace.value, startDay.value, finishDay.value)
  console.log(payload.password);
  emits('emitCreateUser', payload)
  resetForm()
}

const editUser = async ()=>{
  const payload = new EditProfilePayload(dni.value, name.value, surnames.value, email.value, '', vacationDays.value, position.value, role.value, workplace.value, startDay.value, finishDay.value)

  emits('emitEditUser', payload)

  enableEditUser.value = true
}

const fireUser = ()=> {
  emits('emitFireUser', props.user.document)
}

const restoreUser = ()=>{
  emits('emitRestoreUser', props.user.document)
}

const editAction = ()=>{
  (enableEditUser.value == false )? enableEditUser.value = true : enableEditUser.value = false
}



</script>

<template>
    <v-form ref="form" >

      <div class="container">
    <div class="input-wrapper"> <v-text-field :disabled="enableEditUser" color="#FF4700" label="Nombre" variant="solo" v-model="name" :rules="nameRules">
        </v-text-field></div>

    <div class="input-wrapper"><v-text-field :disabled="enableEditUser" color="#FF4700" label="Apellidos" variant="solo" v-model="surnames" :rules="surnamesRules">
        </v-text-field></div>

    <div class="input-wrapper"> <v-text-field :disabled="enableEditUser" color="#FF4700" label="DNI/NIE/Pasaporte" variant="solo" v-model="dni" :rules="dniRules">
        </v-text-field></div>

    <div class="input-wrapper"><v-text-field :disabled="enableEditUser" color="#FF4700" label="Correo electrónico" variant="solo" v-model="email" :rules="emailRules">
        </v-text-field></div>

    <div class="input-wrapper"> <v-text-field :disabled="enableEditUser" color="#FF4700" label="Cantidad de Vacaciones" variant="solo"
            v-model="vacationDays"> </v-text-field></div>

    <div class="input-wrapper"><v-select :disabled="enableEditUser" ref="positionSelect" color="#FF4700" label="Posición" variant="solo"
            :items="['Formador', 'Coformador', 'Responsable de Promoción']" v-model="position" :rules="positionRules"> </v-select></div>

    <div class="input-wrapper"><v-select :disabled="enableEditUser" ref="roleSelect" color="#FF4700" label="Tipo de Usuario" variant="solo"
            :items="['Responsable', 'Empleado', 'Admin']" v-model="role" :rules="roleRules"> </v-select></div>

    <div class="input-wrapper"><v-select :disabled="enableEditUser" ref="workplaceSelect"  color="#FF4700" label="Lugar de trabajo" variant="solo"
            :items="['Asturias', 'Madrid', 'Barcelona', 'Malaga', 'Sevilla', 'Norte']" v-model="workplace" :rules="workplaceRules"> </v-select>
    </div>

    <div class="input-wrapper"> <v-text-field :disabled="enableEditUser" color="#FF4700" label="Fecha de alta" variant="solo" type="date"
            v-model="startDay"> </v-text-field></div>

    <div class="input-wrapper"><v-text-field :disabled="enableEditUser" color="#FF4700" label="Fecha de baja" variant="solo" type="date"
            v-model="finishDay"> </v-text-field></div>
</div>
<div v-if="view != 'create'" class="button-zone">
    <div v-if="enableEditUser == true" class="button-wrapper">
        <ButtonComponent :type="'warning'" :button="'EDITAR'" @click="editAction()"/>
    </div>
    <div v-if="enableEditUser == true && user.contractedUser != 'inactive'" class="button-wrapper">
        <ButtonComponent :type="'reject'" :button="'DAR DE BAJA'" @click="fireUser()" />
    </div>
    <div v-if="enableEditUser == true && user.contractedUser == 'inactive'" class="button-wrapper">
        <ButtonComponent :type="'accept'" :button="'DAR DE ALTA'" @click="restoreUser()" />
    </div>
    <div v-if="enableEditUser == false" class="button-wrapper">
        <ButtonComponent :type="'warning'" :button="'CONFIRMAR'" @click="editUser()"/>
    </div>
    <div v-if="enableEditUser == false" class="button-wrapper">
        <ButtonComponent :type="'reject'" :button="'CANCELAR'" @click="editAction()"/>
    </div>
</div>
<div v-if="view === 'create'" class="button-zone">
    <div class="button-wrapper">
        <ButtonComponent :button="'CREAR'" @click="createUser()" :disabled="!name || !surnames || !dni || !email || !position || !role || !workplace"/>
    </div>
</div>
</v-form>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as c;

.container {
    display: grid;
    grid-template-columns: 32% 32%;
    gap: 1vh;
    width: 100%;
    justify-content: center;

    .input-wrapper {
        border-radius: 10px;

    }

}

.button-zone {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .button-wrapper {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }
}
</style>
