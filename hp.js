var hp = $.get( "http://hp-api.herokuapp.com/api/characters").then(function(data){
 data.forEach(function(character){

 	console.log(character.name+" Maison: "+character.house);

 	$("#students").append('<div class="card" style="width: 18rem;"><img class="card-img-top" src="'+character.image+'" alt="'+character.name+'"><div class="card-body"><h5 class="card-title">'+character.name+'</h5><p class="card-text">Maison: '+character.house+'<br/> Date de Naissance :'+character.dateOfBirth+' <br/> Patronus: '+character.patronus+'<br/> Acteur: '+character.actor+'</p><a href="#" class="btn btn-primary">Profil</a></div></div>');
 });

});