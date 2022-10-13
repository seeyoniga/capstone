package com.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegisterService {
	
	@Autowired
	private RegisterRepo repo;
	//add method or CREATE RECORD
	public Register addUser(Register u) {
		return repo.save(u);
	}
	//List user Method
	public List<Register> getAllUser(){
		return repo.findAll();
	}
	//get user by id
	public Register getUserById(int id) {
		if(repo.findById(id).isPresent()) 
			return repo.findById(id).get();
		else 
			return null;
		
	}
	//update user by id
	public  Register updateUser(Register register, int id) {
		
		if(repo.findById(id).isPresent())
		{
			Register old= repo.findById(id).get();
			old.setName(register.getName());
			old.setDob(register.getDob());
			old.setAddress(register.getAddress());
			old.setEmailid(register.getEmailid());
			old.setMobileno(register.getMobileno());
			old.setGender(register.getGender());
			return repo.save(old);
		}
		else
		{
			return null;
		}
		
	}
	
	///DELETE USER BY ID
	public boolean deleteUser(int id) {
		
		if(repo.findById(id).isPresent())
		{
			repo.deleteById(id);
			return true;
		}
		else
			return false;
	}

}
