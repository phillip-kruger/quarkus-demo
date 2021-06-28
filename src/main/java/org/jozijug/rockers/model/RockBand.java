package org.jozijug.rockers.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;


@Entity
public class RockBand extends PanacheEntity {

    @Column(unique=true)
    public String name;
    public LocalDate since;
    @OneToMany
    public List<Member> bandmembers = new ArrayList<>();

    public static RockBand findByName(String name){
        return find("name", name).firstResult();
    }

    public void addMember(Member member){
        if(this.bandmembers == null){
            bandmembers = new ArrayList<>();
        }
        bandmembers.add(member);
    }
}