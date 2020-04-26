package com.car.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bike")
public class Bike {

    @Id
    private String _id;
    private String make;
    private String rentRate;
    private String isCarriage;
    private String isGear;
    private String vehicleType;

    // Constructor
    public Bike() {
    }

    public Bike(String _id, String make, String rentRate, String isCarriage, String isGear, String vehicleType) {
        this._id = _id;
        this.make = make;
        this.rentRate = rentRate;
        this.isCarriage = isCarriage;
        this.isGear = isGear;
        this.vehicleType = vehicleType;
    }

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

    public String getIsCarriage() {
        return isCarriage;
    }

    public void setIsCarriage(String isCarriage) {
        this.isCarriage = isCarriage;
    }

    public String getIsGear() {
        return isGear;
    }

    public void setIsGear(String isGear) {
        this.isGear = isGear;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }
}
