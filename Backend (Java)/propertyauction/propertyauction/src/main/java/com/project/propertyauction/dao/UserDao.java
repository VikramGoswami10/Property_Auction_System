package com.project.propertyauction.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.propertyauction.beans.User;

public interface UserDao extends JpaRepository<User, Integer>{
	Optional<User> findByEmail(String email);
}
