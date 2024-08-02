package com.example.demo.controller;

import com.example.demo.model.Article;
import com.example.demo.service.ArticleService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/article")
@AllArgsConstructor
@CrossOrigin
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @GetMapping("/getAll")
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable Long id) {
        Optional<Article> article = articleService.findById(id);
        return article.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Article> createArticle(@RequestBody Article createArticleRequest) {
        try {
            Article createdArticle = articleService.createArticle(createArticleRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdArticle);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/update")
    public ResponseEntity<Article> updateArticle(@RequestBody Article updateArticleRequest) {
        try {
            Article updatedArticle = articleService.updateArticle(updateArticleRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(updatedArticle);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public boolean deleteArticleById(@PathVariable Long id) {
        try {
            return articleService.deleteById(id);
        } catch (Exception e) {
            return false;
        }

    }
}
