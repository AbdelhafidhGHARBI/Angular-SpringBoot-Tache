package tn.esprit.projettachebackend.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Getter
@Setter
@Document(collection = "tasks")
public class Task {
    @Id
    private String id;
    private String content;
    private boolean completed;

}
