package com.example.demo.Project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Controller {
@Autowired
AMRepo serviceRepository;
@Autowired
AMService service;
@GetMapping("/getRegister")
public List<Register> getfunc(){
	return service.getval();
}
@PostMapping("/postRegister")
public Register Posting(@RequestBody Register ob) {
	return service.postingval(ob);
}
@PutMapping("/updateRegister")
public String update(@RequestBody Register object) {
	return service.updateDetails(object);
}
@DeleteMapping("/deleteRegister")
public String delete(@RequestParam int sino) {
	return service.deleteDetails(sino);
}
}
