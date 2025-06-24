package com.example.demo.repository;

import com.example.demo.DTOs.PublicUserDTO;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
//@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
    @Query("SELECT new com.example.demo.DTOs.PublicUserDTO(u.username, u.email, u.dateAdded, u.city, u.sex, u.rating, u.profileImage, u.activeArticles, u.finishedArticles) FROM User u WHERE u.username = :username")         // Alter this to return publicUserDTO
    List<PublicUserDTO> findPublicUserByUsername(String username);

}
