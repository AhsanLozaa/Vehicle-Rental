package com.car.model;

public class Booking {

    private String startDate;
    private String endDate;
    private String customerName;
    private String customerEmail;
    private String vehiclePlateNumber;


    public Booking(String startDate, String endDate, String customerName, String customerEmail, String vehiclePlateNumber) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.vehiclePlateNumber = vehiclePlateNumber;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getVehiclePlateNumber() {
        return vehiclePlateNumber;
    }

    public void setVehiclePlateNumber(String vehiclePlateNumber) {
        this.vehiclePlateNumber = vehiclePlateNumber;
    }
}
