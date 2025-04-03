package org.example.car;

import org.example.interfaces.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("swift")
public class Swift implements Car {
    @Autowired
    Engine engine;

    @Override
    public void specs() {
        System.out.print("Swift car\n" +
                "Engine: " + engine.type);
    }
}
