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

    let pesan = "";

    if (status === "Hadir") {
        pesan = "Terima kasih 🤍 Kami tunggu kehadiran Anda.";
    } 
    else if (status === "Tidak Hadir") {
        pesan = "Terima kasih atas doa dan perhatiannya 🤍";
    } 
    else {
        pesan = "";
    }

    document.getElementById("pesanKonfirmasi").innerHTML = pesan;
}
function kirimUcapan() {

    const nama = document.getElementById("namaUcapan").value;
    const ucapan = document.getElementById("isiUcapan").value;

    if (nama === "" || ucapan === "") {
        alert("Nama dan ucapan harus diisi");
        return;
    }

    const kartu = document.createElement("div");
    kartu.className = "kartu-ucapan";

    kartu.innerHTML =
        "<h4>" + nama + "</h4>" +
        "<p>" + ucapan + "</p>";

    document.getElementById("daftarUcapan").appendChild(kartu);

    document.getElementById("namaUcapan").value = "";
    document.getElementById("isiUcapan").value = "";
}