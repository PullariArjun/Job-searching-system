package com.jobportal.Utilities;

import com.jobportal.Entities.Sequences;
import com.jobportal.Exceptions.JobPortalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;

@Component
public class Utilities {

    public static MongoOperations mongoOperations;

    @Autowired
    public void setMongoDBOperations(MongoOperations mongoOperations){
        Utilities.mongoOperations = mongoOperations;
    }
    public static Long getNextSequence(String key) throws JobPortalException {
        Query query = new Query(Criteria.where("_id").is(key));
        Update update = new Update();
        update.inc("seq", 1);
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);
        Sequences sequence = mongoOperations.findAndModify(query, update, options, Sequences.class);
        if(sequence == null)throw new JobPortalException("Unable to get sequence id for key: "+key);
        return sequence.getSeq();

    }

    public static String generateOtp(){
        StringBuilder otp = new StringBuilder();
        SecureRandom random = new SecureRandom();
        for (int i = 0; i < 6; i++) {
            otp.append(random.nextInt(10));
        }
        return otp.toString();
    }
}
