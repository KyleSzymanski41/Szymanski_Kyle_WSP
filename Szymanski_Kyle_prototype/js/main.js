

(function($){
	/*------dautocomplete------*/


    $(function() {
        var availableTags = [
            "80537",
            "Fort Collins",
            "Winter Park",
            "14323",
            "Colorado",
            "Cooperstown",
            "Miami",
            "Boston",
            "NYC",
            "Denver",
            "11111",
            "Orlando",
            "Jacksonville",
            "13452",
            "Loveland",
            "80538"
        ];
        $( "#tags" ).autocomplete({
            source: availableTags
        });
    });

    /* accordion */
    $(function() {
        $( "#accordion" ).accordion({
            collapsible: true
        });
    });

    /* Google maps */
    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: new google.maps.LatLng(40.4047, -105.0858),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions)
    }
    google.maps.event.addDomListener(window, 'load', initialize);


}) (jQuery)



