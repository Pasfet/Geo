<?php 
if(isset($_POST['submit'])){
    /* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
    $to = "snake_99@list.ru"; // Здесь нужно написать e-mail, куда будут приходить письма   
    $from = $_POST['email'];

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];
$subject = "Форма отправки сообщений с сайта geoskyspb";


$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $name
E-mail: $email
Номер телефона: $tel
Текст сообщения: $message";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$mail_to_myemail,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='http://u53303.onhh.ru/'>Вернуться на сайт.</a>";
}
?>