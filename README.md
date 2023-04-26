# Proyecto vacaciones F5

## Contexto del proyecto:
Desde el área de recursos humanos nos piden desarrollar una aplicación web (intranet) que sirva para gestionar las vacaciones, solicitudes y permisos tomados por los trabajadores de la empresa con 3 tipos de usuario:

* Trabajador (cualquier empleado)
* Responsable (Autorizador y validador)
* Administrador de RRHH (Súper admin)
### Requisitos:
* Los 3 tipos de usuario: trabajador, responsable y administrador.
* El trabajador debe poder ver su información personal y hacer solicitudes de vacaciones/permisos.
* El responsable debe poder ver solicitudes de los trabajadores y tendrá el poder de aceptar o rechazar las solicitudes.
* El administrador debe poder ver los datos personales de los empleados, crear usuarios, ver todas las solicitudes, ver quién ha hecho cada cosa (aceptado/rechazado solicitudes).
* Trazabilidad de todos los movimientos.
* Poder filtrar por persona (empleado), área profesional y escuela.
* Poder sacar informes sobre vacaciones, por persona, por fecha, por escuelas o general.
* Las solicitudes podrán tener 3 estados: pendiente, aceptado o rechazado.
* Poder asignar según la persona que se incorpore la cantidad de vacaciones.
* Vista de logueo con:
    * Trabajador y responsable: DNI/NIE de la persona y contraseña.
    * RRHH: NIF de la empresa y contraseña.
* Que el RRHH pueda dar de baja usuarios.
* Un contador que vaya contando los días que le quedan de vacaciones.


## Figma

### Prototype:

![LOGIN--Prototype](https://user-images.githubusercontent.com/116883533/232730190-42623b60-cd4e-4add-bab5-15acbfc1d7d5.png)

![EMPLEADO  solicitud de vacaciones  Prototype](https://user-images.githubusercontent.com/116883533/232730233-85e4771b-d576-44b7-b338-87340d7641e3.png)

![RESPONSABLE  Historial de solicitudes --Prototype](https://user-images.githubusercontent.com/116883533/232730253-c22fd755-604a-4a12-9406-b7b88ad6488c.png)

![RESPONSABLE  Detalle de solicitudes --Prototype](https://user-images.githubusercontent.com/116883533/232730315-9e95293b-79bb-4960-ad1d-457b3d02c3b2.png)

![denegada desplegada --Prototype](https://user-images.githubusercontent.com/116883533/232736280-218ee554-5cc2-4e13-8bb4-477f27c83313.png)

![SUPERADMIN  Crear Usuario --P](https://user-images.githubusercontent.com/116883533/232738271-23b2b630-0ef1-4a44-b1af-f38f29ff3b14.png)

![SUPERADMIN  Historia del solicitudes --Prototype](https://user-images.githubusercontent.com/116883533/232738321-ec313f80-c65f-4b6d-b559-b8cd761cf6b1.png)

![SUPERADMIN  Informes --Prototype](https://user-images.githubusercontent.com/116883533/232738351-a078f238-8756-4761-b67b-38e25267a6df.png)

![SUPERADMIN  Listas de usuarios --Prototype](https://user-images.githubusercontent.com/116883533/232738424-34244126-b530-47ad-8ed8-0a1d286605a5.png)

![SUPERADMIN  Info del Usuario --Prototype](https://user-images.githubusercontent.com/116883533/232738443-87cb2286-bc9d-4baa-9b6f-6d389b694cf0.png)

![SUPERADMIN  Asignar equipos --Prototype](https://user-images.githubusercontent.com/116883533/232738469-b90185a3-25b2-497c-b3e0-1099ec051a0c.png)

### PROYECTO FINAL:
<img width="1064" alt="Screenshot 2023-04-26 221826" src="https://user-images.githubusercontent.com/117730103/234709014-823b7a42-df08-40c9-b15d-e42863fe91e2.png">
<img width="1067" alt="Screenshot 2023-04-26 223645" src="https://user-images.githubusercontent.com/117730103/234709574-26f6d946-dbb3-45b1-a58a-d7c27f9d449a.png">

![Image20230426224032](https://user-images.githubusercontent.com/117730103/234709601-134af834-1788-4094-ba3d-cfec77712f22.png)

<img width="1063" alt="Screenshot 2023-04-26 221856" src="https://user-images.githubusercontent.com/117730103/234709097-8ad82f70-b7b4-401c-a043-cd7570f08f77.png">

![71AFB0D1-3448-4A6B-9DE0-CD270DF086E8](https://user-images.githubusercontent.com/117730103/234712567-b2ac80c3-822f-4f82-8eaa-9ab523983209.png)

![Image20230427002341](https://user-images.githubusercontent.com/117730103/234715917-f9b7caf7-8e33-4924-981f-27e3168fa3de.png)












<img width="1064" alt="Screenshot 2023-04-26 232751" src="https://user-images.githubusercontent.com/117730103/234709314-a113290f-823e-441a-8b1b-8bcd6a1ca436.png">

<img width="1068" alt="Screenshot 2023-04-26 232804" src="https://user-images.githubusercontent.com/117730103/234710297-bc0b14cf-1ff5-438b-a937-db006af7f851.png">




<img width="1062" alt="Screenshot 2023-04-26 223338" src="https://user-images.githubusercontent.com/117730103/234710141-6e283475-b35b-4a15-8cc9-b49afd2f97a5.png">






### :heavy_check_mark: Herramientas y Lenguajes

- Figma
- Jira
- HTML5
- SASS (SCSS)
- JS
- VUE3
- Vite
- Pinia
- Java
- Xamp
- MsQL
- Workbench
- Postman
- SpringBoot
- Vuetify
- Axios

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
### Axios

```sh
npm install axios
```
### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Contributors

- [Andrés Pérez](https://github.com/Andrespz07) Scrum Master
- [Carol Vílchez](https://github.com/Carol21d) Developer
- [David Daza](https://github.com/drdaza) Developer
- [Guillermo Trigueros](https://github.com/Guillermo292) Product Owner
- [Iyán Pérez Marcos](https://github.com/IyanPerez) Developer
- [Raúl Martínez](https://github.com/RaulMartinezF5) Developer
