package org.jozijug.rockers;

import org.jozijug.rockers.model.Member;
import org.jozijug.rockers.model.RockBand;
import org.jozijug.rockers.model.Role;
import java.time.LocalDate;
import java.util.List;
import javax.transaction.Transactional;
import javax.validation.constraints.Pattern;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

@Path("/rockers")
@Tag(name = "Rock Bands")
public class RockRestApi {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<RockBand> rockbands() {
        return RockBand.listAll();
    }
    
    @GET @Path("/{band}")
    @Produces(MediaType.APPLICATION_JSON)
    public RockBand rockband(@PathParam("band") String band) {
        return RockBand.findByName(band);
    }
    
    @DELETE @Path("/{band}")
    @Transactional
    public void remove(@PathParam("band") String band) {
        RockBand.findByName(band).delete();
    }
    
    @DELETE @Path("/{band}/{id}")
    @Transactional
    public void removeMember(@PathParam("band") String band, @PathParam("id") Long id) {
        Member m = Member.findById(id);
        RockBand.findByName(band).bandmembers.remove(m);
        Member.deleteById(id);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Transactional
    public RockBand add(@FormParam("band") String band,
                    @FormParam("since") @Pattern(regexp = "([0-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-[0-9]{4}") String since){
        
        RockBand rockBand = new RockBand();
        rockBand.name = band;
        rockBand.since = LocalDate.parse(since);
        
        rockBand.persist();
        
        return rockBand;
    }
            
    
    @POST @Path("/{band}")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Transactional
    public Member addMember(@PathParam("band") String band,
                    @FormParam("name") String memberName,
                    @FormParam("role") Role role){
        
        RockBand rockBand = RockBand.findByName(band);
        if(rockBand!=null){
        
            Member member = new Member();
            member.name = memberName;
            member.role = role;
            member.persist();

            rockBand.addMember(member);

            rockBand.persist();
            
            return member;
        }
        return null;
    }
    
}