package org.example.car;

import org.example.interfaces.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("corolla")
public class Corolla implements Car {
    @Autowired
    Engine engine;

    @Override
    public void specs() {
        System.out.print("Corolla car\n" +
                "Engine: " + engine.type);
    }
}
