package com.car.controller;

import com.car.model.Booking;
import com.car.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController // This will convert response to Json or XML, will create Restful controllers
@RequestMapping("/api") // This will map web requests to specific handler classes/methods
@CrossOrigin("*") // used to define interaction between browser and server safetly
public class BookingController {

    @Autowired  // Used for automatic dependency injection
    private BookingRepository bookingRepository;

    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/bookings", method = RequestMethod.GET)
    public List getAllBookings() {
        return bookingRepository.findAll();
    }

    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/booking/{id}", method = RequestMethod.GET)
    public Optional<Booking> getBookingById(@PathVariable("id") String id) {
        return bookingRepository.findById(id);
    }

    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/booking/{id}", method = RequestMethod.DELETE)
    public boolean deleteBooking(@PathVariable("id") String id) {
        bookingRepository.deleteById(id);
        return true;
    }

    // Used to map requests onto specific handler classes
    @RequestMapping(value = "/booking", method = RequestMethod.POST)
    public Booking createBooking(@Valid @RequestBody Booking booking) {
//        booking.set_id(ObjectId.get());
        bookingRepository.save(booking);
        return booking;
    }
}
