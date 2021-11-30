function makeMadLib() {
	let noun = $('#noun').val();
	let adjective = $('#adjective').val();
	let name = $('#person').val();
		$('#story').append('<p>'+ 'The '+noun+' flew through the sky and looked '+adjective+' and hit '+ name + ' on the head! '+'</p>');

}

$('#lib-button').on('click', function(){
	makeMadLib();
});