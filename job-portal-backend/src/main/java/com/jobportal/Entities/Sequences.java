package com.jobportal.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sequences")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Sequences {
    @Id
    private String id;
    private Long seq;

}
