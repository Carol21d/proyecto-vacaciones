import axios from "axios"

export default class ResponsableService{
    baseUrl
    constructor(){
        this.baseUrl = 'http://localhost:8080/api/responsable'
    }

    async changeRequestState(document, idRequest, state){
        axios.defaults.withCredentials = true
        const response = axios.put(this.baseUrl + `/request/${idRequest}/user/${document}/${state}`)

        const getStatus = (await response).status

        return getStatus
    }
    async listAllRequestS(document){
        axios.defaults.withCredentials = true
        const response = axios.get(this.baseUrl + `/allTeamRequests/${document}`);
        const getBody = await response;
        return getBody.data;
    
    
    }
    async listAllEmployes(document){
        axios.defaults.withCredentials = true
        const response = axios.get(this.baseUrl + `/allEmployesofResponsable/${document}`);
        const getBody = await response;
        return getBody.data;
    }
}
     


       

