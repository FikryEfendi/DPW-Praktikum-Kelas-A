<?php
session_start();
if(!isset($_SESSION['login'])){
    header("Location: login.php");
    exit;
}

$nama = isset($_GET['to']) ? $_GET['to'] : "Tamu Undangan";
?>

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Undangan Pernikahan</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div style="text-align:center;">
    <h2>Undangan Pernikahan</h2>

    <h1>Fikry <br>& <br>Bulan</h1>

    <img src="https://i.pinimg.com/736x/5f/e7/e8/5fe7e89c6988d2b7c93efb26fcaff30a.jpg" width="250">

    <p>Sabtu, 14 Februari 2027</p>

    <h3>Yth.<br> <?php echo $nama; ?> dan Keluarga</h3>

    <button onclick="bukaUndangan()">Open Invitation</button>
</div>

<script>
function bukaUndangan() {
    window.location.href = "landingpage.php?to=<?php echo $nama; ?>";
}
</script>

</body>
</html>