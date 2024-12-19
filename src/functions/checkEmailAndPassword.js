function checkEmailAndPassword(email,password,setErrorMessage){
    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(email)){
        setErrorMessage("Invalid email");
        return false;
    }
    else if( ! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^$*.{}()\[\]?\"!@#%&/\\,><':;|_~])[A-Za-z\d\^$*.{}()\[\]?\"!@#%&/\\,><':;|_~]{6,30}$/.test(password) ){
        setErrorMessage("Invalid password");
        return false;
    }
    return true;
}

export default checkEmailAndPassword;