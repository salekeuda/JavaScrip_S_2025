


<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'connect.php';

// ---------------------------------------
// 1) POISTO
// ---------------------------------------
if (isset($_GET['delete'])) {
    $id = (int)$_GET['delete'];
    $conn->query("DELETE FROM asiakkaat WHERE id=$id");
    header("Location: index.php");
    exit;
}

// ---------------------------------------
// 2) TALLENNUS (UUSI TAI MUOKKAUS)
// ---------------------------------------
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $id               = $_POST['id'] ?? '';
    $nimi             = $_POST['nimi'];
    $salasana           = $_POST['salasana'];
    $postinumero      = $_POST['postinumero'];
    $postitoimipaikka = $_POST['postitoimipaikka'];
    $sahkoposti       = $_POST['sahkoposti'];
    $puhelin          = $_POST['puhelin'];

    if ($id) {
        // Päivitä
        $sql = "UPDATE asiakkaat SET 
                    nimi='$nimi',
                    salasana='$salasana',
                WHERE id=$id";
    } else {
        // Lisää
        $sql = "INSERT INTO asiakkaat 
                (nimi, salasana, postinumero,)
                VALUES ('$nimi','$salasana)";
    }

    $conn->query($sql);
    header("Location: index.php");
    exit;
}

// ---------------------------------------
// 3) MUOKATTAVAN TIEDON HAKU
// ---------------------------------------
$editData = null;

if (isset($_GET['edit'])) {
    $id = (int)$_GET['edit'];
    $result = $conn->query("SELECT * FROM asiakkaat WHERE id=$id");
    $editData = $result->fetch_assoc();
}

// ---------------------------------------
// 4) LISTAUS
// ---------------------------------------
$result = $conn->query("SELECT * FROM asiakkaat ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>Asiakasrekisteri - yksinkertainen versio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Asiakasrekisteri</h1>

<section class="box">
    <h2><?= $editData ? "Muokkaa asiakasta" : "Lisää asiakas" ?></h2>

    <form method="post">
        <input type="hidden" name="id" value="<?= $editData['id'] ?? '' ?>">

        <label>Nimi</label>
        <input type="text" name="nimi" required value="<?= $editData['nimi'] ?? '' ?>">

        <label>salasana</label>
        <input type="text" name="salasana" required value="<?= $editData['salasana'] ?? '' ?>">

        <button type="submit">Tallenna</button>
    </form>
</section>

<section class="box">
    <h2>Asiakaslista</h2>

    <?php if ($result->num_rows == 0): ?>
        <p>Ei asiakkaita.</p>
    <?php else: ?>
        <table>
            <tr>
                <th>Nimi</th>
                <th>salasana</th>
                <th>Sähköposti</th>
                <th>Puhelin</th>
                <th>Toiminnot</th>
            </tr>

            <?php while ($row = $result->fetch_assoc()): ?>
                <tr>
                    <td><?= $row['nimi'] ?></td>
                    <td><?= $row['salasana'] ?>
                    <td>
                        <a href="index.php?edit=<?= $row['id'] ?>">Muokkaa</a> |
                        <a href="index.php?delete=<?= $row['id'] ?>" onclick="return confirm('Poistetaanko?');">
                            Poista
                        </a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
    <?php endif; ?>
</section>

</body>
</html>