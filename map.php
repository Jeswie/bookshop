<?php
if (isset($_POST['adres']))
    switch ($_POST['adres']) {
		case 1: echo json_encode(array("x"=>"50.043682","y"=>"36.287835","a"=>"Национальный аэрокосмический университет имени Н. Е. Жуковского","c"=>"Номер телефона:","b"=>"Адрес: ")); break;       
		case 2: echo json_encode(array("x"=>"49.995105253958286","y"=>"36.34045074194182" ,"a"=>"ТРЦ Украина","c"=>"Номер телефона","b"=>"Адрес")); break;
    }
?>
