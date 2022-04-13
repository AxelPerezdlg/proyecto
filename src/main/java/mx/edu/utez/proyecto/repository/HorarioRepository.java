package mx.edu.utez.proyecto.repository;



import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import mx.edu.utez.proyecto.model.Horario;

@Repository
public interface HorarioRepository extends JpaRepository<Horario, Long>{
    
    

  
    @Query(value = "SELECT * FROM horarios h WHERE h.dia=:dia and h.idventanilla=:idVentanilla", nativeQuery=true)
    List<Horario> findByDiaAndVentanilla(@Param("dia") Date dia, @Param("idVentanilla") Long idVentanilla);

    @Query(value = "SELECT * FROM horarios h WHERE h.dia=:dia and h.idventanilla=:idVentanilla and h.idhorarios!=:idHorarios", nativeQuery=true)
    List<Horario> findByDiaAndVentanillaAndHorario(@Param("dia") Date dia, @Param("idVentanilla") Long idVentanilla,  
    @Param("idHorarios") Long idHorarios);

   

    
}