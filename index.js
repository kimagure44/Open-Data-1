var OPENDATA = OPENDATA || {};
var estructura;
OPENDATA.variables = {
    url: {
        notPicture: "https://image.freepik.com/foto-gratis/madera-blanca-de-textura-de-fondo_1232-1731.jpg"
    },
    msn: {
        es: {
            error: {
                noDisponible: "Información no disponible",
                errorTypeMime: "Formato de media no reconocido"
            },
            web: "Visita la web",
            idioma: "Español",
            contacto: "Datos de contacto",
            email: "Email",
            fax: "Fax",
            idioma: "Idioma",
            telefono: "Teléfono",
            localizacion: "Localización",
            direccion: "Dirección",
            cp: "Código postal",
            localidad: "Localidad",
            pais: "Pais",
            provincia: "Provincia",
            fotos: "Fotografias",
            descripcion: "Descripción",
            verMapa: "Ver en Google Maps",
            ubicacion: "Ubicación",
            calcularRuta: "Calcular la ruta",
            eligeOpcion: "Selecciona una opción",
            andando: "Andando",
            bici: "Bicicleta",
            coche: "Coche",
            seleccionTransporte: "Selecciona un transporte",
            origen: "Dirección origen",
            destino: "Direccion destino",
            calcularRuta: "Calcular ruta"
        },
        en: {
            error: {
                noDisponible: "Information not available",
                errorTypeMime: "Unrecognized media format"
            },
            web: "Visit the web",
            idioma: "English",
            contacto: "Contact information",
            email: "Email",
            fax: "Fax",
            idioma: "Language",
            telefono: "Phone number",
            localizacion: "Location",
            direccion: "Address",
            cp: "Postal code",
            localidad: "Locality",
            pais: "Country",
            provincia: "Province",
            fotos: "Photos",
            descripcion: "Description",
            verMapa: "See Google Maps",
            ubicacion: "Ubication",
            calcularRuta: "Calculate the route",
            eligeOpcion: "Select a option",
            andando: "Walking",
            bici: "Bicycle",
            coche: "Car",
            seleccionTransporte: "Select a transport",
            origen: "Home address",
            destino: "Destination address",
            calcularRuta: "Calculate route"
        },
        fr: {
            error: {
                noDisponible: "Information non disponible",
                errorTypeMime: "format de média non reconn"
            },
            web: "Visiter le site web",
            idioma: "français",
            contacto: "Contact",
            email: "Envoyer",
            fax: "Fax",
            idioma: "Langue",
            telefono: "Téléphone",
            localizacion: "Lieu",
            direccion: "Adresse",
            cp: "ZIP",
            localidad: "Lieu",
            pais: "Pays",
            provincia: "Province",
            fotos: "Photographies",
            descripcion: "Description",
            verMapa: "Afficher dans Google Maps",
            ubicacion: "Lieu",
            calcularRuta: "Itinéraire",
            eligeOpcion: "Sélectionner une option",
            andando: "Marche",
            bici: "Vélo",
            coche: "Voiture",
            seleccionTransporte: "Transport Sélectionnez",
            origen: "Adresse Source",
            destino: "Adresse de destination",
            calcularRuta: "routage"
        },
        it: {
            error: {
                noDisponible: "Información no disponible",
                errorTypeMime: "Formato de media no reconocido"
            },
            web: "Visita la web",
            idioma: "Español",
            contacto: "Datos de contacto",
            email: "Email",
            fax: "Fax",
            idioma: "Idioma",
            telefono: "Teléfono",
            localizacion: "Localización",
            direccion: "Dirección",
            cp: "Código postal",
            localidad: "Localidad",
            pais: "Pais",
            provincia: "Provincia",
            fotos: "Fotografias",
            descripcion: "Descripción",
            verMapa: "Ver en Google Maps",
            ubicacion: "Ubicación",
            calcularRuta: "Calcular la ruta",
            eligeOpcion: "Selecciona una opción",
            andando: "Andando",
            bici: "Bicicleta",
            coche: "Coche",
            seleccionTransporte: "Selecciona un transporte",
            origen: "Dirección origen",
            destino: "Direccion destino",
            calcularRuta: "Calcular ruta"
        },
        de: {
            error: {
                noDisponible: "Información no disponible",
                errorTypeMime: "Formato de media no reconocido"
            },
            web: "Visita la web",
            idioma: "Español",
            contacto: "Datos de contacto",
            email: "Email",
            fax: "Fax",
            idioma: "Idioma",
            telefono: "Teléfono",
            localizacion: "Localización",
            direccion: "Dirección",
            cp: "Código postal",
            localidad: "Localidad",
            pais: "Pais",
            provincia: "Provincia",
            fotos: "Fotografias",
            descripcion: "Descripción",
            verMapa: "Ver en Google Maps",
            ubicacion: "Ubicación",
            calcularRuta: "Calcular la ruta",
            eligeOpcion: "Selecciona una opción",
            andando: "Andando",
            bici: "Bicicleta",
            coche: "Coche",
            seleccionTransporte: "Selecciona un transporte",
            origen: "Dirección origen",
            destino: "Direccion destino",
            calcularRuta: "Calcular ruta"
        },
        pt: {
            error: {
                noDisponible: "Información no disponible",
                errorTypeMime: "Formato de media no reconocido"
            },
            web: "Visita la web",
            idioma: "Español",
            contacto: "Datos de contacto",
            email: "Email",
            fax: "Fax",
            idioma: "Idioma",
            telefono: "Teléfono",
            localizacion: "Localización",
            direccion: "Dirección",
            cp: "Código postal",
            localidad: "Localidad",
            pais: "Pais",
            provincia: "Provincia",
            fotos: "Fotografias",
            descripcion: "Descripción",
            verMapa: "Ver en Google Maps",
            ubicacion: "Ubicación",
            calcularRuta: "Calcular la ruta",
            eligeOpcion: "Selecciona una opción",
            andando: "Andando",
            bici: "Bicicleta",
            coche: "Coche",
            seleccionTransporte: "Selecciona un transporte",
            origen: "Dirección origen",
            destino: "Direccion destino",
            calcularRuta: "Calcular ruta"
        },
        ru: {
            error: {
                noDisponible: "Información no disponible",
                errorTypeMime: "Formato de media no reconocido"
            },
            web: "Visita la web",
            idioma: "Español",
            contacto: "Datos de contacto",
            email: "Email",
            fax: "Fax",
            idioma: "Idioma",
            telefono: "Teléfono",
            localizacion: "Localización",
            direccion: "Dirección",
            cp: "Código postal",
            localidad: "Localidad",
            pais: "Pais",
            provincia: "Provincia",
            fotos: "Fotografias",
            descripcion: "Descripción",
            verMapa: "Ver en Google Maps",
            ubicacion: "Ubicación",
            calcularRuta: "Calcular la ruta",
            eligeOpcion: "Selecciona una opción",
            andando: "Andando",
            bici: "Bicicleta",
            coche: "Coche",
            seleccionTransporte: "Selecciona un transporte",
            origen: "Dirección origen",
            destino: "Direccion destino",
            calcularRuta: "Calcular ruta"
        }
    },
    idioma: "",
    html: "",
    arrayEstructura: [],
    map: null,
    travelMode: null,
    destino: null
}
OPENDATA.metodos = {
    searchCard: function() {
        $(".inputSearch").on("keyup", function() {
            var buscar = $(this).val();
            if (buscar.length > 0 || buscar != "") {
                $("div.col").hide();
                $("div.col[data-name*='" + buscar + "' i]").show();
            } else {
                $("div.col").show();
            }
        });
    },
    setPanelGoogleMaps: function() {
        OPENDATA.variables.html += '<div class="row panelMapa">';
        OPENDATA.variables.html += '<div class="col s12">';
        OPENDATA.variables.html += '<div class="card-panel teal">';
        OPENDATA.variables.html += '<div class="fixed-action-btn horizontal click-to-toggle">';
        OPENDATA.variables.html += '<a class="btn-floating btn-large halfway-fab waves-effect waves-light blue "><i class="material-icons right">more_vert</i></a>';
        OPENDATA.variables.html += '<ul>';
        OPENDATA.variables.html += '<li><a class="btn-floating green darken-1 calcularRuta"><i class="material-icons">navigation</i></a></li>';
        OPENDATA.variables.html += '<li><a class="btn-floating red closeMap"><i class="material-icons">close</i></a></li>';
        OPENDATA.variables.html += '</ul>';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '<div class="claseMapa" id="mapaUbicacion"></div>';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '</div>';
    },
    setPanelCalcularRuta: function() {
        OPENDATA.variables.html += '<div id="modalCalcularRuta" class="modal">';
        OPENDATA.variables.html += '<div class="modal-content">';
        OPENDATA.variables.html += '<h4>' + OPENDATA.variables.msn.es.calcularRuta + '</h4>';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '<div class="modal-footer">';
        OPENDATA.variables.html += '<div class="input-field col s12">';
        OPENDATA.variables.html += '<select id="travelMode">';
        OPENDATA.variables.html += '<option value="" disabled selected>' + OPENDATA.variables.msn.es.eligeOpcion + '</option>';
        OPENDATA.variables.html += '<option value="1" data-icon="hiker.png" class="left circle">' + OPENDATA.variables.msn.es.andando + '</option>';
        OPENDATA.variables.html += '<option value="2" data-icon="bicycle.png" class="left circle">' + OPENDATA.variables.msn.es.bici + '</option>';
        OPENDATA.variables.html += '<option value="3" data-icon="car.png" class="left circle">' + OPENDATA.variables.msn.es.coche + '</option>';
        OPENDATA.variables.html += '</select>';
        OPENDATA.variables.html += '<label>' + OPENDATA.variables.msn.es.seleccionTransporte + '</label>';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '<div class="input-field col s12">';
        OPENDATA.variables.html += '<input type="text" id="origenRuta">';
        OPENDATA.variables.html += '<label for="origenRuta" class="">' + OPENDATA.variables.msn.es.origen + '</label>';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '<div class="input-field col s12">';
        OPENDATA.variables.html += '<input type="text" id="destinoRuta" disabled="disabled" value="">';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '<a class="waves-effect waves-light btn green" id="btnActionCalcularRuta"><i class="material-icons left">navigation</i>' + OPENDATA.variables.msn.es.calcularRuta + '</a>';
        OPENDATA.variables.html += '</div>';
        OPENDATA.variables.html += '</div>';
    },
    panelCalcularRuta: function() {
        var html = '<div id="modalCalcularRuta" class="modal">';
        html += '<div class="modal-content">';
        html += '<h4>' + OPENDATA.variables.msn.es.calcularRuta + '</h4>';
        html += '</div>';
        html += '<div class="modal-footer">';
        html += '<div class="input-field col s12">';
        html += '<select id="travelMode">';
        html += '<option value="" disabled selected>' + OPENDATA.variables.msn.es.eligeOpcion + '</option>';
        html += '<option value="1" data-icon="hiker.png" class="left circle">' + OPENDATA.variables.msn.es.andando + '</option>';
        html += '<option value="2" data-icon="bicycle.png" class="left circle">' + OPENDATA.variables.msn.es.bici + '</option>';
        html += '<option value="3" data-icon="car.png" class="left circle">' + OPENDATA.variables.msn.es.coche + '</option>';
        html += '</select>';
        html += '<label>' + OPENDATA.variables.msn.es.seleccionTransporte + '</label>';
        html += '</div>';
        html += '<div class="input-field col s12">';
        html += '<input type="text" id="origenRuta">';
        html += '<label for="origenRuta" class="">' + OPENDATA.variables.msn.es.origen + '</label>';
        html += '</div>';
        html += '<div class="input-field col s12">';
        html += '<input type="text" id="destinoRuta" disabled="disabled" value="' + OPENDATA.variables.destino + '">';
        html += '</div>';
        html += '<a class="waves-effect waves-light btn green" id="btnActionCalcularRuta"><i class="material-icons left">navigation</i>' + OPENDATA.variables.msn.es.calcularRuta + '</a>';
        html += '</div>';
        html += '</div>';
        return html;
    },
    createCard: function(destino) {
        OPENDATA.metodos.setPanelGoogleMaps();
        OPENDATA.metodos.setPanelCalcularRuta();
        $(OPENDATA.variables.arrayEstructura).each(function() {
            OPENDATA.variables.html += '<div class="col s12 m6 l4" data-name="' + this.basicData.name + '" data-id="' + this.serviceAttributtes.id + '" data-actualizacion="' + this.serviceAttributtes.fechaActualizacion + '"  data-latitude="' + this.geoData.latitude + '" data-longitude="' + this.geoData.longitude + '" data-direccion="' + this.geoData.address + '" data-idtipo="' + this.extraData.idTipo + '" data-tipo="' + this.extraData.Tipo + ' data-serviciopago="' + this.extraData.serviciosDePago + '" data-horario="' + this.extraData.horario + '" data-idsubcategoria="' + this.extraData.idSubcategoria + '" data-subcategoria="' + this.extraData.subcategoria + '" data-name="' + this.basicData.name + '" data-title="' + this.basicData.title + '">';
            OPENDATA.variables.html += '<div class="card z-depth-3">';
            OPENDATA.variables.html += '<div class="card-image">';
            if (this.multimedia.length > 0) { OPENDATA.variables.html += '<img src="' + this.multimedia[0].url + '">'; } else { OPENDATA.variables.html += '<img src="' + OPENDATA.variables.url.notPicture + '">'; }
            OPENDATA.variables.html += '</div>';
            OPENDATA.variables.html += '<div class="card-content">';
            OPENDATA.variables.html += '<a class="btn-floating halfway-fab waves-effect waves-light blue activator"><i class="material-icons">more_vert</i></a>';
            OPENDATA.variables.html += '<span class="card-title activator grey-text text-darken-4">' + this.basicData.name + '</span>';
            var estrellas = parseInt(this.extraData.subcategoria);
            if (!isNaN(estrellas)) {
                for (cont = 0; cont < estrellas; cont++) {
                    OPENDATA.variables.html += '<i class="Small material-icons amber-text lighten-1">grade</i>';
                }
            }
            OPENDATA.variables.html += '</div>';
            OPENDATA.variables.html += '<div class="card-reveal">';
            OPENDATA.variables.html += '<span class="card-title grey-text text-darken-4">';
            OPENDATA.variables.html += this.basicData.name;
            OPENDATA.variables.html += '<a class="btn-floating halfway-fab waves-effect waves-light blue "><i class="material-icons right">close</i></a>';
            OPENDATA.variables.html += '</span>';
            OPENDATA.variables.html += this.basicData.body + "<br>";
            OPENDATA.variables.html += '<b>' + OPENDATA.variables.msn[OPENDATA.variables.idioma].contacto + '</b>';
            OPENDATA.variables.html += '<hr>';
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].email + ":</b> " + this.basicData.email + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].fax + ":</b> " + this.basicData.fax + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].idioma + ":</b> " + this.basicData.language + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].telefono + ":</b> " + this.basicData.phone + "<br><br>";
            OPENDATA.variables.html += '<b>' + OPENDATA.variables.msn[OPENDATA.variables.idioma].localizacion + '</b>';
            OPENDATA.variables.html += '<hr>';
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].direccion + ":</b> " + this.geoData.address + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].cp + ":</b> " + this.geoData.zipcode + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].localidad + ":</b> " + this.geoData.locality + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].provincia + ":</b> " + this.geoData.subAdministrativeArea + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].pais + ":</b> " + this.geoData.country + "<br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].ubicacion + ": </b><span class='GoogleMaps blue-text'>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].verMapa + "</span></b><br><br>";
            OPENDATA.variables.html += "<b>" + OPENDATA.variables.msn[OPENDATA.variables.idioma].fotos + "</b>";
            OPENDATA.variables.html += '<hr>';

            $(this.multimedia).each(function() {
                OPENDATA.variables.html += '<ul>';
                OPENDATA.variables.html += '<li>';
                OPENDATA.variables.html += '<img src="' + this.url + '"  class="materialboxed">';
                OPENDATA.variables.html += '<span><b>' + OPENDATA.variables.msn[OPENDATA.variables.idioma].descripcion + ':</b> ' + this.descripcion + "</span>";
                OPENDATA.variables.html += "</li>";
                OPENDATA.variables.html += '</ul>';
            })

            OPENDATA.variables.html += '</div>';
            OPENDATA.variables.html += '<div class="card-action">';
            OPENDATA.variables.html += '<a href="' + this.basicData.web + '">' + OPENDATA.variables.msn[OPENDATA.variables.idioma].web + '</a>';
            OPENDATA.variables.html += '<span class="chip blue white-text right customChip">' + this.basicData.regActual + " de " + this.basicData.regTotal + '</span>';
            OPENDATA.variables.html += '</div>';
            OPENDATA.variables.html += '</div>';
            OPENDATA.variables.html += '</div>';
        })

        document.getElementById("container").innerHTML = OPENDATA.variables.html;
        $('.materialboxed').materialbox();
        $(".btn-floating.closeMap").on("click", function() {
            $(".panelMapa").hide(300);
        })
        $(".GoogleMaps").on("click", function() {
            var obj = $(this).parent().parent().parent();
            $(".panelMapa").show(300, function() {
                OPENDATA.metodos.initMap(obj);
            });

        });
        $("#origenRuta").attr("placeholder", "");
        $(".calcularRuta").on("click", function() {
            $('#modalCalcularRuta').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%', // Ending top style attribute
                ready: function(modal, trigger) {
                    console.log(modal, trigger);
                },
                complete: function() {}
            });
            $('#modalCalcularRuta').modal('open');
            $("#btnActionCalcularRuta").on("click", function() {
                if ($("#travelMode").val() > 0 && $("#travelMode").val() != null && $("#origenRuta").val().length > 0) {
                    OPENDATA.metodos._calcularRuta(OPENDATA.variables.map);
                    $('#modalCalcularRuta').modal('close');
                } else {
                    if ($("#travelMode").val() == 0 || $("#travelMode").val() == null) {
                        $("#modalCalcularRuta > .modal-footer > div:nth-child(1)").addClass("red-text")
                    } else {
                        $("#modalCalcularRuta > .modal-footer > div:nth-child(1)").removeClass("red-text")
                    }
                    if ($("#origenRuta").val().length == 0) {
                        $("#modalCalcularRuta > .modal-footer > div:nth-child(2) > label").addClass("red-text")
                    } else {
                        $("#modalCalcularRuta > .modal-footer > div:nth-child(2) > label").removeClass("red-text")
                    }
                }
            });
            $('select').material_select();
            $("#travelMode").on("change", function() {
                if ($(this).val() > 0) {
                    if ($(this).val() == 1) { OPENDATA.variables.travelMode = "WALKING"; }
                    if ($(this).val() == 2) { OPENDATA.variables.travelMode = "BICYCLING"; }
                    if ($(this).val() == 3) { OPENDATA.variables.travelMode = "DRIVING"; }
                }
            })
            OPENDATA.metodos.initAutocomplete();
        });
    },
    initAutocomplete: function() {
        var input = document.getElementById('origenRuta');
        var searchBox = new google.maps.places.SearchBox(input);
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }

            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }


                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            //OPENDATA.variables.map.fitBounds(bounds);
        });
    },

    setAttributes: function(obj) {
        var attributes = obj["@attributes"];

        if (typeof attributes.fechaActualizacion !== undefined) { estructura.serviceAttributtes.fechaActualizacion = attributes.fechaActualizacion; } else { estructura.serviceAttributtes.fechaActualizacion = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof attributes.id !== undefined) { estructura.serviceAttributtes.id = attributes.id; } else { estructura.serviceAttributtes.id = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }
    },
    setBasicData: function(obj, index, total) {
        var basicData = obj["basicData"];

        if (typeof basicData.body !== undefined) { estructura.basicData.body = basicData.body; } else { estructura.basicData.body = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof basicData.email !== undefined) { estructura.basicData.email = basicData.email; } else { estructura.basicData.email = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof basicData.fax !== undefined && typeof basicData.fax !== "object") { estructura.basicData.fax = basicData.fax; } else { estructura.basicData.fax = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof basicData.language !== undefined) { estructura.basicData.language = OPENDATA.variables.msn[OPENDATA.variables.idioma].idioma; } else { estructura.basicData.language = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof basicData.name !== undefined) { estructura.basicData.name = basicData.name; } else { estructura.basicData.name = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof basicData.phone !== undefined) { estructura.basicData.phone = basicData.phone; } else { estructura.basicData.phone = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof basicData.title !== undefined) { estructura.basicData.title = basicData.title; } else { estructura.basicData.title = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof basicData.web !== undefined) { estructura.basicData.web = basicData.web; } else { estructura.basicData.web = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        estructura.basicData.regActual = index;
        estructura.basicData.regTotal = total;
    },
    setExtraData: function(obj) {
        var extraData = obj["extradata"];

        if (typeof extraData.item[0] !== undefined) { estructura.extraData.idTipo = extraData.item[0]; } else { estructura.extraData.idTipo = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof extraData.item[1] !== undefined) { estructura.extraData.Tipo = extraData.item[1]; } else { estructura.extraData.Tipo = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof extraData.item[2]["@attributes"].name !== undefined) { estructura.extraData.serviciosDePago = extraData.item[2]["@attributes"].name; } else { estructura.extraData.serviciosDePago = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof extraData.item[3]["@attributes"].name !== undefined) { estructura.extraData.horario = extraData.item[3]["@attributes"].name; } else { estructura.extraData.horario = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof extraData.fechas !== undefined) { estructura.extraData.fechas = extraData.fechas; } else { estructura.extraData.fechas = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (Object.keys(extraData.categorias).length && typeof extraData.categorias.categoria.item[0] !== undefined) { estructura.extraData.idCategoria = extraData.categorias.categoria.item[0]; } else { estructura.extraData.idCategoria = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (Object.keys(extraData.categorias).length && typeof extraData.categorias.categoria.item[1] !== undefined) { estructura.extraData.Categoria = extraData.categorias.categoria.item[1]; } else { estructura.extraData.Categoria = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (Object.keys(extraData.categorias).length && extraData.categorias.categoria.subcategorias !== undefined) {
            if (typeof extraData.categorias.categoria.subcategorias.subcategoria.item[0] !== undefined) { estructura.extraData.idSubcategoria = extraData.categorias.categoria.subcategorias.subcategoria.item[0]; } else { estructura.extraData.idSubcategoria = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

            if (typeof extraData.categorias.categoria.subcategorias.subcategoria.item[1] !== undefined) { estructura.extraData.subcategoria = extraData.categorias.categoria.subcategorias.subcategoria.item[1]; } else { estructura.extraData.subcategoria = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }
        } else {
            estructura.extraData.idSubcategoria = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible;
            estructura.extraData.subcategoria = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible;
        }
    },
    setGeoData: function(obj) {
        var geoData = obj["geoData"];

        if (typeof geoData.address !== undefined) { estructura.geoData.address = geoData.address; } else { estructura.geoData.address = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof geoData.zipcode !== undefined) { estructura.geoData.zipcode = geoData.zipcode; } else { estructura.geoData.zipcode = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof geoData.locality !== undefined && geoData.locality.length !== undefined) { estructura.geoData.locality = geoData.locality; } else { estructura.geoData.locality = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof geoData.country !== undefined) { estructura.geoData.country = geoData.country; } else { estructura.geoData.country = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof geoData.latitude !== undefined) { estructura.geoData.latitude = geoData.latitude; } else { estructura.geoData.latitude = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof geoData.longitude !== undefined) { estructura.geoData.longitude = geoData.longitude; } else { estructura.geoData.longitude = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

        if (typeof geoData.subAdministrativeArea !== undefined) { estructura.geoData.subAdministrativeArea = geoData.subAdministrativeArea; } else { estructura.geoData.subAdministrativeArea = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }
    },
    setMultimedia: function(obj) {
        var multimedia = obj["multimedia"];
        $(multimedia).each(function(i, v) {
            var media = v.media;
            if (media !== undefined) {
                if (media.length === undefined) {
                    var objMediaTemp = new Object();

                    if (media.descripcion !== undefined) { objMediaTemp.descripcion = media.descripcion; } else { objMediaTemp.descripcion = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

                    if (media.url !== undefined) { objMediaTemp.url = media.url; } else { objMediaTemp.url = OPENDATA.variables.url.notPicture; }

                    estructura.multimedia.push(objMediaTemp);
                } else {
                    for (datos in media) {
                        var datosMedia = media[datos];
                        var objMediaTemp = new Object();

                        /*if (datosMedia["@attributes"].type !== undefined) { objMediaTemp.type = datosMedia["@attributes"].type; }
                        else { objMediaTemp.type = OPENDATA.variables.msn.error.errorTypeMime; }*/

                        if (datosMedia.descripcion !== undefined) { objMediaTemp.descripcion = datosMedia.descripcion; } else { objMediaTemp.descripcion = OPENDATA.variables.msn[OPENDATA.variables.idioma].error.noDisponible; }

                        if (datosMedia.url !== undefined) { objMediaTemp.url = datosMedia.url; } else { objMediaTemp.url = OPENDATA.variables.url.notPicture; }

                        estructura.multimedia.push(objMediaTemp);
                    }
                }
            }

        });
    },
    createArrayData: function(data) {
        var _regTotal = data.length;
        $(data).each(function(i, v) {
            estructura = new Object();
            OPENDATA.metodos.setEstructura();
            OPENDATA.metodos.setAttributes(this);
            OPENDATA.metodos.setBasicData(this, (i + 1), _regTotal);
            OPENDATA.metodos.setGeoData(this);
            OPENDATA.metodos.setMultimedia(this);
            OPENDATA.metodos.setExtraData(this);
            OPENDATA.variables.arrayEstructura.push(estructura);
        });
        OPENDATA.metodos.createCard("container");
    },
    setEstructura: function() {
        estructura.serviceAttributtes = new Object();
        estructura.serviceAttributtes.fechaActualizacion = "";
        estructura.serviceAttributtes.id = "";
        estructura.basicData = new Object();
        estructura.basicData.language = "";
        estructura.basicData.name = "";
        estructura.basicData.email = "";
        estructura.basicData.phone = "";
        estructura.basicData.fax = "";
        estructura.basicData.title = "";
        estructura.basicData.body = "";
        estructura.basicData.web = "";
        estructura.basicData.regActual = "";
        estructura.basicData.regTotal = "";
        estructura.geoData = new Object();
        estructura.geoData.address = "";
        estructura.geoData.zipcode = "";
        estructura.geoData.locality = "";
        estructura.geoData.country = "";
        estructura.geoData.latitude = "";
        estructura.geoData.longitude = "";
        estructura.geoData.subAdministrativeArea = "";
        estructura.multimedia = [];
        estructura.extraData = new Object();
        estructura.extraData.idTipo = "";
        estructura.extraData.Tipo = "";
        estructura.extraData.serviciosDePago = "";
        estructura.extraData.horario = "";
        estructura.extraData.idCategoria = "";
        estructura.extraData.Categoria = "";
        estructura.extraData.idSubcategoria = "";
        estructura.extraData.subcategoria = "";
        estructura.extraData.fechas = "";

        //extradata: {}
    },
    viewData: function(data) {
        var service = data.service;
        OPENDATA.metodos.initData();
        OPENDATA.metodos.createArrayData(service);
    },
    initData: function() {
        OPENDATA.variables.html.container = "";
        OPENDATA.variables.arrayEstructura = [];
    },
    showAjaxLoading: function(estado) {
        if (estado) { $("#container").html("<div class='progress' id='ajaxLoading'><div class='indeterminate'></div></div>"); } else { $("#ajaxLoading").remove(); }
    },
    initMap: function(mapa) {
        var idMapa = document.getElementById("mapaUbicacion");
        var contentString = '<div id="contentInfoMarker"></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var ubicacion = { lat: parseFloat($(mapa).attr("data-latitude")), lng: parseFloat($(mapa).attr("data-longitude")) };
        OPENDATA.variables.map = new google.maps.Map(idMapa, {
            zoom: 17,
            center: ubicacion,
            mapTypeId: 'satellite'
        });
        var marker = new google.maps.Marker({
            position: ubicacion,
            map: OPENDATA.variables.map,
            title: ""
        });
        marker.addListener('click', function() {
            infowindow.open(OPENDATA.variables.map, marker);
        });
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        var lat = parseFloat($(mapa).attr("data-latitude"));
        var lng = parseFloat($(mapa).attr("data-longitude"));
        OPENDATA.metodos._geocodeLatLng(geocoder, OPENDATA.variables.map, infowindow, lat, lng);

    },
    _calcularRuta: function(map) {
        var markerArray = [];
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({ map: map });
        var stepDisplay = new google.maps.InfoWindow;

        OPENDATA.metodos._calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);

        var onChangeHandler = function() {
            OPENDATA.metodos._calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);
        };
        document.getElementById('origenRuta').addEventListener('change', onChangeHandler);
        document.getElementById('destinoRuta').addEventListener('change', onChangeHandler);
    },
    _calculateAndDisplayRoute: function(directionsDisplay, directionsService, markerArray, stepDisplay, map) {
        for (var i = 0; i < markerArray.length; i++) {
            markerArray[i].setMap(null);
        }
        directionsService.route({
                origin: document.getElementById('origenRuta').value,
                destination: document.getElementById("destinoRuta").value,
                travelMode: OPENDATA.variables.travelMode
            },
            function(response, status) {
                if (status === 'OK') {
                    document.getElementById('modalCalcularRuta').innerHTML = '<b>' + response.routes[0].warnings + '</b>';
                    directionsDisplay.setDirections(response);
                    OPENDATA.metodos._showSteps(response, markerArray, stepDisplay, map);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
    },
    _showSteps: function(directionResult, markerArray, stepDisplay, map) {
        var myRoute = directionResult.routes[0].legs[0];
        for (var i = 0; i < myRoute.steps.length; i++) {
            var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
            marker.setMap(map);
            marker.setPosition(myRoute.steps[i].start_location);
            OPENDATA.metodos._attachInstructionText(stepDisplay, marker, myRoute.steps[i].instructions, map);
        }
        $("#modalCalcularRuta").remove();
        $("#container").append(OPENDATA.metodos.panelCalcularRuta());
        $("#origenRuta").attr("placeholder", "");
    },
    _attachInstructionText(stepDisplay, marker, text, map) {
        google.maps.event.addListener(marker, 'click', function() {
            stepDisplay.setContent(text);
            stepDisplay.open(map, marker);
        });
    },
    _geocodeLatLng: function(geocoder, map, infowindow, lat, lng) {

        var latlng = { lat: lat, lng: lng };
        geocoder.geocode({ 'location': latlng }, function(results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    map.setZoom(16);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                    infowindow.setContent(results[1].formatted_address);
                    OPENDATA.variables.destino = results[1].formatted_address;
                    $("#destinoRuta").val(OPENDATA.variables.destino);
                    infowindow.open(map, marker);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
}

$(document).ready(function() {
    $('.button-collapse').sideNav({ menuWidth: 300, edge: 'left', closeOnClick: true, draggable: true });
    $.ajax({
        url: "idioma.php",
        type: "post",
        dataType: "html",
        cache: "false",
        success: function(data) {
            var obj = JSON.parse(data);
            if (obj.code === undefined) {
                OPENDATA.variables.idioma = obj.language;
                $.ajax({
                    data: { language: OPENDATA.variables.idioma },
                    url: "downloadFile.php",
                    type: "post",
                    dataType: "json",
                    cache: "false",
                    success: function(data) {
                        if (data.code === undefined) {
                            OPENDATA.metodos.viewData(data);
                            OPENDATA.metodos.searchCard();
                        } else {
                            $("body").html(JSON.stringify(data));
                        }
                    },
                    beforeSend: function() {
                        OPENDATA.metodos.showAjaxLoading(true);
                    },
                    complete: function() {
                        OPENDATA.metodos.showAjaxLoading(false);
                    }
                });
            } else {
                $("body").html(JSON.stringify(data));
            }
        }
    });
})