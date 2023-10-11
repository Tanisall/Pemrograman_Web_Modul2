document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        if (name.trim() === "") {
            window.alert("Nama tidak boleh kosong");
        } else if (!isValidEmail(email)) {
            window.alert("Email tidak valid");
        } else if (address.trim() === "") {
            window.alert("Alamat tidak boleh kosong");
        } else {
            window.alert("Formulir berhasil dikirim!");
            myForm.reset();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});
