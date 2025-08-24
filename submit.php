<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "tourism";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$arrival = $_POST['arrival'];
$adults = $_POST['Adults'];
$children = $_POST['Children'];
$contact = $_POST['UserName'];
$phone = $_POST['Phome'];
$email = $_POST['UserEmail'];
$message = $_POST['Message'];

$sql = "INSERT INTO inquiries (arrival_date, adults, children, contact_person, phone, email, message) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("siissss", $arrival, $adults, $children, $contact, $phone, $email, $message);

if ($stmt->execute()) {
    // ✅ Redirect to index.html
    header("Location: index.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();
?>
