var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Refactored_1 = new ol.format.GeoJSON();
var features_Refactored_1 = format_Refactored_1.readFeatures(json_Refactored_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_1.addFeatures(features_Refactored_1);
var lyr_Refactored_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Refactored_1, minResolution:13.396216428596032,

                style: style_Refactored_1,
                popuplayertitle: "Refactored",
                interactive: true,
    title: 'Refactored<br />\
    <img src="styles/legend/Refactored_1_0.png" /> 0 - 38<br />\
    <img src="styles/legend/Refactored_1_1.png" /> 38 - 88<br />\
    <img src="styles/legend/Refactored_1_2.png" /> 88 - 170<br />\
    <img src="styles/legend/Refactored_1_3.png" /> 170 - 2835<br />'
        });
var format_BusStops_2 = new ol.format.GeoJSON();
var features_BusStops_2 = format_BusStops_2.readFeatures(json_BusStops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStops_2.addFeatures(features_BusStops_2);
var lyr_BusStops_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStops_2, 
                style: style_BusStops_2,
                popuplayertitle: "BusStops",
                interactive: true,
    title: 'BusStops<br />\
    <img src="styles/legend/BusStops_2_0.png" /> 104<br />\
    <img src="styles/legend/BusStops_2_1.png" /> 108<br />\
    <img src="styles/legend/BusStops_2_2.png" /> 112<br />\
    <img src="styles/legend/BusStops_2_3.png" /> 120<br />\
    <img src="styles/legend/BusStops_2_4.png" /> 128<br />\
    <img src="styles/legend/BusStops_2_5.png" /> 136<br />\
    <img src="styles/legend/BusStops_2_6.png" /> 156<br />\
    <img src="styles/legend/BusStops_2_7.png" /> 184<br />\
    <img src="styles/legend/BusStops_2_8.png" /> 184, 108<br />\
    <img src="styles/legend/BusStops_2_9.png" /> 184, 156<br />\
    <img src="styles/legend/BusStops_2_10.png" /> 30<br />\
    <img src="styles/legend/BusStops_2_11.png" /> 30, 184<br />\
    <img src="styles/legend/BusStops_2_12.png" /> 40<br />\
    <img src="styles/legend/BusStops_2_13.png" /> 40, 184<br />\
    <img src="styles/legend/BusStops_2_14.png" /> 45<br />\
    <img src="styles/legend/BusStops_2_15.png" /> 45, 136<br />\
    <img src="styles/legend/BusStops_2_16.png" /> 45, 40, 184<br />\
    <img src="styles/legend/BusStops_2_17.png" /> 48<br />\
    <img src="styles/legend/BusStops_2_18.png" /> 533<br />\
    <img src="styles/legend/BusStops_2_19.png" /> 535, 184<br />\
    <img src="styles/legend/BusStops_2_20.png" /> 535, 515, 136<br />\
    <img src="styles/legend/BusStops_2_21.png" /> 61<br />\
    <img src="styles/legend/BusStops_2_22.png" /> 61, 45, 40, 184<br />\
    <img src="styles/legend/BusStops_2_23.png" /> 61, 45, 40, 184, 108<br />\
    <img src="styles/legend/BusStops_2_24.png" /> 61s, 61<br />\
    <img src="styles/legend/BusStops_2_25.png" /> 77<br />\
    <img src="styles/legend/BusStops_2_26.png" /> 77, 112<br />\
    <img src="styles/legend/BusStops_2_27.png" /> 77, 531<br />\
    <img src="styles/legend/BusStops_2_28.png" /> 96<br />\
    <img src="styles/legend/BusStops_2_29.png" /> 96, 30<br />\
    <img src="styles/legend/BusStops_2_30.png" /> DBUZ<br />\
    <img src="styles/legend/BusStops_2_31.png" /> DBUZ, 112<br />\
    <img src="styles/legend/BusStops_2_32.png" /> DBUZ, 120<br />\
    <img src="styles/legend/BusStops_2_33.png" /> FBUZ<br />\
    <img src="styles/legend/BusStops_2_34.png" /> FBUZ, 104<br />\
    <img src="styles/legend/BusStops_2_35.png" /> FBUZ, 30<br />\
    <img src="styles/legend/BusStops_2_36.png" /> FBUZ, 40<br />\
    <img src="styles/legend/BusStops_2_37.png" /> FBUZ, 61<br />\
    <img src="styles/legend/BusStops_2_38.png" /> FBUZ, 61s, 61<br />\
    <img src="styles/legend/BusStops_2_39.png" /> FBUZ, 96<br />\
    <img src="styles/legend/BusStops_2_40.png" /> FBUZ, DBUZ, 96, 48<br />\
    <img src="styles/legend/BusStops_2_41.png" /> RAIL<br />\
    <img src="styles/legend/BusStops_2_42.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Refactored_1.setVisible(true);lyr_BusStops_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Refactored_1,lyr_BusStops_2];
lyr_Refactored_1.set('fieldAliases', {'Census Tra': 'Census Tra', 'Value': 'Value', });
lyr_BusStops_2.set('fieldAliases', {'StopID': 'StopID', 'NextRide': 'NextRide', 'StopName': 'StopName', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Juris': 'Juris', 'Status': 'Status', 'StopType': 'StopType', 'Photo': 'Photo', 'Direction': 'Direction', 'Owner': 'Owner', 'Corner': 'Corner', 'Bathrooms': 'Bathrooms', 'Benches': 'Benches', 'BikeRacks': 'BikeRacks', 'ArtAreas': 'ArtAreas', 'Shelters': 'Shelters', 'TrashCans': 'TrashCans', 'Water': 'Water', 'ECall': 'ECall', 'Advertisin': 'Advertisin', 'FedFunding': 'FedFunding', 'Easement': 'Easement', 'EasNotes': 'EasNotes', 'InfoDispla': 'InfoDispla', 'Lighting': 'Lighting', 'PulloutSur': 'PulloutSur', 'PulloutTyp': 'PulloutTyp', 'Shade': 'Shade', 'Shelter': 'Shelter', 'SignSuppor': 'SignSuppor', 'Utils': 'Utils', 'Routes': 'Routes', });
lyr_Refactored_1.set('fieldImages', {'Census Tra': 'TextEdit', 'Value': 'TextEdit', });
lyr_BusStops_2.set('fieldImages', {'StopID': 'TextEdit', 'NextRide': 'TextEdit', 'StopName': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Juris': 'TextEdit', 'Status': 'TextEdit', 'StopType': 'TextEdit', 'Photo': 'TextEdit', 'Direction': 'TextEdit', 'Owner': 'TextEdit', 'Corner': 'TextEdit', 'Bathrooms': 'TextEdit', 'Benches': 'TextEdit', 'BikeRacks': 'TextEdit', 'ArtAreas': 'TextEdit', 'Shelters': 'TextEdit', 'TrashCans': 'TextEdit', 'Water': 'TextEdit', 'ECall': 'TextEdit', 'Advertisin': 'TextEdit', 'FedFunding': 'TextEdit', 'Easement': 'TextEdit', 'EasNotes': 'TextEdit', 'InfoDispla': 'TextEdit', 'Lighting': 'TextEdit', 'PulloutSur': 'TextEdit', 'PulloutTyp': 'TextEdit', 'Shade': 'TextEdit', 'Shelter': 'TextEdit', 'SignSuppor': 'TextEdit', 'Utils': 'TextEdit', 'Routes': 'TextEdit', });
lyr_Refactored_1.set('fieldLabels', {'Census Tra': 'no label', 'Value': 'inline label - always visible', });
lyr_BusStops_2.set('fieldLabels', {'StopID': 'no label', 'NextRide': 'no label', 'StopName': 'no label', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Juris': 'no label', 'Status': 'no label', 'StopType': 'no label', 'Photo': 'no label', 'Direction': 'no label', 'Owner': 'no label', 'Corner': 'no label', 'Bathrooms': 'no label', 'Benches': 'no label', 'BikeRacks': 'no label', 'ArtAreas': 'no label', 'Shelters': 'no label', 'TrashCans': 'no label', 'Water': 'no label', 'ECall': 'no label', 'Advertisin': 'no label', 'FedFunding': 'no label', 'Easement': 'no label', 'EasNotes': 'no label', 'InfoDispla': 'no label', 'Lighting': 'no label', 'PulloutSur': 'no label', 'PulloutTyp': 'no label', 'Shade': 'no label', 'Shelter': 'no label', 'SignSuppor': 'no label', 'Utils': 'no label', 'Routes': 'inline label - always visible', });
lyr_BusStops_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});