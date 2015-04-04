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
		name: 'Burger Bear',
		location: 'Stoke Newington',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Hache',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Mother Flipper',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Bleeker Street',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Gourmet Burger Kitchen',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Hawian Burger',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Dip and Flip',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Meat Liquor',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Brgr.co',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: 'Advisory',
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: "Tommi's Burger Joint",
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: "Bread Street Kitchen",
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: "Lucky Chip",
		location: '',
		lat: 51.541374,
		lng: -0.146492
	},
	{
		name: "Elliot's Cafe",
		location: '',
		lat: 51.541374,
		lng: -0.146492
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

function initialize() {
    var mapOptions = {
      center: { lat: london.lat, lng: london.lng},
      zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    $.each(initialBurgers, function(index, burger) {
	  	var marker = new google.maps.Marker({
		    position: {lat: burger.lat, lng: burger.lng},
		    map: map,
		    title: burger.name
			});
	});
	        
}
google.maps.event.addDomListener(window, 'load', initialize);

var ViewModel = {
	searchCriteria: ko.observable(''),
	burgers: ko.observableArray([]),
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


ViewModel.searchCriteria.subscribe(ViewModel.search);
ViewModel.init();
ko.applyBindings(ViewModel);
