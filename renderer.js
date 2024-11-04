document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();  // ������� ���������� �������� �����

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // ��������: �� ���������� ������ � ������������ ������
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // ������ �������� ���������� �����
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Registration successful");
});
