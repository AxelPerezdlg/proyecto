package mx.edu.utez.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mx.edu.utez.proyecto.model.Ventanilla;

@Repository
public interface VentanillaRepository extends JpaRepository<Ventanilla, Long> {
    
}
