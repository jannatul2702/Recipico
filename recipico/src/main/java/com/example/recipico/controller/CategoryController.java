package com.example.recipico.controller;

import java.util.List;
import com.example.recipico.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.recipico.model.Category;


@RestController
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categorys")
    public List<Category> getAllCategory(){
        List<Category> Categorys = categoryService.getAllCategory();
        System.out.println("Categorys : "+Categorys);
        return Categorys;
    }
    
    @GetMapping("/categorys/{categoryId}")
    public Category getCategoryById(@PathVariable Long CategoryId){
        Category Category = categoryService.getCategoryById(CategoryId);
        System.out.println("CategoryId : "+CategoryId+" : Category : "+Category);
        return Category;
    }

    @PostMapping("/categorys")
    public String addCategory(@RequestBody Category Category){
        categoryService.addCategory(Category);
        return "Category saved successfuly.";
    }


    @DeleteMapping("/categorys/{categoryId}")
    public String deleteCategoryyId(@PathVariable Long CategoryId){
        categoryService.deleteCategoryyId(CategoryId);
        return "Category deleted successfully.";
    }
}
