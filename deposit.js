

function clearall(){

    Swal.fire({
        icon: 'warning',              
        iconColor: 'white',
        title: 'Are you sure?',        
        text: 'Are you sure want to clear all data?', 
        showCancelButton: true,        
        confirmButtonColor: 'red', 
        cancelButtonColor: 'green',     
        background: '#6e63ff',             
        color: 'white',                
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear()  
              }
    });

   
}



function logout() {
    Swal.fire({
        icon: 'warning',              
        iconColor: 'white',
        title: 'Are you sure?',        
        text: 'Are you sure want to logout?', 
        showCancelButton: true,        
        confirmButtonColor: 'red', 
        cancelButtonColor: 'green',     
        background: '#6e63ff',             
        color: 'white',                
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = './registration.html';
        }
    });
}


function deposit() {

    Swal.fire({
        icon: 'warning',              
        iconColor: 'white',
        title: 'Are you sure?',        
        text: 'Are you sure want to deposit?', 
        showCancelButton: true,        
        confirmButtonColor: 'red', 
        cancelButtonColor: 'green',     
        background: '#6e63ff',             
        color: 'white',                
    }).then((result) => {
        if (result.isConfirmed) {
             
              }
    });

    const depositamt = document.getElementById('damount');
    const depositacct = document.getElementById('daccount');
    const dresult = document.getElementById('dresult'); 

    let depositAmount = parseFloat(depositamt.value); 
    let depositAccount = depositacct.value.trim(); 

    // for getting the crrct same account
    if (!localStorage.getItem(depositAccount)) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'error',
            text: 'Invalid account number. Please enter a valid account.',
            confirmButtonColor: '#302f2f',
            background: 'red',
            color: 'white',
        });
        
        return;
    }

    // for entering crrct amount
    if (isNaN(depositAmount) || depositAmount<=0) {
        Swal.fire({
            icon: 'success',
            iconColor: 'white',
            title: 'success',
            text: 'Please enter a valid deposit amount',
            confirmButtonColor: '#302f2f',
            background: 'green',
            color: 'white',
        });
        return;
    }
    
    // for getting crrntblnce
    let currentBalance = parseFloat(localStorage.getItem(depositAc/count)) || 0.00; 

    if (isNaN(currentBalance)) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'error',
            text: 'error with account data',
            confirmButtonColor: '#302f2f',
            background: 'red',
            color: 'white',
        });        return;
    }


    //for storing updated amount balance
    let updatedBalance = currentBalance + depositAmount;

    localStorage.setItem(depositAccount, updatedBalance.toFixed(2)); 

    Swal.fire({
        icon: 'success',
        iconColor: 'white',
        title: 'success',
        text: ` Deposit Successfull! Current balance: $${updatedBalance.toFixed(2)}`,
        confirmButtonColor: '#302f2f',
        background: 'green',
        color: 'white',
    });

    dresult.innerHTML = ` Current balance: $${updatedBalance.toFixed(2)}`;
}



function withdraw() 
{

    const withdrawamt = document.getElementById('wamount');
    const withdrawacct = document.getElementById('waccount');
    const wresult = document.getElementById('wresult'); 

    let withdrawAmount = parseFloat(withdrawamt.value); 
    let withdrawAccount = withdrawacct.value.trim(); 

    // for entering crrct amount
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'error',
            text: 'please enter a valid withdrawal amount',
            confirmButtonColor: '#302f2f',
            background: 'red',
            color: 'white',
        });
        
        return;
    }

    let currentBalance = localStorage.getItem(withdrawAccount);
    if (!currentBalance) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'error',
            text: 'Invalid account or account does not exist.',
            confirmButtonColor: '#302f2f',
            background: 'red',
            color: 'white',
        });
        return;
    }

    currentBalance = parseFloat(currentBalance);

    if (isNaN(currentBalance)) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'error',
            text: 'Error with account balance data.',
            confirmButtonColor: '#302f2f',
            background: 'red',
            color: 'white',
        });

        return;
    }

    //  insufficient balance
    if (withdrawAmount > currentBalance) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'error',
            text:'Insufficient amount for this withdrawal.' ,
            confirmButtonColor: '#302f2f',
            background: 'red',
            color: 'white',
        });
        return;
    }

    // showing balance aftr withdrawal
    let updatedBalance = currentBalance - withdrawAmount;
    localStorage.setItem(withdrawAccount, updatedBalance.toFixed(2)); 

    Swal.fire({
        icon: 'success',
        iconColor: 'white',
        title: 'success',
        text: ` New balance: $${updatedBalance.toFixed(2)}`,
        confirmButtonColor: '#302f2f',
        background: 'green',
        color: 'white',
    });

    wresult.innerHTML = ` New balance: $${updatedBalance.toFixed(2)}`;
}



