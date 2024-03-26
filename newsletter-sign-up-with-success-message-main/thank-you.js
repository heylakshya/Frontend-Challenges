window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    
    const email = params.get('email');

    const emailContainer = document.getElementById("email");

    emailContainer.textContent = email

    // console.log(email);
}    

