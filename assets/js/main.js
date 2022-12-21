// email funciton
function SendMail () {
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_5nabdfz', 'template_um23u9m', params).then(function(res) {
        if (res.status === 200) {
            alert(`Thank you for your contact! I will get in touch as soon as possible!`)
        }
    })
}