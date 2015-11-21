$(document).ready(function() {
    var queryUrl = "http://localhost:3030/baltimore/query?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20ds%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_8hgm-7t56%2F%3E%0APREFIX%20ts%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_59fg-ary5%2F%3E%0APREFIX%20dsbase%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F%3E%0APREFIX%20geo%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3E%0ASELECT%20%3Fdesc%20%3Flat%20%3Flng%0AWHERE%20%7B%0A%20%20%3Felement%20rdf%3Atype%20dsbase%3A_8hgm-7t56%3B%0Ads%3Aneighborhood%20%3Fneighborhood1%3B%0Ads%3Aunempr13%20%3Funemp_rate.%0A%20%20%3Felement1%20rdf%3Atype%20dsbase%3A_59fg-ary5%3B%0A%20%20%20%20ts%3Aneighborhood%20%3Fneighborhood%3B%0A%20%20%20%20filter%20contains(%3Fneighborhood%2C%3Fneighborhood1)%0A%20%20%20%20%3Felement1%20ts%3Acrimecode%20%3Fcode%3B%0A%20%20%20%20ts%3Adescription%20%3Fdesc%3B%0A%20%20%09geo%3Alat%20%3Flat%3B%0A%20%20%20%20geo%3Along%20%3Flng.%0A%7DLIMIT%2010000&output=json";
    var cctvQuery = "http://localhost:3030/baltimore/query?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20ds%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_8hgm-7t56%2F%3E%0APREFIX%20ts%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_59fg-ary5%2F%3E%0APREFIX%20cs%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2Fhdyb-27ak%2F%3E%0APREFIX%20dsbase%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F%3E%0APREFIX%20geo%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3E%0ASELECT%20%3Fdesc%20%3Flat%20%3Flng%0AWHERE%20%7B%0A%20%20%3Felement%20rdf%3Atype%20dsbase%3Ahdyb-27ak%3B%0A%20%20%20%20cs%3Aname%09%3Fdesc%3B%0A%20%20cs%3Alocation_1%20%3Fblank.%0A%20%20%3Fblank%20geo%3Alat%20%3Flat%3B%0A%20%20%20%20geo%3Along%20%3Flng.%0A%7D&output=json";
    var areaQuery = "http://localhost:3030/baltimore/query?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20ds%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_8hgm-7t56%2F%3E%0APREFIX%20ts%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_59fg-ary5%2F%3E%0APREFIX%20dsbase%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F%3E%0APREFIX%20geo%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3E%0ASELECT%20%3Fneighborhood%20(count(%3Fneighborhood)%20AS%20%3Fcount)%0AWHERE%20%7B%0A%20%20%3Felement%20rdf%3Atype%20dsbase%3A_8hgm-7t56%3B%0Ads%3Aneighborhood%20%3Fneighborhood1%3B%0Ads%3Aunempr13%20%3Funemp_rate.%0A%20%20%3Felement1%20rdf%3Atype%20dsbase%3A_59fg-ary5%3B%0A%20%20%20%20ts%3Aneighborhood%20%3Fneighborhood%3B%0A%20%20%20%20filter%20contains(%3Fneighborhood%2C%3Fneighborhood1)%20%20%0A%7D%20GROUP%20BY%20%3Fneighborhood%20ORDER%20BY%20DESC(%3Fcount)&output=json";
    var unemploymentQuery = "http://localhost:3030/baltimore/query?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20ds%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_8hgm-7t56%2F%3E%0APREFIX%20ts%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_59fg-ary5%2F%3E%0APREFIX%20dsbase%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F%3E%0APREFIX%20geo%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3E%0ASELECT%20DISTINCT%20%3Fneighborhood%20%3Funemp_rate%09%0AWHERE%20%7B%0A%20%20%3Felement%20rdf%3Atype%20dsbase%3A_8hgm-7t56%3B%0Ads%3Aneighborhood%20%3Fneighborhood1%3B%0Ads%3Aunempr13%20%3Funemp_rate.%0A%20%20%3Felement1%20rdf%3Atype%20dsbase%3A_59fg-ary5%3B%0A%20%20%20%20ts%3Aneighborhood%20%3Fneighborhood%3B%0A%20%20%20%20filter%20contains(%3Fneighborhood%2C%3Fneighborhood1)%20%0A%7D%20ORDER%20BY%20ASC(%3Funemp_rate)%09&output=json";
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(39.2951932, -76.6098289),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var markers = [];
    getnbArray();
    //showInmap(queryUrl);
    function setMapOnAll(map) {
    	console.log("inside setMapOnAll");
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    function clearMarkers() {
        setMapOnAll(null);
    }

    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }
    function getnbArray() {
        $.ajax({
            dataType: "jsonp",
            url: areaQuery,
            success: function(data) {
                var results = data.results.bindings;
                var infowindow = new google.maps.InfoWindow();
                var marker, i;
                for (var i in results) {
                    console.log("desc " + data.results.bindings[i].neighborhood.value);
                    $("#nbselect").append($("<option></option>").attr("value", data.results.bindings[i].neighborhood.value).text(data.results.bindings[i].neighborhood.value));
                }
            }
        });
    }
    $("#nbselect").change(function(event) {
        /* Act on the event */
        var val = $("#nbselect").val();
        var randQuery = "http://localhost:3030/baltimore/query?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20ds%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_8hgm-7t56%2F%3E%0APREFIX%20ts%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F_59fg-ary5%2F%3E%0APREFIX%20dsbase%3A%20%3Chttp%3A%2F%2Fdata.baltimorecity.gov%2Fresource%2F%3E%0APREFIX%20geo%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3E%0ASELECT%20%3Fneighborhood%20%3Funemp_rate%20%3Fcode%20%3Fdesc%20%3Flat%20%3Flng%0AWHERE%20%7B%0A%20%20%3Felement%20rdf%3Atype%20dsbase%3A_8hgm-7t56%3B%0Ads%3Aneighborhood%20%22" + val + "%22%3B%0Ads%3Aunempr13%20%3Funemp_rate.%0A%20%20%3Felement1%20rdf%3Atype%20dsbase%3A_59fg-ary5%3B%0A%20%20%20%20ts%3Aneighborhood%20%3Fneighborhood%3B%0A%20%20%20%20filter%20contains(%3Fneighborhood%2C%22" + val + "%22)%0A%20%20%20%20%3Felement1%20ts%3Acrimecode%20%3Fcode%3B%0A%20%20%20%20ts%3Adescription%20%3Fdesc%3B%0A%20%20%09geo%3Alat%20%3Flat%3B%0A%20%20%20%20geo%3Along%20%3Flng.%20%20%0A%7D&output=json";
        $("#val").html(val);
        if(val === "All"){
        	showInmap(queryUrl);
        }
        else{
        	setMapOnAll(null);
        	showInmap(randQuery);
        }
        
    });
    function cctv() {
        $.ajax({
            dataType: "jsonp",
            url: cctvQuery,
            success: function(data) {
                var results = data.results.bindings;
                var infowindow = new google.maps.InfoWindow();
                var marker, i;
                for (var i in results) {
                    console.log("lat " + data.results.bindings[i].lat.value);
                    console.log("lng " + data.results.bindings[i].lng.value);
                    console.log("desc " + data.results.bindings[i].desc.value);
                    var iconBase = 'bluemarker.png';
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(data.results.bindings[i].lat.value, data.results.bindings[i].lng.value),
                        icon: iconBase,
                        map: map
                    });
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            infowindow.setContent(data.results.bindings[i].desc.value);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }
            }
        });
    }
    cctv();
    

    function showInmap(queryUrl) {
        $.ajaxSetup({
            dataType: "jsonp",
            url: queryUrl,
            beforeSend: function() {
                // show gif here, eg:
                $("#loading").show();
            },
            complete: function(data) {
                // hide gif here, eg:
                $("#loading").hide();
            }
        });
        $.ajax({
            success: function(data) {
                var results = data.results.bindings;
                var infowindow = new google.maps.InfoWindow();
                var marker, i;	
                for (var i in results) {
                    console.log("lat " + data.results.bindings[i].lat.value);
                    console.log("lng " + data.results.bindings[i].lng.value);
                    console.log("desc " + data.results.bindings[i].desc.value);
                    var iconBase = 'marker.png';
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(data.results.bindings[i].lat.value, data.results.bindings[i].lng.value),
                        icon: iconBase,
                        map: map
                    });
                    markers.push(marker);
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            infowindow.setContent(data.results.bindings[i].desc.value);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }
            }
        });
    }
    function getAreaCount() {
        $.ajaxSetup({
            dataType: "jsonp",
            url: areaQuery,
            beforeSend: function() {
                // show gif here, eg:
                $("#loading").show();
            },
            complete: function(data) {
                // hide gif here, eg:
                $("#loading").hide();
            }
        });
        $.ajax({
            success: function(data) {
                var results = data.results.bindings;
                var areaArray = [];
                var areaArray2 = getUnemploymentCount();
                console.log("Unemployment" + areaArray2);
                for (var i in results) {
                    item = [data.results.bindings[i].neighborhood.value, Number(data.results.bindings[i].count.value)];
                    areaArray.push(item);
                }
                console.log("neighborhood " + areaArray);
                google.setOnLoadCallback(initialize);
                function initialize() {
                    drawChart();
                    drawChart2();
                }
                function drawChart() {
                    //var data1 = google.visualization.arrayToDataTable(areaArray);
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Neighborhood');
                    data.addColumn('number', 'Crime Count');
                    data.addRows(areaArray);
                    // var options = {'title':'Balitmore Crime Rate Chart based on the Neighborhood',
                    //            'width':800,
                    //            'height':1200};
                    var options1 = {
                        chart: {
                            title: 'Balitmore Crime Rate Chart based on the Neighborhood',
                            subtitle: '',
                        },
                        chartArea: {
                            width: '70%'
                        },
                        bars: 'horizontal', // Required for Material Bar Charts.
                        hAxis: {
                            title: "Crime Count",
                            minValue: 0,
                        },
                        vAxis: {
                            title: "Neighborhood",
                            textStyle: {
                                fontSize: 12 // or the number you want
                            }
                        },
                        height: 1200,
                        colors: ['#d95f02']
                    };
                    var chart1 = new google.visualization.BarChart(document.getElementById('chart_div'));
                    chart1.draw(data, google.charts.Bar.convertOptions(options1));
                }
                function drawChart2() {
                    var data2 = google.visualization.arrayToDataTable(areaArray2);
                    var options2 = {
                        chart: {
                            title: 'Balitmore Unemployment Rate Chart based on neighborhood',
                            subtitle: '',
                        },
                        chartArea: {
                            width: '70%'
                        },
                        bars: 'horizontal', // Required for Material Bar Charts.
                        hAxis: {
                            title: "Unemployment Rate",
                            minValue: 0
                        },
                        vAxis: {
                            title: "Neighborhood",
                            format:'#%'
                        },
                        height: 1200,
                        colors: ['#b0120a']
                    };
                    var chart2 = new google.charts.Bar(document.getElementById('chart_div2'));
                    chart2.draw(data2, google.charts.Bar.convertOptions(options2));
                }
            }
        });
        //
    }
    getAreaCount();
    function getUnemploymentCount() {
        var areaArray = [
            ["Neighborhood", "Unemployment"]
        ];
        $.ajaxSetup({
            dataType: "jsonp",
            url: unemploymentQuery,
            beforeSend: function() {
                // show gif here, eg:
                $("#loading").show();
            },
            complete: function(data) {
                // hide gif here, eg:
                $("#loading").hide();
            }
        });
        $.ajax({
            success: function(data) {
                var results = data.results.bindings;
                for (var i in results) {
                    item = [data.results.bindings[i].neighborhood.value, data.results.bindings[i].unemp_rate.value];
                    areaArray.push(item);
                }
            }
        });
        return areaArray;
    }
});