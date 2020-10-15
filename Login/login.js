"use strict";
var cont;
window.addEventListener("load",function(){
    cont=document.getElementById("cont")
    var form=document.getElementById("form")
    form.addEventListener("submit",handleLogin)
})

//handle the user details
function handleLogin(){
    event.preventDefault();
    var form=new FormData(event.target)
    var email=form.get("email")
    var pswd=form.get("pswd")
    
    //verify email
    verifyEmail(email)

    //verify password with it's email
    varifyAccount(email,pswd)

}

// verify the email
function verifyEmail(email){
    var all_emails=JSON.parse(localStorage.getItem("users_emails"))
    console.log(all_emails);
    if(!all_emails[email]){
        var p=document.createElement("p")
        p.textContent="Account doesn't exists"
    }
    cont.append(p)
    return
}

//verify the password
function varifyAccount(email,pswd){
    var all_users=JSON.parse(localStorage.getItem("expense_users"))
    console.log(all_users);
    for(var i=0;i<all_users.length;i++){
        if(all_users[i].email==email && all_users[i].pswd==pswd){
            alert("hai")
            //redirect user to dashboard
            window.location.href="file:///E:/masai_school/expenceManager/Project-Module3/Dashboard/dash.html"
        }
        else if(all_users[i].email==email && all_users[i].pswd != pswd){
            var p=document.createElement("P")
            p.textContent="Wrong Password"
            cont.appendChild(p)
            return
        }
    }
}