package com.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AadharService {
	
	@Autowired
	private AadharRepo repo;
	//add method or CREATE RECORD
	public Aadhar addUser(Aadhar u) {
		return repo.save(u);
	}
	//List user Method
	public List<Aadhar> getAllUser(){
		return repo.findAll();
	}
	//get user by id
	public Aadhar getUserById(int id) {
		if(repo.findById(id).isPresent()) 
			return repo.findById(id).get();
		else 
			return null;
		
	}
	//update user by id
	public  Aadhar updateUser(Aadhar register, int id) {
		
		if(repo.findById(id).isPresent())
		{
			Aadhar old= repo.findById(id).get();
			old.setName(register.getName());
			old.setDob(register.getDob());
			old.setAddress(register.getAddress());
			old.setEmailid(register.getEmailid());
			old.setMobileno(register.getMobileno());
			old.setGender(register.getGender());
			old.setAid(register.getAid());
			old.setCid(register.getCid());
			old.setPid(register.getPid());
			old.setIssuedate(register.getIssuedate());
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
