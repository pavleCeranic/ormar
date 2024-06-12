package com.example.demo.controller;

import com.example.demo.model.Article;
import com.example.demo.service.ArticleService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/article")
@AllArgsConstructor
public class ArticleController {
    private final ArticleService articleService;
    @GetMapping("/get-all")
    public List<Article> getAllArticles(){
        return articleService.getAllArticles();
    }

    @PostMapping("/create")
    public ResponseEntity<Article> createArticle(@RequestBody Article createArticleRequest) {
        //Building building = new Building();
        //BeanUtils.copyProperties(createBuildingRequest, building);
        return articleService.createArticle(createArticleRequest) ? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }
}
