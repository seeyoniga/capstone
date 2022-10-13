package com.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/aadhar")
public class AadharController {
	
	@Autowired
	private AadharService service;
	
	///create new record
	@PostMapping("/")
	public ResponseEntity<Aadhar> addUser(@RequestBody Aadhar u){
		Aadhar register= service.addUser(u);
		if(register!=null)  
			return new ResponseEntity<Aadhar>(register,HttpStatus.CREATED);
		else
			return new ResponseEntity<Aadhar>(register, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//List of Users Or RETRIVE DATA
	@GetMapping("/")
	public  List<Aadhar> getAllUser(){
		return service.getAllUser();
	}
	
	//get user by id
	@GetMapping("/{id}")
	public ResponseEntity<Aadhar> getUserById(@PathVariable int id){
		 Aadhar register= service.getUserById(id);
		  
		  if(register!=null)
			  return new ResponseEntity<Aadhar>(register,HttpStatus.FOUND);
		  else
			  return new  ResponseEntity<Aadhar>(register,HttpStatus.NOT_FOUND);
	}
	
	//update user by id
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody Aadhar register,@PathVariable int id){
		Aadhar data= service.updateUser(register, id);
		
		if(data!=null)
			return new ResponseEntity<Object>(data,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("User is Not Available",HttpStatus.NOT_FOUND);
	}
	///DELETE USER BY ID
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable  int id ){
		
		if(service.deleteUser(id))
			return new ResponseEntity<Object>("User Deleted", HttpStatus.OK);
		else
			return new ResponseEntity<Object>("No User Found",HttpStatus.NOT_FOUND);
	}
	 

}
