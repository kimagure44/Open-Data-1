<?php
    $language = $_REQUEST['language'];
    if ($language == "es") {
        $data = "alojamientos_v1_es.xml";
    } else if ($language == "en") {
        $data = "alojamientos_v1_en.xml";
    } else if ($language == "fr") {
        $data = "alojamientos_v1_fr.xml";
    } else {
        $data = "alojamientos_v1_es.xml";
    }
    $source = file_get_contents($data);
    $datos = simplexml_load_string($source, 'SimpleXMLElement', LIBXML_NOCDATA) or die("Error: Cannot create object");
    echo json_encode($datos);   
?>