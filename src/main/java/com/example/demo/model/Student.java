package com.example.demo.model;

public class Student {

    private int id;
    private String surname;
    private String name;
    private String second_name;

    public Student(int id, String surname, String name, String second_name){
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.second_name = second_name;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getSurname() {
        return surname;
    }
    public void setSurnameName(String surname) {
        this.surname = surname;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getSecond_nameName() {
        return second_name;
    }
    public void setSecond_nameName(String second_name) {
        this.second_name = second_name;
    }
}
