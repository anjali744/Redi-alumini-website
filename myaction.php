<?php
// myaction.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Process form data when the form is submitted using POST method

    // Retrieve form data
    $fullName = $_POST["fname"];
    // Retrieve other form fields as needed

    // Perform any necessary processing or database operations with the form data

    // For testing purposes, you can simply echo the received data
    echo "Received data: Full Name - " . $fullName;
} else {
    // Handle cases when the form is not submitted using the expected method
    http_response_code(405); // Method Not Allowed
    echo "Method Not Allowed";
}
?>
