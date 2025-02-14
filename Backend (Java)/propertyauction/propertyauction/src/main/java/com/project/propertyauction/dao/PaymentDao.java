package com.project.propertyauction.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.propertyauction.beans.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer>{

}
