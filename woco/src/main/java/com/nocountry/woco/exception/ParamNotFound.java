package com.nocountry.woco.exception;

public class ParamNotFound extends RuntimeException{
    public ParamNotFound(String error){
        super(error);
    }
}
