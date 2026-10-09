<?php
// Receives the project enquiry form (POST) and emails it to the studio. Returns JSON.
header('Content-Type: application/json; charset=utf-8');

const TO_EMAIL   = 'navis@tresundios.com';
const FROM_EMAIL = 'no-reply@tresundios.in'; // must be an address on your hosting domain

function respond($ok, $message, $code = 200) {
    http_response_code($code);
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

function clean($v, $max = 200) {
    $v = trim((string) $v);
    $v = preg_replace('/[\r\n]+/', ' ', $v); // blocks header injection
    return mb_substr($v, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(false, 'Method not allowed.', 405);

// Honeypot: bots fill this hidden field
if (!empty($_POST['website'])) respond(true, 'Thank you.');

$name    = clean($_POST['name'] ?? '', 100);
$biz     = clean($_POST['biz'] ?? '', 150);
$contact = clean($_POST['contact'] ?? '', 150);
$svc     = clean($_POST['svc'] ?? '', 60);
$budget  = clean($_POST['budget'] ?? '', 60);
$msg     = mb_substr(trim((string) ($_POST['msg'] ?? '')), 0, 4000);

if ($name === '' || $contact === '') respond(false, 'Please add your name and an email or phone number.', 422);

$replyTo = filter_var($contact, FILTER_VALIDATE_EMAIL) ? $contact : null;

$body = "New project enquiry from tresundios.in\n\n"
      . "Name: $name\nBusiness: " . ($biz ?: '-') . "\nContact: $contact\n"
      . "Service: $svc\nBudget: $budget\n\nMessage:\n" . ($msg ?: '-') . "\n";

$headers = [
    'From: Tresundios Website <' . FROM_EMAIL . '>',
    'Content-Type: text/plain; charset=UTF-8',
];
if ($replyTo) $headers[] = 'Reply-To: ' . $replyTo;

$subject = '=?UTF-8?B?' . base64_encode("Project enquiry: $svc ($name)") . '?=';

if (mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers))) {
    respond(true, 'Thank you! Your enquiry has been sent. We reply within 24 hours.');
}
respond(false, 'Sorry, we could not send your enquiry. Please email navis@tresundios.com or WhatsApp +91 98408 55590.', 500);
