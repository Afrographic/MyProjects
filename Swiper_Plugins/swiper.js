//Selecting the controls buttons
var next = document.querySelector('.main_swiper_area .controls .nextBox');
var preview = document.querySelector('.main_swiper_area .controls .prevBox');

//Getting the data
var data = initswiper.data;

//Initialising the display to the first item in the data list
var currentIndex = 0;


//displaying the data
function toogleValue(index){

	// if images
	if(initswiper.display_mode == 'images'){

		var img = document.createElement('img');
		img.src = data[index];
		img.classList.add('initswiper_img')

		var container = document.querySelector(initswiper.container);

		container.innerHTML = '';
		container.appendChild(img);

	}

	//is text
	if(initswiper.display_mode == 'text'){


		var container = document.querySelector(initswiper.container);

		container.innerHTML = data[index];

	}



}

//initilising the display
toogleValue(currentIndex);

//building the controls engine

next.onclick = function(){

	if( currentIndex == data.length - 1 ){

		if(initswiper.loop !== false){

			toogleValue(0);

			currentIndex = 0;

		}

	}else{

		toogleValue(currentIndex+1);
		currentIndex++;

	}
}

preview.onclick = function(){
	
	if( currentIndex == 0 ){

		if(initswiper.loop !== false){

			toogleValue(data.length - 1);

			currentIndex = data.length - 1;

		}

	}else{

		toogleValue(currentIndex-1);
		currentIndex--;

	}

}

if(initswiper.autoplay == true){

	if(initswiper.show_controls == false){
		next.parentNode.style.display = 'none';
	}

	setInterval(function(){

		next.click();

	},initswiper.delay);

}