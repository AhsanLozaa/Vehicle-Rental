package com.car.controller;

import com.car.model.Bike;
import com.car.repository.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // This will convert response to Json or XML, will create Restful controllers
@RequestMapping("/api") // This will map web requests to specific handler classes/methods
@CrossOrigin("*") // used to define interaction between browser and server safetly
public class BikeController {

    @Autowired // Used for automatic dependency injection
    private BikeRepository bikeRepository;

    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/bikes", method = RequestMethod.GET)
    public List getAllBikes() {
        return bikeRepository.findAll();
    }


    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/bike/{id}", method = RequestMethod.GET)
    public Optional<Bike> getCarById(@PathVariable("id") String id) {
        return bikeRepository.findById(id);
    }
}
