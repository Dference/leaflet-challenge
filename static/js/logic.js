// Creating the map object
let myMap = L.map("map", {
    center: [33.1969986, -116.3895035],
    zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Marker based on earthquake magnitude
function getRadius(magnitude) {
    return Math.max(4, Math.pow(2, magnitude) / 2);
}

// Marker based on earthquake depth
function getColor(depth) {
    let colors = ['#00ff00', '#ccff00', '#ffff00', '#ffd700', '#ffa500', '#ff0000'];
    if (depth < 10) return colors[0];
    else if (depth < 30) return colors[1];
    else if (depth < 50) return colors[2];
    else if (depth < 70) return colors[3];
    else if (depth < 90) return colors[4];
    else return colors[5];
}

// Assemble the API query URL
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Get the data with d3
d3.json(url).then(function(response) {
    // Loop through the data
    response.features.forEach(function(feature) {
        // Set coordinates and properties
        let coordinates = feature.geometry.coordinates;
        let properties = feature.properties;

        // Check for coordinates
        if (coordinates) {
            // Create circle marker based on magnitude and depth
            let marker = L.circleMarker([coordinates[1], coordinates[0]], {
                radius: getRadius(properties.mag),
                fillColor: getColor(coordinates[2]),
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(myMap);

            // Bind popup with earthquake information
            marker.bindPopup(`
                <b>Location:</b> ${properties.place}<br>
                <b>Magnitude:</b> ${properties.mag}<br>
                <b>Depth:</b> ${coordinates[2]} km
            `);
        }
    });

    // Create the legend
    let legend = L.control({position: 'bottomright'});

    legend.onAdd = function() {
        let div = L.DomUtil.create('div', 'info legend');
        let grades = [-10, 10, 30, 50, 70, 90];

        // loop through grades and generate a label with a colored square for each
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background-color:' + getColor(grades[i] + 1) + ';">' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</i><br>' : '+');
        }
        return div;
    };

    legend.addTo(myMap);
});
