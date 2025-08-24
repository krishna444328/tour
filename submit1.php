<?php
$host = "localhost";
$user = "root";
$password = ""; // XAMPP ya local mein mostly blank hota hai
$dbname = "tourism"; // Make sure this DB exists and table `contact` is inside

$conn = new mysqli($host, $user, $password, $dbname);

// Connection check
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Form data
$message = $_POST['Message'];
$email = $_POST['UserEmail'];
$contact_person = $_POST['UserName'];
$phone = $_POST['Phome'];

// Insert query
$sql = "INSERT INTO contact (message, email, contact_person, phone) VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $message, $email, $contact_person, $phone);

if ($stmt->execute()) {
    // Redirect to index.html after successful submission
    header("Location: index.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();
?>
