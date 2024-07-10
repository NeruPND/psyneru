document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var issue = document.getElementById('issue').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit_support.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('Ваш запрос отправлен. Спасибо!');
        }
    };
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&issue=' + encodeURIComponent(issue));
});
