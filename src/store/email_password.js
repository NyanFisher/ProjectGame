function check_email_or_password(value, type) {
    if (type == 'email'){
        if (value){
            const email_user = value.match(/^[0-9a-z-._]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)
            if (email_user) {
                return true
            }
        }
        return false
    }
    else if (type=="password"){
        if (value){
            const password_user = value.match(/(?=.*[0-9])(?=.*)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z*]{6,}/g)
            if (password_user){
                return true
            }
        }
        return false
    }        
}

export {check_email_or_password}