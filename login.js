



function login() {
    const accountNbr = document.getElementById('accountNbr');
    const passwd = document.getElementById('passwd');

    let details = {
        accountnumber: accountNbr.value,
        password: passwd.value,
    };

    // Checking acc:no in loclstorage
    const storedUser = localStorage.getItem(details.accountnumber);

    if (!storedUser) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'Error',
            text: 'Invalid account number',
            confirmButtonColor: '#302f2f',
            background: 'red',
            color: 'white',
        });
        
        accountNbr.style.borderColor = 'red';
        accountNbr.placeholder = 'Invalid account number';
    } 
    
    else {
        const userData = JSON.parse(storedUser);

        // checking crrct paaswrd
        if (userData.password === details.password) {
            Swal.fire({
                icon: 'success',
                iconColor: 'white',
                title: 'Login successful',
                confirmButtonColor: '#302f2f',
                background: 'green',
                color: 'white',
            }).then(() => {
                window.location = './deposit.html';
            });

            accountNbr.style.borderColor = 'green';
            passwd.style.borderColor = 'green';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid password',
                confirmButtonColor: '#302f2f',
                background: '#6e63ff',
                color: 'white',
            });
            passwd.style.borderColor = 'red';
            passwd.placeholder = 'Incorrect password';
        }
    }
}




