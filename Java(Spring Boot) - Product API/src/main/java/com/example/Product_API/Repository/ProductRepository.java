package com.example.Product_API.Repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Product_API.Model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}