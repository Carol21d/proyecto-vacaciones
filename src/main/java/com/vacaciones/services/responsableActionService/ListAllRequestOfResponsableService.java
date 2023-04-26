package com.vacaciones.services.responsableActionService;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.vacaciones.models.Request;
import com.vacaciones.models.User;
import com.vacaciones.repositories.UserRepository;

@Service
public class ListAllRequestOfResponsableService {
    private UserRepository userRepository;

    public ListAllRequestOfResponsableService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Request> listAllRequestOfResponsable(String idResponsable){

        List<Request> allRequests = new ArrayList<>();

        User responsableDB = userRepository.findByDocument(idResponsable).orElseThrow();
        
        if(!responsableDB.getEmployes().isEmpty()){
            for (User user : responsableDB.getEmployes()) {
                allRequests = addNewRequests(allRequests, user.getRequests());
            }
        }
        
        return allRequests;
    }
    public Set<User> listAllEmployesOfResponsable(String document){
        User responsableDB = userRepository.findByDocument(document).orElseThrow();

        Set<User> employes = responsableDB.getEmployes();

        return employes;
    }

    private List<Request> addNewRequests(List<Request> actuaRequests, List<Request> newRequests){
        for (Request request : newRequests) {
            actuaRequests.add(request);
        }
        return actuaRequests;
    }    
}
