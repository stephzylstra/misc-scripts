(function(){

    var v = "3.4.1";

    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        script.onload = script.onreadystatechange = function(){
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                runBookmarklet();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        runBookmarklet();
    }

    function runBookmarklet() {
        (window.myBookmarklet = function() {
            function getListings() {
            	var listings = $('.listing-result__address').each(function (){
            		var url = this.attr('href');
            		var streetAddress = this.find("[itemprop='streetAddress']").text();
            		var suburb = this.find("[itemprop='addressLocality']").text();
            		var postcode = this.find("[itemprop='postalCode']").text();
            		var state = this.find("[itemprop='addressRegion']").text();
            		var streetNumber = streetAddress.split(' ')[0];
            		var streetName = streetAddress.substr(streetNumber.toString().length + 1);
            		console.log('Looking at property with url: ' + url + ', suburb ' + suburb + ', street name ' + streetName + ', street number ' + streetNumber);

            	});
            }
            // your JavaScript code goes here!
        })();
    }

})();