<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === "admin" && $password === "admin") {
        $_SESSION['admin_logged_in'] = true;
    } else {
        header("Location: generate.php?error=1");
        exit;
    }
}

if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: generate.php");
    exit;
}
$event = $_POST["event"];
$conn = mysqli_connect('localhost', 'root', '', 'vismaya');

$filename = preg_replace('/[\t\n\r\s]+/', '_', $event).".xls";
header("Content-Disposition: attachment; filename=\"$filename\"");
header("Content-Type: application/vnd.ms-excel");

$user_query = mysqli_query($conn, 'SELECT * FROM `'.$event.'`');
$flag = false;
while ($row = mysqli_fetch_assoc($user_query)) {
    if (!$flag) {
        echo implode("\t", array_keys($row)) . "\r\n";
        $flag = true;
    }
    echo implode("\t", array_values($row)) . "\r\n";
}
mysqli_close($conn);
?>
