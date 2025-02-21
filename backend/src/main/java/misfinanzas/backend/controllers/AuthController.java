package misfinanzas.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    @PostMapping("path")
    public String login(@RequestBody String entity) {
        //TODO: process POST request
        
        return "login from public endpoint";
    }

    @PostMapping("/register")
    public String register(@RequestBody String entity) {
        //TODO: process POST request
        
        return "register from public endpoint";
    }
    
    
}
