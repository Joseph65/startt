/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 38,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


	
	document.addEventListener('DOMContentLoaded', function(){
		
		GetClock();
		setInterval(GetClock, 1000);

	
	}, false );
	
	
	/* TIME */

	var tmonth = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
	var tdate = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

	function GetClock() {
		var d = new Date();
		var nmonth = d.getMonth();
		var nday = d.getDay();
		var ndate = d.getDate();
		var nyear = d.getYear();
		if(nyear<1000) nyear+=1900;
		var nhour = d.getHours();
		var nmin = d.getMinutes();
		var nsec = d.getSeconds();
		if(nmin<=9) nmin = "0" + nmin
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

		document.getElementById('clockbox').innerHTML = nhour + ":" + nmin + ":" + nsec ;
		document.getElementById('datebox').innerHTML = tdate[nday] + " " + ndate + " " + tmonth[nmonth] + " " + nyear;
	}
	
	
	
	/* QUICK SEARCH */

	var s3 = [
	
		['-a ', 'amazon', 'https://www.amazon.it/s/ref=nb_sb_noss_2?__mk_it_IT=ÅMÅŽÕÑ&url=search-alias%3Daps&field-keywords='],
		['-f ', 'facebook', 'https://www.facebook.com/search/top/?q='],
		['-k ', 'kat.cr', 'https://katcr.co/new/torrents-search.php?search='],
		['-i ', 'google_img',	'https://www.google.it/search?hl=it&site=imghp&tbm=isch&source=hp&biw=1540&bih=762&q='],
		['-r ', 'reddit', 'https://www.reddit.com/search?q='],
		['-t ', 'twitter', 'https://twitter.com/search?q='],
		['-w ', 'wikipedia', 'https://it.wikipedia.org/wiki/'],
		['-y ', 'youtube', 'https://www.youtube.com/results?search_query='],
	
	]

	var s4 = [

		['-dd ', 'ddunlimited', 'http://www.ddunlimited.net/search.php?keywords='],
		['-im ', 'imgur', 'http://imgur.com/search?q=',],
		['-ra ', 'rarbg', 'https://rarbg.to/torrents.php?search='],
		['-sc ', 'sin&con', 'http://www.sinonimi-contrari.it/'],
		['-su ', 'subspedia', 'http://www.subspedia.tv/listaSerie.php?cerca='],
		['-tr ', 'google_translate', 'https://translate.google.com/?hl=it#auto/it/'],
		['-ug ', 'ult_guitar', 'https://www.ultimate-guitar.com/search.php?search_type=title&order=&value='],
		['-wr ', 'word_reference', 'http://www.wordreference.com/iten/'],
		
	]	

	var s5 = [

		['-tpb ', 'thepiratebay', 'https://thepiratebay.org/search/'],
		['-cds ', 'chit_spiaggia', 'http://www.chitarradaspiaggia.com/forum/search.php?keywords='],
		
	]
	
		
	var google = 'http://www.google.com/search?q=';
	var duckduckgo = 'https://duckduckgo.com/?q=';
	var defaultSearch = google;

	
	/* INPUT SEARCH */

	var input1 = document.getElementById('input1');
	var help = document.getElementById('help');
	
	input1.addEventListener('keypress', function(event){

	function clearInput(){
		input1.value = '';
		input1.focus();
		input1.blur();
		input1.focus();
		help.style.display = 'none';
		event.preventDefault();
	}


	if (event.keyCode == 13 || event.which == 13){
			var value = input1.value;
		
		
			if (value == ''){
				help.style.display = 'none';
				
				event.preventDefault();
				return false;
			}
			else {
			
				switch (value.substr(0,2)){
					case '-?':
						clearInput();
						help.style.display = 'block';

						return false;
						break;
				}

				
				for (i=0; i<s3.length; i++){
					switch (value.substr(0,3)){
						case s3[i][0]:
							window.open(s3[i][2] + escape(input1.value.slice(3)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s4.length; i++){
					switch (value.substr(0,4)){
						case s4[i][0]:
							window.open(s4[i][2] + escape(input1.value.slice(4)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s5.length; i++){
					switch (value.substr(0,5)){
						case s5[i][0]:
							window.open(s5[i][2] + escape(input1.value.slice(5)));
							clearInput();
							return false;
							break;
					}
				}
				
				window.open(defaultSearch + escape(input1.value));
				clearInput();
				return false;
			}
		}
	})
	
	
	
	/* HELP */
	
	displayHelp();

	function displayHelp(){
	
	
		var cmd = document.querySelectorAll('.cmd');
		var act = document.querySelectorAll('.act');
		
		var allSites = s3.concat(s4, s5);
		allSites.sort();


		for (let i=0; i<allSites.length; i++){
			for (let j=0; j<allSites[i].length; j++){
				cmd[i].innerHTML = allSites[i][0]
			}
		}
		
		for (let i=0; i<allSites.length; i++){
			for (let j=0; j<allSites[i].length; j++){
				act[i].innerHTML = allSites[i][1]
			}
		}
	}
