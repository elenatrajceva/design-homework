
    // initialize Leaflet
    var map = L.map('map').setView({lon: 21.4338, lat: 41.9987}, 15);

    // add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        //attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    // show the scale bar on the lower left corner
    L.control.scale().addTo(map);


/*getLocation();
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
}*/

function showLocation(name) {
    $.ajax({
        url: 'kafe.csv',
        dataType: 'text',
    }).done(find);
    function find(data){
        var allRows = data.split(/\r?\n|\r/);
        for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
            var rowCells = allRows[singleRow].split(',');
                console.log(name.innerHTML);
            if (rowCells[3] === name.innerHTML){
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
            table += '<tr>';
            table += '<td onclick="showLocation(this)">';
            table += rowCells[3] + '</td>';
            table += '<td>' + rowCells[4] + '<br>' + rowCells[5] + '<br>';
            table += '</td>';
            table += '</tr>';
        }
        table += '</tbody>';
        table += '</table>';
        $('body').append(table);
    }
