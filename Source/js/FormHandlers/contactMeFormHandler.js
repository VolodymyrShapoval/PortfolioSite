export function contactMeFormHandler(){
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("comment").value
    }

    // Відправляємо дані на сервер через POST-запит
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            // Очистка полів форми
            document.getElementById("contactForm").reset();
        } else {
            return response.text().then(text => {
                throw new Error(text);
            });
        }
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
}