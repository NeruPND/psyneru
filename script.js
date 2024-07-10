// scripts.js
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    
    // Получаем значения полей формы
    const formData = new FormData(event.target);

    // Преобразуем их в объект
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Отправляем данные на сервер
    fetch('/submit_form/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Запись успешно отправлена!');
        } else {
            alert('Произошла ошибка при отправке записи.');
        }
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });
});