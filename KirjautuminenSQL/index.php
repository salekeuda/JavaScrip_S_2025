<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<form id="lomake" method="post" action="index.php" onsubmit="tarkistaLomake(event)">
  <h1>Kirjautumislomake</h1>

  <label for="nimi">Nimi:</label><br/>
  <input type="text" name="nimi" id="nimi"><br/>

  <label for="salasana">Salasana:</label><br/>
  <input type="password" name="salasana" id="salasana"><br/>

  <p>Arvio koneesta:</p>
  <label><input type="radio" name="arvio" value="hyvä"> Hyvä</label>
  <label><input type="radio" name="arvio" value="huono"> Huono</label><br/>

  <label for="kommentti">Kommentti:</label><br/>
  <textarea name="kommentti" id="kommentti"></textarea><br/>

  <input type="submit" value="Lähetä">
</form>

<script src="kirjautuminen.js"></script>
</body>
</html>

<?php
// Yksinkertainen MySQL-yhteys

$servername = "localhost";
$username   = "root";
$password   = "";  // lisää salasana jos sinulla on sellainen
$dbname     = "asiakasrekisteri";

$conn = new mysqli($servername, $username, $password, $dbname);


// Tarkistetaan onnistuiko yhteys
if ($conn->connect_error) {
    die("Tietokantavirhe: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");
?>