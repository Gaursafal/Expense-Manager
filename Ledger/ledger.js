var current_user
var allTransactions
var t_trans
window.addEventListener("DOMContentLoaded",() => {
    var btns=document.getElementById("btns")
    btns.addEventListener("click",handleSelect)
    
    current_user=JSON.parse(localStorage.getItem("current_user"))
    t_trans=document.getElementById("t_trans")
    handleCurrentUser("both")
    var logout=document.getElementById("logout")
    logout.addEventListener("click" ,handleLogout)
})


function handleCurrentUser(qsn){
    var recent_t=document.getElementById("t_trans")
    recent_t.textContent=""
    var table=document.createElement("table")
    var thead=document.createElement("thead")
    var tr_h=document.createElement("tr")
    var h_title=document.createElement("td")
    var h_type=document.createElement("td")
    var h_amount=document.createElement("td")
    var h_timestamp=document.createElement("td")
    var t_body=document.createElement("tbody")
    h_title.textContent="Title"
    h_type.textContent="Type"
    h_amount.textContent="Amount"
    h_tstamp="Timings"
    tr_h.appendChild(h_title)
    tr_h.appendChild(h_type)
    tr_h.appendChild(h_amount)
    tr_h.append(h_tstamp)
    thead.appendChild(tr_h)
    var len_of_transactions=current_user.Transactions.length
    if(current_user.Transactions.length < 1){
        recent_t.textContent="you have no recent transactions"
    }
    else{
        for(var k=0;k<len_of_transactions;k++){
            if(qsn=="both"){
                var tr_s=document.createElement("tr")
                var td_tite=document.createElement("td")
                var td_type=document.createElement("td")
                var td_amount=document.createElement("td")
                var td_timestamp=document.createElement("td")
                td_tite.textContent=current_user.Transactions[len_of_transactions-k-1].title
                td_type.textContent=current_user.Transactions[len_of_transactions-k-1].type
                td_amount.textContent=current_user.Transactions[len_of_transactions-k-1].amount
                td_timestamp.textContent=current_user.Transactions[len_of_transactions-k-1].timestamp
                tr_s.appendChild(td_tite)
                tr_s.appendChild(td_type)
                tr_s.appendChild(td_amount)
                tr_s.appendChild(td_timestamp)
                t_body.appendChild(tr_s)
            }
            else if(qsn=="credit" && current_user.Transactions[len_of_transactions-k-1].type=="credit"){
                var tr_s=document.createElement("tr")
                var td_tite=document.createElement("td")
                var td_type=document.createElement("td")
                var td_amount=document.createElement("td")
                var td_timestamp=document.createElement("td")
                td_tite.textContent=current_user.Transactions[len_of_transactions-k-1].title
                td_type.textContent=current_user.Transactions[len_of_transactions-k-1].type
                td_amount.textContent=current_user.Transactions[len_of_transactions-k-1].amount
                td_timestamp.textContent=current_user.Transactions[len_of_transactions-k-1].timestamp
                tr_s.appendChild(td_tite)
                tr_s.appendChild(td_type)
                tr_s.appendChild(td_amount)
                tr_s.appendChild(td_timestamp)
                t_body.appendChild(tr_s)
            }
            else if(qsn=="debit" && current_user.Transactions[len_of_transactions-k-1].type=="debit"){
                var tr_s=document.createElement("tr")
                var td_tite=document.createElement("td")
                var td_type=document.createElement("td")
                var td_amount=document.createElement("td")
                var td_timestamp=document.createElement("td")
                td_tite.textContent=current_user.Transactions[len_of_transactions-k-1].title
                td_type.textContent=current_user.Transactions[len_of_transactions-k-1].type
                td_amount.textContent=current_user.Transactions[len_of_transactions-k-1].amount
                td_timestamp.textContent=current_user.Transactions[len_of_transactions-k-1].timestamp
                tr_s.appendChild(td_tite)
                tr_s.appendChild(td_type)
                tr_s.appendChild(td_amount)
                tr_s.appendChild(td_timestamp)
                t_body.appendChild(tr_s)
            }
            
            
        }
    }
    table.appendChild(thead)
    table.appendChild(t_body)
    recent_t.appendChild(table)
}


function handleSelect(){
    var selected_opt=document.querySelector("select").value
    handleCurrentUser(selected_opt)
}


function handleLogout(){
    window.location.href="file:///E:/masai_school/expenceManager/Project-Module3/login/login.html"
}