<?php
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
    {
        $language = $_REQUEST['language'];
        if ($language == "es")
        {
            $source = file_get_contents("https://www.esmadrid.com/opendata/alojamientos_v1_es.xml");
        }
        else if ($language == "en")
        {
            $source = file_get_contents("https://www.esmadrid.com/opendata/alojamientos_v1_en.xml");
        }
        else if ($language == "fr")
        {
            $source = file_get_contents("https://www.esmadrid.com/opendata/alojamientos_v1_fr.xml");
        }
        // De momento hasta que ponga los otros idiomas
        else
        {
            $source = file_get_contents("https://www.esmadrid.com/opendata/alojamientos_v1_es.xml");
        }
        $datos = simplexml_load_string($source, 'SimpleXMLElement', LIBXML_NOCDATA) or die("Error: Cannot create object");
        echo json_encode($datos);   
    }
    else
    {
        echo json_encode(array("code" =>401, "message" => "unauthorized access"));
    }
?>