function validate(){
    const input = document.getElementById("email-text").value
    if(isValidEmail(input)){
        //Email address is valid submit
        document.getElementById("err-txt").style = "display: none;"
        document.getElementById("email-text").classList.remove("error")
        return true
    }
    else{
        document.getElementById("err-txt").style = "display: block;"
        document.getElementById("email-text").classList.add("error")
        return false
    }
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

function trySubmit(){
    if(validate()){
        //Success do next
        document.getElementById("form-content").style = "display: none;"
        document.getElementById("success-message").style = "display: block;"
    }
}