const targetDate = new Date("Feb 14, 2027 08:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Acara Telah Dimulai";
    }

}, 1000);

function tampilkanNama(event) {
    event.preventDefault();
    var nama = document.getElementById("inputNama").value;
    if (nama !== "") {
        document.getElementById("namaTamu").innerHTML =
            "Yth.<br>" + nama + " dan Keluarga";
    }
}

function kirimRsvp(status) {

    const nama = document.getElementById("inputNama").value.trim();

    if (nama === "") {
        alert("Silakan masukkan nama terlebih dahulu di bagian atas.");
        return;
    }

    let pesan = "";

    if (status === "Hadir") {
        pesan = "Terima kasih " + nama + " 🤍 Kami tunggu kehadiran Anda di hari bahagia kami.";
    } else {
        pesan = "Terima kasih " + nama + " atas doa dan perhatiannya 🤍";
    }

    document.getElementById("pesanKonfirmasi").innerHTML = pesan;
}