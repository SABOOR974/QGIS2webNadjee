ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([368275.677429, 6702303.067549, 643104.929051, 6851947.425200]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Risqueradon_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.ou-vivre.fr/geoserver/ouvivre/wms?request%3Dgetcapabilities",
                              attributions: ' ',
                              params: {
                                "LAYERS": "risqu_radon",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Risque radon',
                            opacity: 0.605000,
                            
                            
                          });
              wms_layers.push([lyr_Risqueradon_3, 1]);
var lyr_PollutionPeb_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.ou-vivre.fr/geoserver/ouvivre/wms?request%3Dgetcapabilities",
                              attributions: ' ',
                              params: {
                                "LAYERS": "pollu_peb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Pollution Peb',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PollutionPeb_4, 1]);
var format_Communes_5 = new ol.format.GeoJSON();
var features_Communes_5 = format_Communes_5.readFeatures(json_Communes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Communes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_5.addFeatures(features_Communes_5);
var lyr_Communes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_5, 
                style: style_Communes_5,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_5.png" /> Communes'
            });
var format_Postesgaz_6 = new ol.format.GeoJSON();
var features_Postesgaz_6 = format_Postesgaz_6.readFeatures(json_Postesgaz_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Postesgaz_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postesgaz_6.addFeatures(features_Postesgaz_6);
var lyr_Postesgaz_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postesgaz_6, 
                style: style_Postesgaz_6,
                popuplayertitle: 'Postes gaz',
                interactive: true,
                title: '<img src="styles/legend/Postesgaz_6.png" /> Postes gaz'
            });
var format_Zonesinondables_7 = new ol.format.GeoJSON();
var features_Zonesinondables_7 = format_Zonesinondables_7.readFeatures(json_Zonesinondables_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Zonesinondables_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesinondables_7.addFeatures(features_Zonesinondables_7);
var lyr_Zonesinondables_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesinondables_7, 
                style: style_Zonesinondables_7,
                popuplayertitle: 'Zones inondables',
                interactive: true,
                title: '<img src="styles/legend/Zonesinondables_7.png" /> Zones inondables'
            });
var format_Centredenfouissement_8 = new ol.format.GeoJSON();
var features_Centredenfouissement_8 = format_Centredenfouissement_8.readFeatures(json_Centredenfouissement_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Centredenfouissement_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centredenfouissement_8.addFeatures(features_Centredenfouissement_8);
var lyr_Centredenfouissement_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centredenfouissement_8, 
                style: style_Centredenfouissement_8,
                popuplayertitle: 'Centre d\'enfouissement',
                interactive: true,
                title: '<img src="styles/legend/Centredenfouissement_8.png" /> Centre d\'enfouissement'
            });
var format_Ligneslectriques_9 = new ol.format.GeoJSON();
var features_Ligneslectriques_9 = format_Ligneslectriques_9.readFeatures(json_Ligneslectriques_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Ligneslectriques_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligneslectriques_9.addFeatures(features_Ligneslectriques_9);
var lyr_Ligneslectriques_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligneslectriques_9, 
                style: style_Ligneslectriques_9,
                popuplayertitle: 'Lignes électriques',
                interactive: true,
    title: 'Lignes électriques<br />\
    <img src="styles/legend/Ligneslectriques_9_0.png" /> 400 kV<br />\
    <img src="styles/legend/Ligneslectriques_9_1.png" /> 225 kV<br />\
    <img src="styles/legend/Ligneslectriques_9_2.png" /> 90 kV<br />'
        });
var format_Seveso_10 = new ol.format.GeoJSON();
var features_Seveso_10 = format_Seveso_10.readFeatures(json_Seveso_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Seveso_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seveso_10.addFeatures(features_Seveso_10);
var lyr_Seveso_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seveso_10, 
                style: style_Seveso_10,
                popuplayertitle: 'Seveso',
                interactive: true,
    title: 'Seveso<br />\
    <img src="styles/legend/Seveso_10_0.png" /> Seveso seuil bas<br />\
    <img src="styles/legend/Seveso_10_1.png" /> Seveso seuil haut<br />'
        });
var format_Antennesrelais_11 = new ol.format.GeoJSON();
var features_Antennesrelais_11 = format_Antennesrelais_11.readFeatures(json_Antennesrelais_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Antennesrelais_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antennesrelais_11.addFeatures(features_Antennesrelais_11);
var lyr_Antennesrelais_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antennesrelais_11, 
                style: style_Antennesrelais_11,
                popuplayertitle: 'Antennes relais',
                interactive: true,
                title: '<img src="styles/legend/Antennesrelais_11.png" /> Antennes relais'
            });
var format_Eoliennes_12 = new ol.format.GeoJSON();
var features_Eoliennes_12 = format_Eoliennes_12.readFeatures(json_Eoliennes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Eoliennes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eoliennes_12.addFeatures(features_Eoliennes_12);
var lyr_Eoliennes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eoliennes_12, 
                style: style_Eoliennes_12,
                popuplayertitle: 'Eoliennes',
                interactive: true,
    title: 'Eoliennes<br />\
    <img src="styles/legend/Eoliennes_12_0.png" /> En projet<br />\
    <img src="styles/legend/Eoliennes_12_1.png" /> En service<br />'
        });
var format_DepartementdelaSarthe_13 = new ol.format.GeoJSON();
var features_DepartementdelaSarthe_13 = format_DepartementdelaSarthe_13.readFeatures(json_DepartementdelaSarthe_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_DepartementdelaSarthe_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartementdelaSarthe_13.addFeatures(features_DepartementdelaSarthe_13);
var lyr_DepartementdelaSarthe_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartementdelaSarthe_13, 
                style: style_DepartementdelaSarthe_13,
                popuplayertitle: 'Departement de la Sarthe',
                interactive: false,
                title: '<img src="styles/legend/DepartementdelaSarthe_13.png" /> Departement de la Sarthe'
            });

lyr_ESRISatellite_0.setVisible(false);lyr_GoogleTerrain_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(true);lyr_Risqueradon_3.setVisible(false);lyr_PollutionPeb_4.setVisible(false);lyr_Communes_5.setVisible(false);lyr_Postesgaz_6.setVisible(true);lyr_Zonesinondables_7.setVisible(true);lyr_Centredenfouissement_8.setVisible(true);lyr_Ligneslectriques_9.setVisible(true);lyr_Seveso_10.setVisible(true);lyr_Antennesrelais_11.setVisible(true);lyr_Eoliennes_12.setVisible(true);lyr_DepartementdelaSarthe_13.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleTerrain_1,lyr_OpenStreetMap_2,lyr_Risqueradon_3,lyr_PollutionPeb_4,lyr_Communes_5,lyr_Postesgaz_6,lyr_Zonesinondables_7,lyr_Centredenfouissement_8,lyr_Ligneslectriques_9,lyr_Seveso_10,lyr_Antennesrelais_11,lyr_Eoliennes_12,lyr_DepartementdelaSarthe_13];
lyr_Communes_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Postesgaz_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', 'NOMCOMMERC': 'NOMCOMMERC', });
lyr_Zonesinondables_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gid': 'gid', });
lyr_Centredenfouissement_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', 'NOMCOMMERC': 'NOMCOMMERC', });
lyr_Ligneslectriques_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'VOLTAGE': 'VOLTAGE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Seveso_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'code_s3ic': 'code_s3ic', 'x': 'x', 'y': 'y', 'epsg': 'epsg', 'nom_ets': 'nom_ets', 'num_dep': 'num_dep', 'cd_insee': 'cd_insee', 'cd_postal': 'cd_postal', 'nomcommune': 'nomcommune', 'code_naf': 'code_naf', 'lib_naf': 'lib_naf', 'num_siret': 'num_siret', 'regime': 'regime', 'lib_regime': 'lib_regime', 'ippc': 'ippc', 'seveso': 'seveso', 'lib_seveso': 'lib_seveso', 'famille_ic': 'famille_ic', 'url_fiche': 'url_fiche', 'rayon': 'rayon', 'precis_loc': 'precis_loc', 'lib_precis': 'lib_precis', });
lyr_Antennesrelais_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_Eoliennes_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_DepartementdelaSarthe_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Communes_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'DateTime', 'DATE_MAJ': 'DateTime', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_Postesgaz_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'CATEGORIE': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'TextEdit', 'DATE_CONF': 'TextEdit', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ID_BAN': 'TextEdit', 'NOMCOMMERC': 'TextEdit', });
lyr_Zonesinondables_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'gid': 'Range', });
lyr_Centredenfouissement_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'CATEGORIE': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'TextEdit', 'DATE_CONF': 'TextEdit', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ID_BAN': 'TextEdit', 'NOMCOMMERC': 'TextEdit', });
lyr_Ligneslectriques_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'VOLTAGE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'TextEdit', 'DATE_CONF': 'TextEdit', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Seveso_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'code_s3ic': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'epsg': 'TextEdit', 'nom_ets': 'TextEdit', 'num_dep': 'TextEdit', 'cd_insee': 'TextEdit', 'cd_postal': 'TextEdit', 'nomcommune': 'TextEdit', 'code_naf': 'TextEdit', 'lib_naf': 'TextEdit', 'num_siret': 'TextEdit', 'regime': 'TextEdit', 'lib_regime': 'TextEdit', 'ippc': 'TextEdit', 'seveso': 'TextEdit', 'lib_seveso': 'TextEdit', 'famille_ic': 'TextEdit', 'url_fiche': 'TextEdit', 'rayon': 'TextEdit', 'precis_loc': 'TextEdit', 'lib_precis': 'TextEdit', });
lyr_Antennesrelais_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'TextEdit', 'DATE_CONF': 'TextEdit', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_Eoliennes_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'TextEdit', 'DATE_CONF': 'TextEdit', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_DepartementdelaSarthe_13.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'TextEdit', 'DATE_CONF': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_Communes_5.set('fieldLabels', {'fid': 'header label - visible with data', 'ID': 'header label - visible with data', 'INSEE_COM': 'header label - visible with data', 'INSEE_ARR': 'header label - visible with data', 'INSEE_COL': 'header label - visible with data', 'INSEE_DEP': 'header label - visible with data', 'INSEE_REG': 'header label - visible with data', 'POPULATION': 'header label - visible with data', 'SURFACE_HA': 'header label - visible with data', 'DATE_CREAT': 'header label - visible with data', 'DATE_MAJ': 'header label - visible with data', 'DATE_APP': 'header label - visible with data', 'DATE_CONF': 'header label - visible with data', 'CODE_POST': 'header label - visible with data', 'NOM': 'header label - visible with data', 'CL_ARROND': 'header label - visible with data', 'CL_COLLTER': 'header label - visible with data', 'CL_DEPART': 'header label - visible with data', 'CL_REGION': 'header label - visible with data', 'CAPITALE': 'header label - visible with data', 'DATE_RCT': 'header label - visible with data', 'RECENSEUR': 'header label - visible with data', 'SIREN_EPCI': 'header label - visible with data', 'ID_CH_LIEU': 'header label - visible with data', 'ID_AUT_ADM': 'header label - visible with data', 'CODE_SIREN': 'header label - visible with data', });
lyr_Postesgaz_6.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'ID': 'header label - visible with data', 'CATEGORIE': 'header label - visible with data', 'NATURE': 'header label - visible with data', 'NAT_DETAIL': 'header label - visible with data', 'TOPONYME': 'header label - visible with data', 'STATUT_TOP': 'header label - visible with data', 'IMPORTANCE': 'header label - visible with data', 'FICTIF': 'header label - visible with data', 'ETAT': 'header label - visible with data', 'DATE_CREAT': 'header label - visible with data', 'DATE_MAJ': 'header label - visible with data', 'DATE_APP': 'header label - visible with data', 'DATE_CONF': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'ID_SOURCE': 'header label - visible with data', 'ACQU_PLANI': 'header label - visible with data', 'PREC_PLANI': 'header label - visible with data', 'ID_BAN': 'header label - visible with data', 'NOMCOMMERC': 'header label - visible with data', });
lyr_Zonesinondables_7.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'gid': 'header label - visible with data', });
lyr_Centredenfouissement_8.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'ID': 'header label - visible with data', 'CATEGORIE': 'header label - visible with data', 'NATURE': 'header label - visible with data', 'NAT_DETAIL': 'header label - visible with data', 'TOPONYME': 'header label - visible with data', 'STATUT_TOP': 'header label - visible with data', 'IMPORTANCE': 'header label - visible with data', 'FICTIF': 'header label - visible with data', 'ETAT': 'header label - visible with data', 'DATE_CREAT': 'header label - visible with data', 'DATE_MAJ': 'header label - visible with data', 'DATE_APP': 'header label - visible with data', 'DATE_CONF': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'ID_SOURCE': 'header label - visible with data', 'ACQU_PLANI': 'header label - visible with data', 'PREC_PLANI': 'header label - visible with data', 'ID_BAN': 'header label - visible with data', 'NOMCOMMERC': 'header label - visible with data', });
lyr_Ligneslectriques_9.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'ID': 'header label - visible with data', 'VOLTAGE': 'header label - visible with data', 'ETAT': 'header label - visible with data', 'DATE_CREAT': 'header label - visible with data', 'DATE_MAJ': 'header label - visible with data', 'DATE_APP': 'header label - visible with data', 'DATE_CONF': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'ID_SOURCE': 'header label - visible with data', 'ACQU_PLANI': 'header label - visible with data', 'PREC_PLANI': 'header label - visible with data', 'ACQU_ALTI': 'header label - visible with data', 'PREC_ALTI': 'header label - visible with data', });
lyr_Seveso_10.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'code_s3ic': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', 'epsg': 'header label - visible with data', 'nom_ets': 'header label - visible with data', 'num_dep': 'header label - visible with data', 'cd_insee': 'header label - visible with data', 'cd_postal': 'header label - visible with data', 'nomcommune': 'header label - visible with data', 'code_naf': 'header label - visible with data', 'lib_naf': 'header label - visible with data', 'num_siret': 'header label - visible with data', 'regime': 'header label - visible with data', 'lib_regime': 'header label - visible with data', 'ippc': 'header label - visible with data', 'seveso': 'header label - visible with data', 'lib_seveso': 'header label - visible with data', 'famille_ic': 'header label - visible with data', 'url_fiche': 'header label - visible with data', 'rayon': 'header label - visible with data', 'precis_loc': 'header label - visible with data', 'lib_precis': 'header label - visible with data', });
lyr_Antennesrelais_11.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'ID': 'header label - visible with data', 'NATURE': 'header label - visible with data', 'NAT_DETAIL': 'header label - visible with data', 'TOPONYME': 'header label - visible with data', 'STATUT_TOP': 'header label - visible with data', 'IMPORTANCE': 'header label - visible with data', 'ETAT': 'header label - visible with data', 'DATE_CREAT': 'header label - visible with data', 'DATE_MAJ': 'header label - visible with data', 'DATE_APP': 'header label - visible with data', 'DATE_CONF': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'ID_SOURCE': 'header label - visible with data', 'ACQU_PLANI': 'header label - visible with data', 'PREC_PLANI': 'header label - visible with data', 'ACQU_ALTI': 'header label - visible with data', 'PREC_ALTI': 'header label - visible with data', 'HAUTEUR': 'header label - visible with data', });
lyr_Eoliennes_12.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'ID': 'header label - visible with data', 'NATURE': 'header label - visible with data', 'NAT_DETAIL': 'header label - visible with data', 'TOPONYME': 'header label - visible with data', 'STATUT_TOP': 'header label - visible with data', 'IMPORTANCE': 'header label - visible with data', 'ETAT': 'header label - visible with data', 'DATE_CREAT': 'header label - visible with data', 'DATE_MAJ': 'header label - visible with data', 'DATE_APP': 'header label - visible with data', 'DATE_CONF': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'ID_SOURCE': 'header label - visible with data', 'ACQU_PLANI': 'header label - visible with data', 'PREC_PLANI': 'header label - visible with data', 'ACQU_ALTI': 'header label - visible with data', 'PREC_ALTI': 'header label - visible with data', 'HAUTEUR': 'header label - visible with data', });
lyr_DepartementdelaSarthe_13.set('fieldLabels', {'fid': 'header label - visible with data', 'Name': 'header label - visible with data', 'description': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMode': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'ID': 'header label - visible with data', 'INSEE_DEP': 'header label - visible with data', 'INSEE_REG': 'header label - visible with data', 'NOM': 'header label - visible with data', 'DATE_CREAT': 'header label - visible with data', 'DATE_MAJ': 'header label - visible with data', 'DATE_APP': 'header label - visible with data', 'DATE_CONF': 'header label - visible with data', 'ID_AUT_ADM': 'header label - visible with data', 'CODE_SIREN': 'header label - visible with data', });
lyr_DepartementdelaSarthe_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});