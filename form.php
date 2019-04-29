<?php 
if(isset($_POST['submit'])){
    /* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
    $to = "info@geoskyspb.ru"; // Здесь нужно написать e-mail, куда будут приходить письма   
    $from = $_POST['email-one'];

$name = $_POST['name-one'];
$email = $_POST['email-one'];
$tel = $_POST['tel-one'];
$subject = "Форма отправки сообщений с сайта geoskyspb";


$mail_to = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $name
E-mail: $email
Номер телефона: $tel";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$mail_to,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://geoskyspb.ru'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://geoskyspb.ru");}
window.setTimeout("changeurl();",3000);
</script>