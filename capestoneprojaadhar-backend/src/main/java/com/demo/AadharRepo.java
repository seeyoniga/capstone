package com.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AadharRepo extends JpaRepository<Aadhar, Integer> {

}