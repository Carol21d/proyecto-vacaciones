<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore();
const router = useRouter();

const logout = async ()=>{
  router.push({name:'LoginView'})
  authStore.cleanLoginSession();
  window.sessionStorage.clear()
  await authStore.logout();
}

const date = computed(() => {
  const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const today = new Date();
  const dayOfWeek = weekdays[today.getDay()];
  const dayOfMonth = ('0' + today.getDate()).slice(-2);
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const year = today.getFullYear();
  return `${dayOfWeek}, ${dayOfMonth}/${month}/${year}`;
});


/* const hourElement = ref('')
function updateTime() {
  const currentDate = new Date();
  let hour = currentDate.getHours();
  const minutes = ('0' + currentDate.getMinutes()).slice(-2);
  const seconds = ('0' + currentDate.getSeconds()).slice(-2);

  if (hour === 0) {
    date.value = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    hour = 0;
  }

  hourElement.value = `${hour}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); */


</script>

<template>
    <header>
        <figure>
            <img id="logo" src="../assets/img/logo.png" alt="FactoriaF5">
        </figure>
        <div id="info">
            <p id="date">{{ date }}</p>
        </div>
        <div>
            <p id="hour">{{ hourElement }}</p>
        </div>
     <button v-on:click="logout()" id="logout-button"><img src="../assets/img/🦆 icon _log out_.png" alt="Logout"></button>
    </header>
</template>

<style  lang="scss" scoped>

header {
    width: 100%;
  display: flex;
  border-bottom: 2px solid black;
}

figure {
    margin: 0;
    width: 48vw;
    margin-left: 1vw;
    margin-top: 1vw;
}

#logo {
    height: 3.5vw;
}

#info {
    display: flex;
    display: block;
    justify-content: center;
   
    }

    #date {
      font-family: Dosis;
      font-size: 1vw;
      position: absolute;
      right: 2vw;
      top: 2vw;
      margin-right: 15vw;
    }

    #hour {
      font-family: Dosis;
      font-size: 1vw;
      position: absolute;
      right: 2vw;
      top: 2vw;
      margin-right: 9vw;
    }

    #logout-button{
      width: 2,5vw;  
      height: 2,5vw;
      position: absolute;
      right: 2vw;
      top: 1.5vw;
      margin-right: 3vw;
    }

    #logout-button:hover {
      transform: scale(0.8);
}

</style >