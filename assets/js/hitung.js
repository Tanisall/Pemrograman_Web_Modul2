// Fungsi untuk menampilkan hasil penjumlahan dalam popup window
function tampilkanHasilPenjumlahan(angka1, angka2) {
    const hasil = angka1 + angka2;
    alert("Hasil Penjumlahan: " + hasil);
}

// Menangani pengiriman formulir
document.getElementById("jumlahkanForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman untuk diperbarui

    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    // Memanggil fungsi untuk menampilkan hasil penjumlahan
    tampilkanHasilPenjumlahan(angka1, angka2);
});

// Menangani klik tombol "Ulang"
document.getElementById("ulangButton").addEventListener("click", function () {
    // Mengosongkan input dan hasil
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
});