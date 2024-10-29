export function contactMeFormHandler(){
    const formData = {
        name:  document.getElementById("name").value,
        email: document.getElementById("email").value,
        question: document.getElementById("comment").value,
        details: document.getElementById("details").value,
        consent: document.getElementById("consent").checked
    };

    axios.post("/api/submit", formData)
        .then(response => {
            console.log(response.data);
            alert('Дані надіслано успішно!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Сталася помилка при відправці даних.');
        });
}