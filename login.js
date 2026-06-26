document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('loginForm');
    var feedback = document.getElementById('feedback');

    if (!form || !feedback) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var email = document.getElementById('email')?.value.trim();
        var password = document.getElementById('password')?.value.trim();

        if (!email || !password) {
            feedback.textContent = 'Please enter both email and password.';
            return;
        }

        feedback.textContent = 'Login successful for demo purposes. Redirecting back...';
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1200);
    });
});