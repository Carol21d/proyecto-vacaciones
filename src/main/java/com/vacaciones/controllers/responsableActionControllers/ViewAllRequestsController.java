package com.vacaciones.controllers.responsableActionControllers;

import java.util.List;
import java.util.Set;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vacaciones.models.Request;
import com.vacaciones.models.User;
import com.vacaciones.services.responsableActionService.ListAllRequestOfResponsableService;

@RestController
@RequestMapping(path = "/api/responsable")
public class ViewAllRequestsController {

    private ListAllRequestOfResponsableService responsableRequestsService;

    public ViewAllRequestsController(ListAllRequestOfResponsableService responsableRequestsService) {
        this.responsableRequestsService = responsableRequestsService;
    }

    @GetMapping(value = "/allTeamRequests/{idResponsable}")
    public List<Request> allTeamRequests(@PathVariable String idResponsable) {
        return responsableRequestsService.listAllRequestOfResponsable(idResponsable);
    }

    @GetMapping(value = "/allEmployesofResponsable/{document}")
    public Set<User> allEmployes(@PathVariable String document) {
        return responsableRequestsService.listAllEmployesOfResponsable(document);
    }

}
