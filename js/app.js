// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'auto',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/hombres/',
    	url: 'hombres.html',
    	name: 'hombres',
  		},
	],
	dialog: {
		title: 'Adidas',
		buttonOk: 'Aceptar',
		buttonCancel: 'Cancelar'
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnComprar_', function (e) {
	e.preventDefault();


	
});





