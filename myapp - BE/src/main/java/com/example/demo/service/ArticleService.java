package com.example.demo.service;

import com.example.demo.model.Article;
import com.example.demo.repository.ArticleRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;

    @Transactional(readOnly = true)
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Optional<Article> findById(Long id) {
        return articleRepository.findById(id);
    }

    public Article createArticle(Article article) {
        try {
            return articleRepository.save(article);
        } catch (DataAccessException e) {
            System.out.println("Error while saving Building object: " + e.getMessage());
            throw new RuntimeException("Failed to create article", e);
        }
    }

    public boolean deleteById(Long id) {
        try {
            articleRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }

    }

}
