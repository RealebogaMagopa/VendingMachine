var change = 0;
var moneyInserted = 0;
var msg = "";

var messageE1 = document.getElementById("message");
var sodas = ["Coke", "Simba","Doritoes","Sprite"];
const Price = 1.3;

const currency_rand = 1;
const currency_cent = 0.1;



function getTotal(){
    var currency_rands = Number(document.getElementById("rand").value)
    var currency_cents = Number(document.getElementById("cent").value)

    if(currency_rands > 0)
    {
        currency_rands = currency_rands * currency_rand;
    }
    if(currency_cents > 0)
    {
        currency_cents = currency_rands * currency_cent;
    }
     totalPaid = currency_rands + currency_cents;

    return totalPaid.toFixed(2);
}

function tally(){
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}
function clearTally(){
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}
function clearForm() {
    document.getElementById("rand").value = 0;
    document.getElementById("cent").value = 0;

}
function clear(){
    clearForm();
        clearTally();
    document.getElementById("rand").value = '';
}
function cancel(){
    getTotal();
    if(totalPaid > 0){
        msg = "Transaction cancelled. R" + totalPaid.toFixed(2) + "has been returned.";

        clearForm();
        clearTally();

        messageE1.innerHTML = msg;
    }else if (totalPaid == 0){
        msg = "Insert money first. Select a Goodie."; 

        messageE1.innerHTML = msg;

    }
    
    function calculateChange(){
        var tempChange = 0;

        if(getTotal() != 0){
            return(tempChange = (getTotal() - Price).toFixed(2));
        }

        return tempChange.toFixed(2);
    }
    function dispenseSoda(soda){
        messageE1.innerHTML = msg;
        change = 0;

        var selectedSoda = soda[soda];

        change = calculateChange();

        if(change < 0){
            msg = "You did not pay enough. $" + totalPaid.paid.toFixed(2) + "has been returned to coin return.";
            totalPaid = 0;
            change = 0;
            clearForm();
            clearTally();

            messageE1.innerHTML = msg;
        } else if(change > 0){
            msg = selectedSoda + "has been dispensed. $" + change + "has been returned to the coin return. ";

            totalPaid = 0;
            change = 0;
            clearForm();
            clearTally();

            messageE1.innerHTML = msg;
        } else if(totalPaid == 0){
            msg = selectedSoda + "has been dispensed.";

            totalPaid = 0;
            change = 0;
            clearForm();
            clearTally();

            messageE1.innerHTML = msg;
        }
    }
   
}



