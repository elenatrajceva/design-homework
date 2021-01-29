// initialize Leaflet
var map = L.map('map').setView({lon: 21.4338, lat: 41.9987}, 15);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);


getLocation();
function getLocation() {
    //if user's location settings is disabled this wont show marker
    map.locate({
        setView: true,
        enableHighAccuracy: true
    })
        .on('locationfound', function (e) {
            var marker = new L.marker(e.latlng);
            marker.addTo(map);
        });
}

function loadLocations(where) {
    $.ajax({
        url: 'kafe.csv',
        dataType: 'text',
    }).done(
        (data) => {
            var allRows = data.split(/\r?\n|\r/);

            for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
                var rowCells = allRows[singleRow].split(',');
                if(where !== rowCells[4]) continue;
                console.log(rowCells);
                L.marker([rowCells[1], rowCells[2]]).addTo(map)
                    .bindPopup(`<p style="color:black;">${rowCells[3]}</p>`)
            }
        });
}

loadLocations(findGetParameter('where'));
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function myFunction() {
    var input, filter, ol, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ol = document.getElementById("list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function showLocation(name){
    $.ajax({
        url: 'kafe.csv',
        dataType: 'text',
    }).done(find);
    function find(data){
        var allRows = data.split(/\r?\n|\r/);
        for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
            var rowCells = allRows[singleRow].split(',');
            console.log(name.innerText);
            if (rowCells[3] === name.innerText){
                L.marker({lon: parseFloat(rowCells[2]), lat: parseFloat(rowCells[1])}).addTo(map);
            }
        }
    }
}

parseData();
function parseData() {
    $.ajax({
        url: 'kafe.csv',
        dataType: 'text',
    }).done(successFunction);
}
function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
        var rowCells = allRows[singleRow].split(',');
        if(findGetParameter('where') !== rowCells[4]) continue;
        table += '<tr>';
        table += '<td onclick="showLocation(this)">';
        table += rowCells[3] + '</td>';
        table += '<td>' + rowCells[4] + '<br>' + rowCells[5] + '<br>';
        table += '</td>';
        table += '</tr>';
    }
    table += '</tbody>';
    table += '</table>';

    document.getElementById("list").innerHTML=table;
}
