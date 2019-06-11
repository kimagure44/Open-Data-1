import variables from './variables.js';
let estructura;
const methods = {
  searchCard: function() {
    $(".inputSearch").on("keyup", function() {
      let buscar = $(this).val();
      if (buscar.length > 0 || buscar != "") {
        $("div.col").hide();
        $("div.col[data-name*='" + buscar + "' i]").show();
      } else {
        $("div.col").show();
      }
    });
  },
  setPanelGoogleMaps: function() {
    variables.html += `
      <div class="row panelMapa">
        <div class="col s12">
          <div class="card-panel teal">
            <div class="fixed-action-btn horizontal click-to-toggle">
              <a class="btn-floating btn-large halfway-fab waves-effect waves-light blue ">
                <i class="material-icons right">more_vert</i>
              </a>
              <ul>
                <li>
                  <a class="btn-floating green darken-1 calcularRuta">
                    <i class="material-icons">navigation</i>
                  </a>
                </li>
                <li>
                  <a class="btn-floating red closeMap">
                    <i class="material-icons">close</i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="claseMapa" id="mapaUbicacion"></div>
          </div>
        </div>
      </div>`;
  },
  setPanelCalcularRuta: function() {
    variables.html +=`
      <div id="modalCalcularRuta" class="modal">
        <div class="modal-content">
          <h4>${variables.msn.es.calcularRuta}</h4>
        </div>
        <div class="modal-footer">
          <div class="input-field col s12">
            <select id="travelMode">
              <option value="" disabled selected>${variables.msn.es.eligeOpcion}</option>
              <option value="1" data-icon="hiker.png" class="left circle">${variables.msn.es.andando}</option>
              <option value="2" data-icon="bicycle.png" class="left circle">${variables.msn.es.bici}</option>
              <option value="3" data-icon="car.png" class="left circle">${variables.msn.es.coche}</option>
            </select>
            <label>${variables.msn.es.seleccionTransporte}</label>
          </div>
          <div class="input-field col s12">
            <input type="text" id="origenRuta">
            <label for="origenRuta" class="">${variables.msn.es.origen}</label>
          </div>
          <div class="input-field col s12">
            <input type="text" id="destinoRuta" disabled="disabled" value="">
          </div>
          <a class="waves-effect waves-light btn green" id="btnActionCalcularRuta">
            <i class="material-icons left">navigation</i>${variables.msn.es.calcularRuta}
          </a>
        </div>
      </div>`;
  },
  panelCalcularRuta: function() {
    const html = `
      <div id="modalCalcularRuta" class="modal">
        <div class="modal-content">
          <h4>${variables.msn.es.calcularRuta}</h4>
        </div>
        <div class="modal-footer">
          <div class="input-field col s12">
            <select id="travelMode">
              <option value="" disabled selected>${variables.msn.es.eligeOpcion}</option>
              <option value="1" data-icon="hiker.png" class="left circle">${variables.msn.es.andando}</option>
              <option value="2" data-icon="bicycle.png" class="left circle">${variables.msn.es.bici}</option>
              <option value="3" data-icon="car.png" class="left circle">${variables.msn.es.coche}</option>
            </select>
            <label>${variables.msn.es.seleccionTransporte}</label>
          </div>
          <div class="input-field col s12">
            <input type="text" id="origenRuta">
            <label for="origenRuta" class="">${variables.msn.es.origen}</label>
          </div>
          <div class="input-field col s12">
            <input type="text" id="destinoRuta" disabled="disabled" value="${variables.destino}">
          </div>
          <a class="waves-effect waves-light btn green" id="btnActionCalcularRuta">
            <i class="material-icons left">navigation</i>${variables.msn.es.calcularRuta}
          </a>
        </div>
      </div>`;
    return html;
  },
  createCard: function(destino) {
    methods.setPanelGoogleMaps();
    methods.setPanelCalcularRuta();
    $(variables.arrayEstructura).each(function() {
      const estrellas = parseInt(this.extraData.subcategoria) || 0;
      variables.html += `
        <div class="col s12 m6 l4" 
          data-name="${this.basicData.name}" 
          data-id="${this.serviceAttributtes.id}" 
          data-actualizacion="${this.serviceAttributtes.fechaActualizacion}" 
          data-latitude="${this.geoData.latitude}" 
          data-longitude="${this.geoData.longitude}" 
          data-direccion="${this.geoData.address}" 
          data-idtipo="${this.extraData.idTipo}" 
          data-tipo="${this.extraData.Tipo}" 
          data-serviciopago="${this.extraData.serviciosDePago}" 
          data-horario="${this.extraData.horario}" 
          data-idsubcategoria="${this.extraData.idSubcategoria}" 
          data-subcategoria="${this.extraData.subcategoria}" 
          data-name="${this.basicData.name}" 
          data-title="${this.basicData.title}">
          <div class="card z-depth-3">
            <div class="card-image">
              <img src="${this.multimedia.length > 0 ? this.multimedia[0].url : variables.url.notPicture}">
            </div>
            <div class="card-content">
              <a class="btn-floating halfway-fab waves-effect waves-light blue activator">
                <i class="material-icons">more_vert</i>
              </a>
              <span class="card-title activator grey-text text-darken-4">${this.basicData.name}</span>
        `;
        for (let cont = 0; cont < estrellas; cont++) {
          variables.html += '<i class="Small material-icons amber-text lighten-1">grade</i>';
        }
        variables.html += `
          </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                ${this.basicData.name}
                <a class="btn-floating halfway-fab waves-effect waves-light blue ">
                  <i class="material-icons right">close</i>
                </a>
              </span>
              ${this.basicData.body}<br>
              <b>${variables.msn[variables.idioma].contacto}</b>
              <hr>
              <b>${variables.msn[variables.idioma].email}:</b>${this.basicData.email}<br>
              <b>${variables.msn[variables.idioma].fax}:</b>${this.basicData.fax}<br>
              <b>${variables.msn[variables.idioma].idioma}:</b>${this.basicData.language}<br>
              <b>${variables.msn[variables.idioma].telefono}:</b>${this.basicData.phone}<br><br>
              <b>${variables.msn[variables.idioma].localizacion}</b>
              <hr>
              <b>${variables.msn[variables.idioma].direccion}:</b>${this.geoData.address}<br>
              <b>${variables.msn[variables.idioma].cp}:</b>${this.geoData.zipcode}<br>
              <b>${variables.msn[variables.idioma].localidad}:</b>${this.geoData.locality}<br>
              <b>${variables.msn[variables.idioma].provincia}:</b>${this.geoData.subAdministrativeArea}<br>
              <b>${variables.msn[variables.idioma].pais}:</b>${this.geoData.country}<br>
              <b>${variables.msn[variables.idioma].ubicacion}:</b>
              <b><span class='GoogleMaps blue-text'>${variables.msn[variables.idioma].verMapa}</span></b><br><br>
              <b>${variables.msn[variables.idioma].fotos}</b>
              <hr>`;
              $(this.multimedia).each(function() {
                variables.html += `
                  <ul>
                    <li>
                      <img src="${this.url}" class="materialboxed">
                      <span>
                        <b>${variables.msn[variables.idioma].descripcion}:</b>${this.descripcion}
                      </span>
                    </li>
                </ul>`;
              });
      variables.html += `
              </div>
              <div class="card-action">
                <a href="${this.basicData.web}" target="_blank">${variables.msn[variables.idioma].web}</a>
                <span class="chip blue white-text right customChip">
                  ${this.basicData.regActual} de ${this.basicData.regTotal}
                </span>
              </div>
            </div>
          </div>
        `;
      });
      document.getElementById("container").innerHTML = variables.html;
      $('.materialboxed').materialbox();
      $(".btn-floating.closeMap").on("click", function() {
        $(".panelMapa").hide(300);
      });
      $(".GoogleMaps").on("click", function() {
        const obj = $(this).parent().parent().parent().parent();
        $(".panelMapa").show(300, function() {
          methods.initMap(obj);
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
            methods._calcularRuta(variables.map);
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
            if ($(this).val() == 1) { variables.travelMode = "WALKING"; }
            if ($(this).val() == 2) { variables.travelMode = "BICYCLING"; }
            if ($(this).val() == 3) { variables.travelMode = "DRIVING"; }
          }
        })
        methods.initAutocomplete();
      });
  },
  initAutocomplete: function() {
    const input = document.getElementById('origenRuta');
    let searchBox = new google.maps.places.SearchBox(input);
    searchBox.addListener('places_changed', function() {
      let places = searchBox.getPlaces();
      if (places.length == 0) {
        return;
      }
      let bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        place.geometry.viewport ? bounds.union(place.geometry.viewport) : bounds.extend(place.geometry.location);
      });
    });
  },
  setAttributes: function(obj) {
    const attributes = obj["@attributes"];
    estructura.serviceAttributtes.fechaActualizacion = typeof attributes.fechaActualizacion !== undefined ? attributes.fechaActualizacion : variables.msn[variables.idioma].error.noDisponible;
    estructura.serviceAttributtes.id = typeof attributes.id !== undefined ? attributes.id : variables.msn[variables.idioma].error.noDisponible; 
  },
  setBasicData: function(obj, index, total) {
    const basicData = obj["basicData"];
    estructura.basicData.body = typeof basicData.body !== undefined ? basicData.body : variables.msn[variables.idioma].error.noDisponible;
    estructura.basicData.email = typeof basicData.email !== undefined ? basicData.email : variables.msn[variables.idioma].error.noDisponible; 
    estructura.basicData.fax = typeof basicData.fax !== undefined && typeof basicData.fax !== "object" ? basicData.fax : variables.msn[variables.idioma].error.noDisponible;
    estructura.basicData.language = typeof basicData.language !== undefined ? variables.msn[variables.idioma].idioma : variables.msn[variables.idioma].error.noDisponible;
    estructura.basicData.name = typeof basicData.name !== undefined ? basicData.name : variables.msn[variables.idioma].error.noDisponible;
    estructura.basicData.phone = typeof basicData.phone !== undefined ? basicData.phone : variables.msn[variables.idioma].error.noDisponible;
    estructura.basicData.title = typeof basicData.title !== undefined ? basicData.title : variables.msn[variables.idioma].error.noDisponible;
    estructura.basicData.web = typeof basicData.web !== undefined ? basicData.web : variables.msn[variables.idioma].error.noDisponible;
    estructura.basicData.regActual = index;
    estructura.basicData.regTotal = total;
  },
  setExtraData: function(obj) {
    const extraData = obj["extradata"];
    estructura.extraData.idTipo = typeof extraData.item[0] !== undefined ? extraData.item[0] : variables.msn[variables.idioma].error.noDisponible;
    estructura.extraData.Tipo = typeof extraData.item[1] !== undefined ? extraData.item[1] : variables.msn[variables.idioma].error.noDisponible;
    estructura.extraData.serviciosDePago = typeof extraData.item[2]["@attributes"].name !== undefined ? extraData.item[2]["@attributes"].name : variables.msn[variables.idioma].error.noDisponible;
    estructura.extraData.horario = typeof extraData.item[3]["@attributes"].name !== undefined ? extraData.item[3]["@attributes"].name : variables.msn[variables.idioma].error.noDisponible;
    estructura.extraData.fechas = typeof extraData.fechas !== undefined ? extraData.fechas : variables.msn[variables.idioma].error.noDisponible;
    
    if (Object.keys(extraData.categorias).length > 0) {
      if (typeof extraData.categorias.categoria.item === 'undefined') {
        estructura.extraData.idCategoria = Object.keys(extraData.categorias).length && typeof extraData.categorias.categoria[0].item !== undefined ? extraData.categorias.categoria[0].item : variables.msn[variables.idioma].error.noDisponible;
        estructura.extraData.Categoria = Object.keys(extraData.categorias).length && typeof extraData.categorias.categoria[1].item !== undefined ? extraData.categorias.categoria[1].item : variables.msn[variables.idioma].error.noDisponible;        
      } else {
        estructura.extraData.idCategoria = Object.keys(extraData.categorias).length && typeof extraData.categorias.categoria.item[0] !== undefined ? extraData.categorias.categoria.item[0] : variables.msn[variables.idioma].error.noDisponible;
        estructura.extraData.Categoria = Object.keys(extraData.categorias).length && typeof extraData.categorias.categoria.item[1] !== undefined ? extraData.categorias.categoria.item[1] : variables.msn[variables.idioma].error.noDisponible;        
      }
      if (Object.keys(extraData.categorias).length && extraData.categorias.categoria.subcategorias !== undefined) {
        estructura.extraData.idSubcategoria = typeof extraData.categorias.categoria.subcategorias.subcategoria.item[0] !== undefined ? extraData.categorias.categoria.subcategorias.subcategoria.item[0] : variables.msn[variables.idioma].error.noDisponible;
        estructura.extraData.subcategoria = typeof extraData.categorias.categoria.subcategorias.subcategoria.item[1] !== undefined ? extraData.categorias.categoria.subcategorias.subcategoria.item[1] : variables.msn[variables.idioma].error.noDisponible;
      } else {
        estructura.extraData.idSubcategoria = variables.msn[variables.idioma].error.noDisponible;
        estructura.extraData.subcategoria = variables.msn[variables.idioma].error.noDisponible;
      }
    }
  },
  setGeoData: function(obj) {
    const geoData = obj["geoData"];
    estructura.geoData.address = typeof geoData.address !== undefined ? geoData.address : variables.msn[variables.idioma].error.noDisponible;
    estructura.geoData.zipcode = typeof geoData.zipcode !== undefined ? geoData.zipcode : variables.msn[variables.idioma].error.noDisponible;
    estructura.geoData.locality = typeof geoData.locality !== undefined && geoData.locality.length !== undefined ? geoData.locality : variables.msn[variables.idioma].error.noDisponible;
    estructura.geoData.country = typeof geoData.country !== undefined ? geoData.country : variables.msn[variables.idioma].error.noDisponible;
    estructura.geoData.latitude = typeof geoData.latitude !== undefined ? geoData.latitude : variables.msn[variables.idioma].error.noDisponible;
    estructura.geoData.longitude = typeof geoData.longitude !== undefined ? geoData.longitude : variables.msn[variables.idioma].error.noDisponible;
    estructura.geoData.subAdministrativeArea = typeof geoData.subAdministrativeArea !== undefined ? geoData.subAdministrativeArea : variables.msn[variables.idioma].error.noDisponible;
  },
  setMultimedia: function(obj) {
    const multimedia = obj["multimedia"];
    $(multimedia).each(function(i, v) {
      const media = v.media;
      if (media !== undefined) {
        if (media.length === undefined) {
          let objMediaTemp = new Object();
          objMediaTemp.descripcion = media.descripcion !== undefined ? media.descripcion : variables.msn[variables.idioma].error.noDisponible;
          objMediaTemp.url = media.url !== undefined ? media.url :variables.url.notPicture;
          estructura.multimedia.push(objMediaTemp);
        } else {
          for (let datos in media) {
            const datosMedia = media[datos];
            let objMediaTemp = new Object();
            objMediaTemp.descripcion = datosMedia.descripcion !== undefined ? datosMedia.descripcion : variables.msn[variables.idioma].error.noDisponible;
            objMediaTemp.url = datosMedia.url !== undefined ? datosMedia.url :variables.url.notPicture;
            estructura.multimedia.push(objMediaTemp);
          }
        }
      }
    });
  },
  createArrayData: function(data) {
    const _regTotal = data.length;
    $(data).each(function(i, v) {
      estructura = new Object();
      methods.setEstructura();
      methods.setAttributes(this);
      methods.setBasicData(this, (i + 1), _regTotal);
      methods.setGeoData(this);
      methods.setMultimedia(this);
      methods.setExtraData(this);
      variables.arrayEstructura.push(estructura);
    });
    methods.createCard("container");
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
  },
  viewData: function(data) {
    const service = data.service;
    methods.initData();
    methods.createArrayData(service);
  },
  initData: function() {
    variables.html = "";
    variables.arrayEstructura = [];
  },
  showAjaxLoading: function(estado) {
    estado ? $("#container").html("<div class='progress' id='ajaxLoading'><div class='indeterminate'></div></div>") : $("#ajaxLoading").remove();
  },
  initMap: function(mapa) {
    const idMapa = document.getElementById("mapaUbicacion");
    const contentString = '<div id="contentInfoMarker"></div>';
    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    const ubicacion = { 
      lat: parseFloat($(mapa).attr("data-latitude")), 
      lng: parseFloat($(mapa).attr("data-longitude")) 
    };
    variables.map = new google.maps.Map(idMapa, {
      zoom: 17,
      center: ubicacion,
      mapTypeId: 'satellite'
    });
    var marker = new google.maps.Marker({
      position: ubicacion,
      map: variables.map,
      title: ""
    });
    marker.addListener('click', function() {
      infowindow.open(variables.map, marker);
    });
    const geocoder = new google.maps.Geocoder;
    const lat = parseFloat($(mapa).attr("data-latitude"));
    const lng = parseFloat($(mapa).attr("data-longitude"));
    methods._geocodeLatLng(geocoder, variables.map, infowindow, lat, lng);
  },
  _calcularRuta: function(map) {
    var markerArray = [];
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({ map: map });
    var stepDisplay = new google.maps.InfoWindow;
    methods._calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);
    const onChangeHandler = function() {
      methods._calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);
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
      travelMode: variables.travelMode
      }, function(response, status) {
        if (status === 'OK') {
          document.getElementById('modalCalcularRuta').innerHTML = `<b>${response.routes[0].warnings}</b>`;
          directionsDisplay.setDirections(response);
          methods._showSteps(response, markerArray, stepDisplay, map);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  },
  _showSteps: function(directionResult, markerArray, stepDisplay, map) {
    const myRoute = directionResult.routes[0].legs[0];
    for (let i = 0; i < myRoute.steps.length; i++) {
      let marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
      marker.setMap(map);
      marker.setPosition(myRoute.steps[i].start_location);
      methods._attachInstructionText(stepDisplay, marker, myRoute.steps[i].instructions, map);
    }
    $("#modalCalcularRuta").remove();
    $("#container").append(methods.panelCalcularRuta());
    $("#origenRuta").attr("placeholder", "");
  },
  _attachInstructionText: function(stepDisplay, marker, text, map) {
    google.maps.event.addListener(marker, 'click', function() {
      stepDisplay.setContent(text);
      stepDisplay.open(map, marker);
    });
  },
  _geocodeLatLng: function(geocoder, map, infowindow, lat, lng) {
    const latlng = { lat: lat, lng: lng };
    geocoder.geocode({ 'location': latlng }, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
          map.setZoom(16);
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          });
          infowindow.setContent(results[1].formatted_address);
          variables.destino = results[1].formatted_address;
          $("#destinoRuta").val(variables.destino);
          infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
};
export default methods;