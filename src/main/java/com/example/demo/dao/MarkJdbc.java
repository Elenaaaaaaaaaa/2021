package com.example.demo.dao;

import com.example.demo.model.Mark;
import com.example.demo.model.Student;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class MarkJdbc{

    private final JdbcTemplate jdbcTemplate;

    public MarkJdbc(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public Mark get(int id){
        String sql = "SELECT * FROM MARK WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, this::mapMark, id);
    }

    private Mark mapMark(ResultSet rs, int i) throws SQLException{
        return new Mark(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getString("value")
        );
    }

    public Mark search(String mark){
        String sql = "SELECT * FROM MARK WHERE name = ?";
        return jdbcTemplate.queryForObject(sql, Mark.class, mark);
    }

//    public List<Student> getMarksbyStudent(int study_group_id){
//        String sql = "SELECT * FROM STUDENT WHERE study_group_id = ?";
//        return jdbcTemplate.query(sql, this::mapStudent, study_group_id);
//    }
}