package tn.esprit.projettachebackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.projettachebackend.entities.Task;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {

}
