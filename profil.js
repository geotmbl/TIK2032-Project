// Ambil elemen foto profil
var fotoProfil = document.getElementById("profil");

// Tambahkan event listener untuk klik pada foto profil
fotoProfil.addEventListener("click", function() {
    // Ambil foto profil yang diperbesar
    var fotoPerbesar = document.getElementById("fotoPerbesar");
    // Setel src foto profil yang diperbesar sesuai dengan src foto profil yang diklik
    fotoPerbesar.src = this.src;
    // Tampilkan overlay
    document.getElementById("overlay").style.display = "flex";
});

// Ambil elemen overlay
var overlay = document.getElementById("overlay");

// Tambahkan event listener untuk klik pada overlay, sehingga ketika overlay diklik, foto diperbesar akan ditutup
overlay.addEventListener("click", function() {
    // Sembunyikan overlay
    this.style.display = "none";
});