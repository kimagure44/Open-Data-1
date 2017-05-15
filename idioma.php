<?php  
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
    {
        $idioma = strtolower(substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2)); 
        echo json_encode(array("language"=>$idioma));  
    }
    else
    {
        echo json_encode(array("code" =>401, "message" => "unauthorized access"));
    }
?>