var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WorldMap_1 = new ol.format.GeoJSON();
var features_WorldMap_1 = format_WorldMap_1.readFeatures(json_WorldMap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_1.addFeatures(features_WorldMap_1);
var lyr_WorldMap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldMap_1, 
                style: style_WorldMap_1,
                popuplayertitle: 'World Map',
                interactive: true,
                title: '<img src="styles/legend/WorldMap_1.png" /> World Map'
            });

        var lyr_MapzenGlobalTerrain_2 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });
var format_Punkt_3 = new ol.format.GeoJSON();
var features_Punkt_3 = format_Punkt_3.readFeatures(json_Punkt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punkt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punkt_3.addFeatures(features_Punkt_3);
var lyr_Punkt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punkt_3, 
                style: style_Punkt_3,
                popuplayertitle: 'Punkt',
                interactive: true,
                title: '<img src="styles/legend/Punkt_3.png" /> Punkt'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WorldMap_1.setVisible(true);lyr_MapzenGlobalTerrain_2.setVisible(true);lyr_Punkt_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WorldMap_1,lyr_MapzenGlobalTerrain_2,lyr_Punkt_3];
lyr_WorldMap_1.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Punkt_3.set('fieldAliases', {'id': 'id', });
lyr_WorldMap_1.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Punkt_3.set('fieldImages', {'id': 'TextEdit', });
lyr_WorldMap_1.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Punkt_3.set('fieldLabels', {'id': 'no label', });
lyr_Punkt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});