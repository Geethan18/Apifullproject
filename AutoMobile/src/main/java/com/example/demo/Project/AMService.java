package com.example.demo.Project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class AMService {
@Autowired
AMRepo repository;
public List<Register>getval(){
	return repository.findAll();
}
public Register postingval(@RequestBody Register o) {
	return repository.save(o);
}
public String updateDetails(@RequestBody Register ob) {
	repository.save(ob);
	return "Register updated";
}
public String deleteDetails(int rno) {
	repository.deleteById(rno);
	return "Deleted Successfully";
}
}
