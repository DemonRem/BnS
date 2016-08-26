$(document).ready(function() {

	var app = app || { };

	(function(){

		app.controller = {
			init: function(){
				app.events.init();
				app.actions.init();
			}
		},

		app.vars = {
			EU:"https://eu-bns.ncsoft.com/ingame/bs/character/search/info",
			NA:"https://na-bns.ncsoft.com/ingame/bs/character/search/info",
			activePage: "Europe"
		},

		app.events = {
			init: function(){
				this.clickNav();
			},

			clickNav: function(){
				$( "nav ul li a.europe" ).click(function() {
  					app.vars.activePage = "Europe";
  					app.actions.init();
				});

				$( "nav ul li a.north-america" ).click(function() {
  					app.vars.activePage = "North-America";
  					app.actions.init();
				});
			}

		},

		app.actions = {
			init: function(){
				this.switchPage();
				this.menuFocus();
			},

			switchPage: function(){
				if (app.vars.activePage == "Europe"){
					$("iframe").attr("src", app.vars.EU);
				} else {
					$("iframe").attr("src", app.vars.NA);
				}
				console.log(app.vars.activePage);
			},

			menuFocus: function(){
				if (app.vars.activePage == "Europe"){
					$("nav ul li a.europe").addClass("focus");
					$("nav ul li a.north-america").removeClass("focus");
				} else {
					$("nav ul li a.north-america").addClass("focus");
					$("nav ul li a.europe").removeClass("focus");
				}
			}
		}

		app.controller.init();

	}());
});
