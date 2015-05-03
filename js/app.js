var burgerData = [
	{
		name: 'Honest Burger',
		location: 'Camden',
		rating: 8.5,
		price: 9,
		includesChips: true,
		lat: 51.541374,
		lng: -0.146492,
		review: "Good sized cheeseburger, brioche bun, with your choice of cheddar, red leicster or stilton - I went for the cheddar. Comes with a super tasty red onion relish. Mostly importantly, the meat has been the juiciest and best seasoned, literally driblling with juices. Comes with their rosemary salt fries as default. I've been a few times and Honest Burger will give you a consistently great burger, there isn't really anything about the burger not up to scratch."
	},
	{
		name: 'Wild Game Co.',
		location: 'Old Street',
		rating: 7.5,
		price: 6,
		includesChips: false,
		lat: 51.523047,
		lng: -0.092878,
		review: "First thing to note is that this is a venison burger (no beef on the menu here). Served in a brioche bun (although maybe a tad too sweet) with crisp lettuce, one single roast cherry tomato and their homemade buffalo style sauce. I've been a few times and the meat has been excellent and juicy, definitely setting it apart from many others, however I'm not convinced by their choice of toppings, bringing this one down a point."
	},
	{
		name: 'Byron Burger',
		location: 'Soho',
		rating: 6,
		price: 7.95,
		includesChips: false,
		lat: 51.513037,
		lng: -0.133858,
		review: "A standard cheeseburger - nothing wrong with it but nothing setting it apart from the rest (apart from the inclusion of a tasty pickle on the side). "
	},
	{
		name: 'Dirty Burger',
		location: 'Kentish Town',
		rating: 6.5,
		price: 6,
		includesChips: false,
		lat: 51.554122,
		lng: -0.145158,
		review: "Hidden behind a building in a shack (literally), the place is a little hard to find but the burger is pretty good. Comes with lots of melted mozerella and is somewhat dirty to eat as expected but nothing too much to write home about. "
	},
	{
		name: 'Shake Shack',
		location: 'Covent Garden',
		rating: 5,
		price: 5,
		includesChips: false,
		lat: 51.511507,
		lng: -0.122751,
		review: "Small american style burger, similar to In and Out however not as good. Burger pattys are thin so you won't be getting anything medium rare. It's definitely a good step up from McDonalds however you can find burgers twice the size and twice as tasty for only a pound or two more."
	},
	{
		name: 'Patty and Bun',
		location: 'Liverpool Street',
		rating: 7,
		price: 7.5,
		includesChips: false,
		lat: 51.517349,
		lng: -0.082100,
		review: "One seriously attractive looking burger, a good size too. Comes with their smokey bbq mayo which I'm not fully convinced is better then classic ketchup. The only thing letting this down a tad is the meat - it's pretty good and came perfectly cooked, however it wasn't juicy or seasoned enough to get into the top ratings. This place does a great burger and definitely has a lot of potential - worth a visit.  "
	},
	{
		name: '5 Guys',
		location: 'Covent Garden',
		rating: 5,
		price: 8,
		includesChips: false,
		lat: 51.511890, 
		lng: -0.126894,
		review: "£8? They must be having a laugh. You're paying for the hype and cool american branding. Unlike most others, you can pick from about 15 free toppings to have on your burger (think variety of sauces, pickles, salad etc), which is nice if you want to cram them all on and get your moneys worth. The burger is american styled and the pattys are thin so no pink meat. It's not a bad burger, fairly tasty and greasy, but just not worth the price."
	},
	{
		name: 'Stokey Bears',
		location: 'Stoke Newington',
		rating: 7,
		price: 7.5,
		includesChips: false,
		lat: 51.560508, 
		lng: -0.074084,
		review: "A very tasty good sized burger. Maybe not as fancy as places such as Patty n Bun but worth a visit. Comes with lettuce and a good bit of raw onion for sweetness. The burger came just a smidgen overcooked but the meat was still good, although not up the quality of somewhere like Honest Burger. This place has good potential and if the patty got a little better then it could definitely be pushing up the rankings."
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
		rating: 4.5,
		price: 6,
		includesChips: false,
		lat: 51.519891, 
		lng: -0.075201,
		review: "Maybe I'm just unlucky, but the two burgers I've heard from Bleeker Street, the first was quite undercooked and the second was well overcooked. They haven't gone for a brioche bun and instead use a normal toasted roll. All in all, it reminds me of a fancy Big Mac but lacking the lettuce and sauce so it's a little dry. Maybe I haven't had a proper burger from there but so far I'm not sure what the good reviews are all about."
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
	this.price = ko.observable(data.price);
	this.includesChips = ko.observable(data.includesChips);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);
	this.review = ko.observable(data.review);
	//this.current = ko.observable(false);
	this.visible = ko.observable(true);
};



var ViewModel = {
	searchCriteria: ko.observable(''),
	burgers: ko.observableArray([]),
	currentBurger: ko.observable(),

	init: function(){
		// Get burgers 
		burgerData.forEach(function(burger){
			ViewModel.burgers.push( new Burger(burger) );
		});

		// Sort burgers by rating desc, name asc
		ViewModel.burgers.sort(function(left, right) { 
			if (left.rating() == right.rating()) {
				// Same rating, so sort alphabetically on name
				return left.name() == right.name() ? 0 : (left.name() < right.name() ? -1 : 1);
			};

			// One Undefined rating
			if (left.rating() == undefined) {
				return 1;
			} else if (right.rating() == undefined) {
				return -1;
			};

			// Both defined non equal ratings
			if (left.rating() < right.rating()){
	            return 1;
	        } else if (left.rating() > right.rating()){
	            return -1;
	        } 
		});

		// Set first burger as current burger
		ViewModel.currentBurger(ViewModel.burgers()[0]);
	},

	setCurrentBurger: function(clickedBurger) {
		// Set previous marker colour back to normal
		//ViewModel.currentBurger().marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');


		//ViewModel.currentBurger().current(true);
		// Set new current burger with active marker colour
		ViewModel.currentBurger(clickedBurger);
		//ViewModel.currentBurger().marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
	},

	search: function(searchTerm){
		var self = this;
		this.searchTerm = searchTerm;
		
	    ko.utils.arrayForEach(ViewModel.burgers(), function(burger){
	      if (burger.name().toLowerCase().indexOf(self.searchTerm.toLowerCase()) >= 0) {
	        burger.visible(true);
	        burger.marker.setMap(map);
	      } else {
	      	burger.visible(false);
	      	burger.marker.setMap(null);
	      	//console.log(burger.marker);
	      }
	    });
	    //ViewModel.setCurrentBurger()
	 //    ViewModel.currentBurger(ViewModel.burgers()[0]);

	}
};


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

			// Set burger marker
			burger.marker = new google.maps.Marker({
			    position: {lat: burger.lat(), lng: burger.lng()},
			    map: map,
			    title: burger.name()
				});

		  	//On click of a map marker, set the current burger joint to that marker
			google.maps.event.addListener(burger.marker, 'click', function() {
			    ViewModel.setCurrentBurger(burger);
			});

		});

		// Set current burger marker as active
		//ViewModel.currentBurger().marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    }
};


ViewModel.searchCriteria.subscribe(ViewModel.search);
ViewModel.init();
ko.applyBindings(ViewModel);
