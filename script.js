const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const changeTable = document.querySelector(".change-table");
const labelCashGiven= document.querySelector("#cash");


const availableNotes =[2000,500,100,20,10,5,1];

changeTable.classList.add("hidden");
cashGiven.classList.add("hidden");
checkButton.classList.add("hidden");
labelCashGiven.classList.add("hidden");


checkButton.addEventListener('click', ()=>{

    hideMessage();
    

    if(billAmount.value > 0)
    {
        
        if(cashGiven.value >= billAmount.value)
        {
                const amountToBeReturned = cashGiven.value - billAmount.value ;
                calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Do you want to wash the plates? ");
        }
    }
    else
    
    {
      showMessage("Invalid bill amount");
    }


});



nextButton.addEventListener('click',()=>{

changeTable.classList.remove("hidden");
cashGiven.classList.remove("hidden");
checkButton.classList.remove("hidden");
labelCashGiven.classList.remove("hidden");

})


const calculateChange=amountToBeReturned=>{

   for(let i=0;i<availableNotes.length;i++)
   {
       const numberOfNotes = Math.trunc(amountToBeReturned/ availableNotes[i]);
       amountToBeReturned = amountToBeReturned % availableNotes[i];
       noOfNotes[i].innerText = numberOfNotes;
   }

  

}


const hideMessage=()=>
{
    message.style.display="none";
}

const showMessage = (msg)=>
{
    message.style.display="block";
    message.innerText = msg;
}

