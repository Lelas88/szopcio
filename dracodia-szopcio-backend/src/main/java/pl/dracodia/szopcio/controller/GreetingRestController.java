package pl.dracodia.szopcio.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingRestController {

    @RequestMapping("/api/greeting")
    public String greeting() {
        return "Welcome!";
    }
}
