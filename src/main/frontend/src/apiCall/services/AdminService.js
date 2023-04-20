import axios from "axios";

export default class AdminService {
    constructor() {
        this.baseUrl = 'http://localhost:8080/api/admin';
    }

    async createUser(payload) {
        axios.defaults.withCredentials = true
        const response = axios.post(this.baseUrl + `/createUser`, payload)

        const getBody = await response

        return getBody
    }
    async listAllUsers() {
        axios.defaults.withCredentials = true
        const response = axios.get(this.baseUrl + `/allusers`)

        const getBody = await response

        return getBody
    }
    async schoolOfUser(document){
        axios.defaults.withCredentials = true
        const response = axios.get(this.baseUrl + `/user/${document}/School`)

        const getSchool = (await response).data.school

        return getSchool
    }

    async changeRequestState(document, idRequest, state){
        axios.defaults.withCredentials = true
        const response = axios.put('http://localhost:8080/api/' + `responsable/request/${idRequest}/user/${document}/${state}`)

        const getStatus = (await response).status

        return getStatus
    }
}