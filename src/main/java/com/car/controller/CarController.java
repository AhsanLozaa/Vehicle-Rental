package com.car.controller;

import com.car.model.Car;
import com.car.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // This will convert response to Json or XML, will create Restful controllers
@RequestMapping("/api") // This will map web requests to specific handler classes/methods
@CrossOrigin("*") // used to define interaction between browser and server safetly
public class CarController {

    @Autowired  // Used for automatic dependency injection
    private CarRepository repository;

    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/cars", method = RequestMethod.GET)
    public List getAllCars() {
        return repository.findAll();
    }

    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/car/{id}", method = RequestMethod.GET)
    public Optional<Car> getCarById(@PathVariable("id") String id) {
        return repository.findById(id);
    }

    // Used to map requests onto specific handler classes
    @DeleteMapping("car/{id}")
    public boolean deleteCarById(@PathVariable("id") String id){
        repository.deleteById(id);
        return true;
    }


}
