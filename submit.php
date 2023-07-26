<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vismaya";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $event = $_POST["event"];
    $team = $_POST["team"];
    $college = $_POST["college"];
    $numOfInputs = intval($_POST["Inputs"]);
    $addnumOfInputs = intval($_POST["addInputs"]);

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'YOUR_MAIL';
    $mail->Password = 'YOUR_GOOGLE_APP_PASSWORD';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    for ($i = 1; $i <= $numOfInputs+$addnumOfInputs; $i++) {
        if (isset($_POST["input_{$i}_1"]) && isset($_POST["input_{$i}_2"]) && isset($_POST["input_{$i}_3"]) &&
        !empty($_POST["input_{$i}_1"]) && !empty($_POST["input_{$i}_2"]) && !empty($_POST["input_{$i}_3"])) {
            $name = $_POST["input_{$i}_1"];
            $number = $_POST["input_{$i}_2"];
            $email = $_POST["input_{$i}_3"];

            // Prepare the SQL statement
            $sql = "INSERT INTO `$event` (Member_name, Mobile_number, Email, Team_name, College) VALUES ('$name', '$number', '$email', '$team', '$college')";
            
            if ($conn->query($sql) === TRUE) {
                
            $mail->setFrom('YOUR_MAIL', 'Vismaya-2019');
            $mail->addAddress($email);
            $mail->Subject = ("Vismaya $event Registration");
            $mail->Body = "Hello $name, <br>Your registration for $event is Confirmed.<br>Team Name: $team.<br> Thank you, see you there!";
            $mail->send();
                echo "successful";
            } else {
                echo "Error" . $conn->error;
            }

        }
    }
    $conn->close();
}
?>
