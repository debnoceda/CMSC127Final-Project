function Validation(values){
    alert("")
    let error = {}
    const userName_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.userName === ""){
        error.userName = "Username should not be empty"
    }
    else if (!userName_pattern.test(values.userName)){
        error.userName = "Username didn't match"
    }
    else {
        error.userName = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }
    else{
        error.password = ""
    }
    return error;
}

export default Validation;