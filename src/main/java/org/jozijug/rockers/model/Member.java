package org.jozijug.rockers.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import javax.persistence.Entity;

@Entity
public class Member extends PanacheEntity {
    public String name;
    public Role role;
    
}
