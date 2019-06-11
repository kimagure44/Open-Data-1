import methods from './methods.js';
import variables from './variables.js';
$(document).ready(function() {
    $('.button-collapse').sideNav({ menuWidth: 300, edge: 'left', closeOnClick: true, draggable: true });
    $.ajax({
        url: "idioma.php",
        type: "post",
        dataType: "html",
        cache: "false",
        success: data => {
            const obj = JSON.parse(data);
            if (typeof obj.code === 'undefined') {
                variables.idioma = obj.language;
                $.ajax({
                    data: { language: variables.idioma },
                    url: "downloadFile.php",
                    type: "post",
                    dataType: "json",
                    cache: "false",
                    success: data => {
                        if (typeof data.code === 'undefined') {
                            methods.viewData(data);
                            methods.searchCard();
                        } else {
                            $("body").html(JSON.stringify(data));
                        }
                    },
                    beforeSend: () => {
                        methods.showAjaxLoading(true);
                    },
                    complete: () => {
                        methods.showAjaxLoading(false);
                    }
                });
            } else {
                $("body").html(JSON.stringify(data));
            }
        }
    });
})