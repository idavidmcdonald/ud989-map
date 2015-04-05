var london = {lat: 51.532112, lng: -0.106384};

var initialBurgers = [
	{
		name: 'Honest Burger',
		location: 'Camden',
		rating: 8.5,
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Wild Game Co.',
		location: 'Old Street',
		rating: 7.5,
		lat: 51.523047,
		lng: -0.092878
	},
	{
		name: 'Byron Burger',
		location: 'Soho',
		rating: 6,
		lat: 51.513037,
		lng: -0.133858
	},
	{
		name: 'Dirty Burger',
		location: 'Kentish Town',
		rating: 7,
		lat: 51.554122,
		lng: -0.145158
	},
	{
		name: 'Shake Shack',
		location: 'Covent Garden',
		rating: 5,
		lat: 51.511507,
		lng: -0.122751
	},
	{
		name: 'Patty and Bun',
		location: 'Liverpool Street',
		rating: 7,
		lat: 51.517349,
		lng: -0.082100
	},
	{
		name: '5 Guys',
		location: 'Covent Garden',
		rating: 5,
		lat: 51.511890, 
		lng: -0.126894
	},
	{
		name: 'Stokey Bears',
		location: 'Stoke Newington',
		lat: 51.560508, 
		lng: -0.074084
	},
	{
		name: 'Hache',
		location: 'Shoreditch',
		lat: 51.526677, 
		lng: -0.080866
	},
	{
		name: 'Mother Flipper',
		location: 'Brockley Market',
		lat: 51.468041,
		lng: -0.025006
	},
	{
		name: 'Bleeker Street',
		location: 'Spitalfields',
		lat: 51.519891, 
		lng: -0.075201
	},
	{
		name: 'Gourmet Burger Kitchen',
		location: 'Soho',
		lat: 51.513695, 
		lng: -0.131565
	},
	{
		name: "Kua 'Aina",
		location: 'Soho',
		lat: 51.513761, 
		lng: -0.139223
	},
	{
		name: 'Dip and Flip',
		location: 'Clapham Junction',
		lat: 51.460659, 
		lng: -0.167637
	},
	{
		name: 'Meat Liquor',
		location: 'Marylebone',
		lat: 51.515396,
		lng: -0.148841
	},
	{
		name: 'Brgr.co',
		location: 'Soho',
		lat: 51.515268, 
		lng: -0.135769
	},
	{
		name: 'Advisory',
		location: 'Hackney',
		lat: 51.539571, 
		lng: -0.056180
	},
	{
		name: "Tommi's Burger Joint",
		location: 'Marylebone',
		lat: 51.517526, 
		lng: -0.151326
	},
	{
		name: "Bread Street Kitchen",
		location: "St Paul's",
		lat: 51.513361, 
		lng: -0.095195
	},
	{
		name: "Lucky Chip",
		location: 'Dalston',
		lat: 51.551478, 
		lng: -0.075309
	},
	{
		name: "Elliot's Cafe",
		location: 'London Bridge',
		lat: 51.505631, 
		lng: -0.091706
	},
];

// Represent a single burger
var Burger = function(data){
	this.name = ko.observable(data.name);
	this.location = ko.observable(data.location);
	this.rating = ko.observable(data.rating);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);
};



var ViewModel = {
	searchCriteria: ko.observable(''),
	burgers: ko.observableArray([]),
	mapMarkers: ko.observableArray([]),
	searchBurgers: ko.observableArray([]),
	currentBurger: ko.observable(),

	init: function(){
		ViewModel.burgers.removeAll();
		initialBurgers.forEach(function(burger){
			ViewModel.burgers.push( new Burger(burger) );
		});

		ViewModel.searchBurgers.removeAll();
		initialBurgers.forEach(function(burger){
			ViewModel.searchBurgers.push( new Burger(burger) );
		});

		ViewModel.currentBurger(ViewModel.burgers()[0]);
	},

	setCurrentBurger: function(clickedBurger) {
		ViewModel.currentBurger(clickedBurger);
	},

	search: function(searchTerm){
		var self = this;

		this.searchTerm = searchTerm;
		
		ViewModel.init();
	    if (searchTerm == ''){
	    	return;
	    } 
	    ViewModel.burgers.removeAll();
		
	    ko.utils.arrayForEach(ViewModel.searchBurgers(), function(burger){
	      if (burger.name().toLowerCase().indexOf(self.searchTerm.toLowerCase()) >= 0) {
	        ViewModel.burgers.push(burger);
	      }
	    });
	    ViewModel.currentBurger(ViewModel.burgers()[0]);

	}
};

var markersArray = [];
function removeMarkers(){
    for(i=0; i<markersArray.length; i++){
        markersArray[i].setMap(null);
    }
}

// Google map binding to handle initial loading of map and the markers on it
ko.bindingHandlers.googleMap = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		// Create map
		mapOptions = {
	        center: { lat: 51.518180, lng: -0.111383},
	      	zoom: 11
	    },
      	map = new google.maps.Map(element, mapOptions);

      	// For each burger joint
		$.each(bindingContext.$data.burgers(), function(index, burger) {
		  	// Add new marker to map
		  	var marker = new google.maps.Marker({
			    position: {lat: burger.lat(), lng: burger.lng()},
			    map: map,
			    title: burger.name()
				});

		  	markersArray.push(marker);
		  	
		  	// On click of a map marker, set the current burger joint to that marker
			google.maps.event.addListener(marker, 'click', function() {
			    ViewModel.setCurrentBurger(burger);
			    // marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
			});

		});

    },

    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        burgers = valueAccessor();
        removeMarkers();

        // For each burger joint
		$.each(bindingContext.$data.burgers(), function(index, burger) {
		  	// Add new marker to map
		  	var marker = new google.maps.Marker({
			    position: {lat: burger.lat(), lng: burger.lng()},
			    map: map,
			    title: burger.name()
				});

		  	markersArray.push(marker);
		  	
		  	// On click of a map marker, set the current burger joint to that marker
			google.maps.event.addListener(marker, 'click', function() {
			    ViewModel.setCurrentBurger(burger);
			    // marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
			});

		});
 
    }

};


ViewModel.searchCriteria.subscribe(ViewModel.search);
ViewModel.init();
ko.applyBindings(ViewModel);
