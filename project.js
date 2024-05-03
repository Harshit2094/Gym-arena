document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log(formData);
});