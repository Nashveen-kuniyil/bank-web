function sin() {
    // Redirects after 7 seconds (if needed)
    setTimeout(function() {
        window.location = './login.html';  
    }, 7000);
}

function register() {
    const users = {
        user: username.value,
        accountnumber: accno.value,
        password: pass.value
    };

    // Validate form inputs
    if (!validateInputs(users)) {
        return; // Stop execution if validation fails
    }

    // Check if account already exists in localStorage
    if (users.accountnumber in localStorage) {
        Swal.fire({
            icon: 'error',
            iconColor: '#fff',
            title: 'Error',
            color: 'white',
            background: '#6e63ff',
            confirmButtonColor: '#302f2f',
            text: 'User details already registered',
        });
        return false;     
    } else {
        // Store user data in localStorage
        localStorage.setItem(users.accountnumber, JSON.stringify(users));

        Swal.fire({
            icon: 'success', 
            iconColor: '#fff',
            title: 'Success',
            color: 'white',
            background: 'green',
            confirmButtonColor: '#302f2f',
            text: 'Registered successfully',
        }).then(() => {
            window.location = './login.html';
        });
    
        return true;
    }
}

// condtion when the input fields are not crrct
function validateInputs(users) {
    let isValid = true;

    if (users.user.length === 0) {
        setInvalidInput('username', 'This is a required field');
        isValid = false;
    } else {
        setValidInput('username');
    }

    if (users.accountnumber.length === 0) {
        setInvalidInput('accno', 'This is a required field');
        isValid = false;
    } else {
        setValidInput('accno');
    }

    if (users.password.length < 8) {
        setInvalidInput('pass', 'Password requires 8 characters');
        isValid = false;
    } else {
        setValidInput('pass');
    }

    return isValid;
}

// wrong details
function setInvalidInput(inputId, placeholderText) {
    const input = document.getElementById(inputId);
    input.placeholder = placeholderText;
    input.classList.add('red-placeholder');
    input.style.borderColor = 'red';
}

//crrct details
function setValidInput(inputId) {
    const input = document.getElementById(inputId);
    input.style.borderColor = 'green';
    input.style.color = 'green';
}



