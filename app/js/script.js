if ($('#masthead').length) {
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("masthead").style.top = "0";
  } else {
    document.getElementById("masthead").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}
}



if ($(window).width() < 960) {
  $('body').bind('touchmove',function(e){
    e.preventDefault();
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    //CODE GOES HERE
    console.log(touch.pageY+' '+touch.pageX);
  });
    
}

var currentMark;
lastWindow=null;

const locations = [
  [
    "Dein Restaurant",
    51.948744478483555,
    7.157971836523928,
    "./images/icon-marker.png",
    "./images/burger.png",
  ],
  [
    "Modehaus Bruns",
    51.946609097080426,
    7.178758154024501,
    "./images/icon-marker.png",
    "./images/Fotolia.png",
  ],
  [
    "Barberladen",
    51.950701822121246,
    7.169303266550282,
    "./images/icon-marker.png",
    "./images/Fotolia_2.png",
  ],
  [
    "Arundel Thai Massage",
    51.93457270633895,
    7.16222225914868,
    "./images/icon-marker.png",
    "./images/Fotolia_1.png",
  ]

];


function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "transparent";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);


  // Set CSS for the control interior.
  const zoomplus = document.createElement("div");

  zoomplus.style.color = "rgb(25,25,25)";
  zoomplus.style.backgroundColor = "#fff";
  zoomplus.style.borderRadius = "50%";
  zoomplus.style.fontSize = "20px";
  zoomplus.style.width = "40px";
  zoomplus.style.height = "40px";
  zoomplus.style.display = "flex";
  zoomplus.style.justifyContent = "center";
  zoomplus.style.alignItems = "center";
  zoomplus.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  zoomplus.style.cursor = "pointer";
  zoomplus.style.margin = "20px";
  zoomplus.innerHTML = `<i class="fas fa-plus"></i>`;
  controlUI.appendChild(zoomplus);
  // Set CSS for the control interior.
  const zoomminus = document.createElement("div");

  zoomminus.style.color = "rgb(25,25,25)";
  zoomminus.style.backgroundColor = "#fff";
  zoomminus.style.borderRadius = "50%";
  zoomminus.style.fontSize = "20px";
  zoomminus.style.width = "40px";
  zoomminus.style.height = "40px";
  zoomminus.style.display = "flex";
  zoomminus.style.justifyContent = "center";
  zoomminus.style.alignItems = "center";
  zoomminus.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  zoomminus.style.cursor = "pointer";
  zoomminus.style.margin = "20px";
  zoomminus.innerHTML = `<i class="fas fa-minus"></i>`;
  controlUI.appendChild(zoomminus);


    zoomplus.addEventListener("click", () => {
    map.setZoom(map.getZoom() + 1);
  });
  zoomminus.addEventListener("click", () => {
    map.setZoom(map.getZoom() - 1);
  });
}

var markersarray = [];

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.9442511620035, lng: 7.1658388803001865},
    zoom: 12,
    mapId: '5f41d52c83213f7e',
    disableDefaultUI: true
  });

  const centerControlDiv2 = document.createElement("div");

  CenterControl(centerControlDiv2, map);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv2);

    // name
    // latitude, longitude
    // image url

    const markerIcon =
    "D:/2HATS/upskilling/zmyle%20development/images/icon-marker.png";
    const selectedmarkerIcon =
    "D:/2HATS/upskilling/zmyle%20development/images/icon-marker-active.png";


    const locations = [
      [
        "Dein Restaurant",
        51.948744478483555,
        7.157971836523928,
        "./images/icon-marker.png",
        "./images/burger.png",
      ],
      [
        "Modehaus Bruns",
        51.946609097080426,
        7.178758154024501,
        "./images/icon-marker.png",
        "./images/Fotolia.png",
      ],
      [
        "Barberladen",
        51.950701822121246,
        7.169303266550282,
        "./images/icon-marker.png",
        "./images/Fotolia_2.png",
      ],
      [
        "Arundel Thai Massage",
        51.93457270633895,
        7.16222225914868,
        "./images/icon-marker.png",
        "./images/Fotolia_1.png",
      ]

 ];

 for(let i = 0; i<locations.length; i++){

   const currMarker = locations[i];

   const contentString =
   '<div class="card ctype-map">' +
   '<div class="card-header">' +
     '<picture>' +
         '<source srcset="' + currMarker[4] + '">' +
         '<img src="' 
         + currMarker[4] + 
         '">' +
       '</picture>' +
       
   "</div>" +
   '<div class="card-body">' +
     '<div class="card-title">' +
     currMarker[0] +
     '</div> ' +
     '<div class="item-value-row">' +
        ' <div class="ivr-item">Akzeptanzstellen</div>' +
        ' <div class="ivr-value"><img src="./images/icons/utensils.svg"></div>' +
        "</div>" +
         "</div>" +
         "</div>" ;

   const beachMarker = new google.maps.Marker({
    position: { lat: currMarker[1], lng: currMarker[2] },
    map,
    icon: currMarker[3],
  });

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
 


  google.maps.event.addListener(beachMarker, 'click', (function(beachMarker, i) {
    return function() {

      for (var j = 0; j < markersarray.length; j++) {
        markersarray[j].setIcon(markerIcon);
        infowindow.close();
      }
      infowindow.open(map, beachMarker);
      beachMarker.setIcon(selectedmarkerIcon);
    };
  })(beachMarker, i));
  markersarray.push(beachMarker);

  // beachMarker.addListener("click", () => {
  //   infowindow.open({
  //     anchor: beachMarker,
  //     map,
  //     shouldFocus: false,
  //   });
  //   beachMarker.setIcon(selectedmarkerIcon);
  // });

 }

}

// final code - customized map with custom markers and infowindows.

function initcustomMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.9442511620035, lng: 7.1658388803001865},
    zoom: 12,
    mapId: '5f41d52c83213f7e',
    disableDefaultUI: true
  });


  const centerControlDiv2 = document.createElement("div");

  CenterControl(centerControlDiv2, map);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv2);

    const markerIcon =
    "D:/2HATS/upskilling/zmyle%20development/images/icon-marker.png";
    const selectedmarkerIcon =
    "D:/2HATS/upskilling/zmyle%20development/images/icon-marker-active.png";


    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
      var data = locations[i];
      var myLatlng = new google.maps.LatLng(data[1], data[2]);
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: data[0],
          icon:markerIcon
      });
      (function (marker, data) {
        google.maps.event.addListener(marker, "click", function (e) {
            //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
            infoWindow.setContent( '<div class="card ctype-map">' +
            '<div class="card-header">' +
              '<picture>' +
                  '<source srcset="' + data[4] + '">' +
                  '<img src="' 
                  + data[4] + 
                  '">' +
                '</picture>' +
                
            "</div>" +
            '<div class="card-body">' +
              '<div class="card-title">' +
              data[0] +
              '</div> ' +
              '<div class="item-value-row">' +
                 ' <div class="ivr-item">Akzeptanzstellen</div>' +
                 ' <div class="ivr-value"><img src="./images/icons/utensils.svg"></div>' +
                 "</div>" +
                  "</div>" +
                  "</div>");
            for (var j = 0; j < markersarray.length; j++) {
              markersarray[j].setIcon(markerIcon);
            }
            infoWindow.open(map, marker);
            marker.setIcon(selectedmarkerIcon);
            lastWindow=infoWindow;
            
        });
    })(marker, data);
    markersarray.push(marker);

    }

    google.maps.event.addListener(map, 'click', function(event) {
      if(lastWindow){
        lastWindow.close();
      }
    });

}




function initnewMap(){

  const mapcenter = { lat: 51.9442511620035, lng: 7.1658388803001865 };
  const map2Icon =
    "D:/2HATS/upskilling/zmyle%20development/images/icon-marker.png";
  
  map2 = new google.maps.Map(document.getElementById('mapnew'), {
    center: {lat: 51.9442511620035, lng: 7.1658388803001865},
    zoom: 12,
    center: mapcenter,
    mapId: 'a95bc43b319cb41f',
    disableDefaultUI: true,
  });

  const singleMarker = new google.maps.Marker({
    position: mapcenter,
    map: map2,
    icon:map2Icon,
  });

  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  const centerControlDiv = document.createElement("div");

  CenterControl(centerControlDiv, map2);
  map2.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);

}


// 51.9442511620035, 7.1658388803001865


$( ".map-switcher" ).click(function() {
  $( ".item-list-area" ).addClass('map-wrap-view');
  $( ".map-view" ).addClass('map-wrap-view');
  $( "#filter-popup-btn" ).addClass('active');
  $(this).fadeTo( 0,0);
});

$( ".map-close-btn" ).click(function() {
  $( ".item-list-area" ).removeClass('map-wrap-view');
  $( ".map-view" ).removeClass('map-wrap-view');
  $( "#filter-popup-btn" ).removeClass('active');
  $( ".map-switcher" ).fadeTo( 0,1);
});

$( ".site-header .head-wrapper .nav-area ul li").not( ".site-header .head-wrapper .nav-area ul li ul" ).click(function() {
  $( ".site-header .head-wrapper .nav-area ul li").not(this).children("ul").hide();
  $(this).children("ul").toggle();
});

$(document).on('click', function (event) {
  if (!$(event.target).closest('.site-header .head-wrapper .nav-area ul').length) {
    $( ".site-header .head-wrapper .nav-area ul li").children("ul").hide();
    console.log("click");
  }
});


