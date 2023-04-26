import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import Repository from '../apiCall/Repository';


export const useResposableStore = defineStore('responsableStore', {
  state: () => ({
    allRequests: [],
    allEmployes: [], 
    temporalUser: {}
  }),
  actions: {
    async listAllRequests(document) {
      const repository = new Repository('responsable')

      const service = repository.chooseResponsableService()

      const response = await service.listAllRequestS(document)


      this.allRequests = response
    },
    async listAllEmployes(document) {
      const repository = new Repository('responsable')

      const service = repository.chooseResponsableService()

      const response = await service.listAllEmployes(document)

      const allEmployes = []

      for (const user of response) {

        if (user.profile != undefined && user.contractedUser != 'inactive') {
          allEmployes.push(user)
        }
      }

      this.allEmployes = allEmployes
    },
    async changeStateOfRequest(document, idRequest, state){
      const repository = new Repository('responsable')

      const service = repository.chooseResponsableService()

      const response = await service.changeRequestState(document, idRequest, state)
    },
    findUserOfRequest(idRequest){
      
      for (const employe of this.allEmployes) {
          if(employe.requests.find(request => request.id == idRequest)) this.temporalUser = employe
      }
    },
    requestExistInUsers(idRequest){
       return  this.allEmployes.find(employe => employe.requests.includes(idRequest))
    }
  }
});
