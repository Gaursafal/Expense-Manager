"use strict";
var cont;
window.addEventListener("load",function(){

    var form=document.getElementById("form")
    cont=document.getElementById("cont")
    form.addEventListener("submit",handleRegistration)
})

function handleRegistration(){
    event.preventDefault()
    var form=new FormData(event.target)
    var uname=form.get("u_name")
    var email=form.get("email")
    var pswd=form.get("pswd")
    var in_name=document.getElementById("name")
    
    var users_e_list=JSON.parse(localStorage.getItem("users_emails"))

    //check for valid name
    var value_name=valid_name(uname)

    //check for valid email
    var value_email=valid_email(email)

     //check for valid passsword
     var value_pswd=valid_pswd(pswd)


     if(value_email==0 || value_name==0 || value_pswd==0){
         return
     }
    //check for pre existence of the account
    if(users_e_list[email]){
        cont.textContent="********Account already exists*********"
        return
    }
    else{
        users_e_list[email]=email
        localStorage.setItem("users_emails",JSON.stringify(users_e_list))
    } 

    
    

   

    //store user data in localstorage
    storeThedata(uname,email,pswd)

    //display the registration success to user
    displayResult()
}

//fucntion check for valid name
function valid_name(name){
    var div_name=document.getElementById("div_name")
    console.log(name);
    if(name.length < 4){
        var p=document.createElement("p")
        p.textContent="****username must have min 4 Characters****"
        div_name.appendChild(p)
        return 0
    }
}

//function check for valid email
function valid_email(email){
    var div_email=document.getElementById("div_email")
    if(email[0]=="." || email[0]=="@"){
        var p=document.createElement("p")
        p.textContent="*****please enter valid email******"
        div_email.appendChild(p)
        return 0
    }
    for(var i=0;i<email.length-1;i++){
        if(email[i]=="@" && email[i+1]=="."){
            var p=document.createElement("p")
            p.textContent="*****please enter valid email******"
            div_email.appendChild(p)
            return 0
        }
        if(email[i]=="." && email[i+1]=="."){
            var p=document.createElement("p")
            p.textContent="*****please enter valid email******"
            div_email.appendChild(p)
            return 0
        }
    }
}

// function check for valid passsword
function valid_pswd(pswd){
    var div_pswd=document.getElementById("div_pswd")
    if(pswd.length < 6){
        var p=document.createElement("p")
            p.textContent="*****Password should have Min 6 Characters******"
            div_pswd.appendChild(p)
            return 0
    }
}

//function to store the data in local storage
function storeThedata(name,email,pswd){
    var user={
        name:name,
        email:email,
        pswd:pswd,
        transactions:[]

    }
    var all_users=JSON.parse(localStorage.getItem("expense_users"))
    all_users.push(user)
    localStorage.setItem("expense_users",JSON.stringify(all_users))
}


function displayResult(){
    var p=document.createElement("p")
    p.textContent=`*******Registration successfull*******
    *******please login*******`
    cont.appendChild(p)
    setTimeout(function(){
        window.location.href="file:///E:/masai_school/expenceManager/Project-Module3/login/login.html"
    },2000)
    
}