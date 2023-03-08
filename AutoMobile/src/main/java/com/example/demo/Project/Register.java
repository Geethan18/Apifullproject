package com.example.demo.Project;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Register {
@Id
private int sino;
private String registerationno;
private String vehicletype;
private String model;
@JsonFormat(pattern="yyyy-MM-dd")
private Date servicedate;
private String status;
private Date delivery;
//private String timeofdelivery;
//private String timeofservice;
public Register(int sino, String registerationno, String vehicletype, String model, Date servicedate, String status,
		Date delivery) {
	super();
	this.sino = sino;
	this.registerationno = registerationno;
	this.vehicletype = vehicletype;
	this.model = model;
	this.servicedate = servicedate;
	this.status = status;
	this.delivery = delivery;
//	this.timeofdelivery=timeofdelivery;
//	this.timeofservice=timeofservice;
}
public Register() {
	super();
	// TODO Auto-generated constructor stub
}
public int getSino() {
	return sino;
}
public void setSino(int sino) {
	this.sino = sino;
}
public String getRegisterationno() {
	return registerationno;
}
public void setRegisterationno(String registerationno) {
	this.registerationno = registerationno;
}
public String getVehicletype() {
	return vehicletype;
}
public void setVehicletype(String vehicletype) {
	this.vehicletype = vehicletype;
}
public String getModel() {
	return model;
}
public void setModel(String model) {
	this.model = model;
}
public Date getServicedate() {
	return servicedate;
}
public void setServicedate(Date servicedate) {
	this.servicedate = servicedate;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public Date getDelivery() {
	return delivery;
}
public void setDelivery(Date delivery) {
	this.delivery = delivery;
}
//public String getTimeOfDelivery() {
//	return timeofdelivery;
//}
//public void setTimeOfDelivery(String timeOfDelivery) {
//	timeofdelivery = timeOfDelivery;
//}
//public String getTimeOfService() {
//	return timeofservice;
//}
//public void setTimeOfService(String timeOfService) {
//	timeofservice = timeOfService;
//}

}
