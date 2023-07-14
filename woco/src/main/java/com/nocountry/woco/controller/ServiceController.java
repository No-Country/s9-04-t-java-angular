package com.nocountry.woco.controller;

import com.nocountry.woco.service.IServiceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/services")
public class ServiceController {

    private IServiceService serviceService;

    public ServiceController(IServiceService serviceService) {
        this.serviceService = serviceService;
    }
    @GetMapping
    public List<Service> getAllServices() {
        return serviceService.getAllServices();
    }
    @GetMapping("/{id}")
    public Service getServiceById(@PathVariable Long id) {
        return serviceService.getServiceById(id);
    }
    @PostMapping
    public Service addService(@RequestBody Service service) {
        return serviceService.addService(service);
    }
    @PutMapping
    public Service updateService(@RequestBody Service service) {
        return serviceService.updateService(service);
    }
    @DeleteMapping("/{id}")
    public void deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
    }
    @DeleteMapping
    public void deleteAllServices() {
        serviceService.deleteAllServices();
    }
    @GetMapping("/name/{name}")
    public List<Service> getServicesByName(@PathVariable String name) {
        return serviceService.getServicesByName(name);
    }
    @GetMapping("/price/{price}")
    public List<Service> getServicesByPrice(@PathVariable Double price) {
        return serviceService.getServicesByPrice(price);
    }

}
