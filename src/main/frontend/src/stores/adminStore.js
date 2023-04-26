import { defineStore } from "pinia";
import Repository from "../apiCall/Repository";

export const useAdminStore = defineStore('adminStore',{
    state: ()=>({
        allUsers: [],
        allInactiveUsers: [],
        SchoolOfUser: [],
        SchoolOfInactiveUser:[],
        allRequests: [],
        IndividualRequest: {},
        responsables: [],
        allUsersWithoutResponsable: [],
        employesOfResponsable: [],
        temporalUserInfo: {}, 
        allRawUsers: []
    }),
    actions:{
        async createUser(payload){

            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.createUser(payload)

            console.log(response.status);
        },
        async editUser(payload, document){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.editUser(payload, document)

            await this.listAllUsers()
            await this.listAllRawUsers()
              
        },
        async fireUser(document){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.fireUser(document)

            await this.listAllUsers()
            await this.listAllRawUsers()
              
        },
        async restoreUser(document){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.restoreUser(document)

            await this.listAllUsers()
            await this.listAllRawUsers()
              
        },
        async listAllUsers(){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.listAllUsers()

            console.log(response.status)

            const data = response.data
            const profiles = []
            const schools = []
            for (const user of data) {
                
                if(user.profile != undefined && user.contractedUser != 'inactive') {
                    profiles.push(user.profile)
                    schools.push(await service.schoolOfUser(user.document))
                }
            }

            this.SchoolOfUser = schools
            this.allUsers = profiles
            this.listAllInactiveUsers()
        },
        async listAllInactiveUsers(){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.listAllUsers()

            console.log(response.status)

            const data = response.data
            const profiles = []
            const schools = []
            for (const user of data) {
                
                if(user.profile != undefined && user.contractedUser == 'inactive') {
                    profiles.push(user.profile)
                    schools.push(await service.schoolOfUser(user.document))
                }
            }

            this.SchoolOfInactiveUser = schools
            this.allInactiveUsers = profiles
        },
        async listAllRawUsers(){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.listAllUsers()

            const data = response.data
            const usersNotUndefinedProfile = []

            for (const user of data) {
                
                if(user.profile != undefined) {
                    usersNotUndefinedProfile.push(user)
                }
            }
            
            this.allRawUsers = usersNotUndefinedProfile
        },
        async listAllRequests(){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.listAllUsers()

            const requestData = response.data

            const allRequestOfUsers = []
            for (const user of requestData) {
                if(user.requests != undefined && user.profile != undefined) {
                    const school = await service.schoolOfUser(user.document)
                    user.requests.forEach(request => allRequestOfUsers.push(
                        {
                            name: `${user.profile.firstName} ${user.profile.lastName}`,
                            requestUser: request,
                            schoolOfUser: school,
                            userDocument: user.document
                        }
                        
                        ))
                }
            }


            this.allRequests =allRequestOfUsers
        },
        async changeStateOfRequest(document, idRequest, state){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.changeRequestState(document, idRequest, state)

            const actualiceListUser = await this.listAllRequests()
        },
        async infoRequest(idRequest){

            for (const request of this.allRequests) {
                if(request.requestUser.id == idRequest){
                    
                    this.IndividualRequest = request
                    return request}
            }
            return
        },
        async listAllResponsables(){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.listAllResponsables()

            this.responsables = response
        },
        async listAllUserWithoutResponsable(document){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.listAllUserWithoutSelected(document)

            console.log(response);
            const allEmployes = []
            for (const user of response) {
                
                if(user.profile != undefined) {
                    user.aaaa = 'hola'
                    allEmployes.push(user)
                }
            }

            this.allUsersWithoutResponsable = allEmployes
        },
        async asignEmployeToResponsable(documentResponsable, documentEmploye){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()
            const response = await service.asignEmployeToResponsable(documentResponsable, documentEmploye);

            await this.listAllRequests()
        },
        async listAllEmployesOfResponsable(document){
            const repository = new Repository('admin')

            const service = repository.chooseAdminService()

            const response = await service.listAllEmployesOfResponsable(document)

            this.employesOfResponsable = response
        },
        async findTemporalUser(idProfile){



            const repository = new Repository('admin')

            const service = repository.chooseAdminService()
            const profileFinded = this.allRawUsers.find(user => user.profile.id == idProfile)

            this.temporalUserInfo = profileFinded
            this.temporalUserInfo.schoolOfUser = await service.schoolOfUser(this.temporalUserInfo.document)
        },
        randomPassword(){
            const randomPass = Math.random().toString(36).slice(2)

            return randomPass
        },
        encoder(username, password) {
            const infoEncode = window.btoa(`${username}:${password}`);
            return infoEncode;
        }
    }
})