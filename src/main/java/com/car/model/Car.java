package com.car.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "car")
public class Car {

    @Id // Used to create a standalone/unique variable
    private String _id;
    private String make;
    private String rentRate;
    private String transmission;
    private String noofDoors;
    private String vehicleType;

    // Constructors
    public Car() {
    }

    // Constructors
    public Car(String _id, String make, String rentRate, String transmission, String noofDoors, String vehicleType) {
        this._id = _id;
        this.make = make;
        this.rentRate = rentRate;
        this.transmission = transmission;
        this.noofDoors = noofDoors;
        this.vehicleType = vehicleType;
    }

    // Getters and Setters
    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getRentRate() {
        return rentRate;
    }

    public void setRentRate(String rentRate) {
        this.rentRate = rentRate;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getNoofDoors() {
        return noofDoors;
    }

    public void setNoofDoors(String noofDoors) {
        this.noofDoors = noofDoors;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }
}
