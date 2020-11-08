const logotipo = document.querySelector('.logotipo');
const btnSwitch = document.querySelector('.switch');
let menuFixed = document.querySelector('.menuFixed')
let resetMenu = document.querySelector('.cont-menu')
let activeMin = document.querySelector('.activeMin');
let defaultMin = document.querySelector('.defaultMin')
let toggleDark = document.querySelector('.allowDark');
let darkTl = document.querySelector('.darkTl');
let savePre = document.querySelector('.guardarAlLocal')
let levelSave = document.querySelector('.levelSave')
let getLevels = document.querySelector('.containLvl')
let lvlSave = document.querySelector('.levelsSave')
let iconHome = document.querySelector('#iconMain')
let iconGame = document.querySelector('#iconGame')
let iconConfig = document.querySelector('#iconConfig')
let guardarLocal = document.querySelector(".guardarAlLocal button")
let mobileOn = document.querySelector('.mobileOn')
let btnLeave = document.querySelector('.abandonar')
let textSave = document.querySelector('#textSave')
let quizNameStorage = []

function darkMode(){
		document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	toggleDark.classList.toggle("darkAllow")
	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
	allowDark()
}	

function allowDark(){
	if (toggleDark.classList.contains("darkAllow")){
		toggleDark.removeAttribute("style")
		darkTl.style.display = "none"
	
	}else{
		toggleDark.style.display = "none"
		darkTl.removeAttribute("style");
	}
}

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
		toggleDark.classList.toggle("darkAllow")
		allowDark()
	
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
	
}

//Ocultar el HomePage al dar click a jugar
let btnGame = document.querySelector('#btn-play-game');

btnGame.addEventListener('click', ()=>{
		document.body.classList.toggle('bg-play');
		btnGame.classList.toggle('bg-play-active');
		mainCard.style.display = "none"
		btnToggle.removeAttribute("style")
		
	mostrar()
		menuFixed.style.display = "none"
	
});
//Mostrar el boton de Salir al quiz cuando se oculta el HomePage
let noHide = document.querySelector('#visibility');

function mostrar (){
	noHide.removeAttribute("style");
	noHide.classList.add("noVisi");
}

function pageHome (){
	document.body.classList.toggle('bg-play');
	mainCard.style.display  = "block"
	noHide.style.display = "none"
	document.querySelector('.cont-menu').classList.remove('sideLvl');
	btnToggle.classList.remove("rotate");
	btnToggle.style.display = "none"
	uploadView.style.display = "none"
	savePre.classList.remove("localBtn")
	mobileOn.classList.remove("mobileHide")  
	if(screen.width < 701){
		menuFixed.style.display = "flex"
	}
	exitquiz()
	leavequiz()
	resultBox.classList.add("hide");
	homeBox.classList.remove("hide")
}

let upload = document.querySelector('#uploadQuiz');
let uploadView = document.querySelector('.upload');

upload.addEventListener("click",()=>{
	uploadView.style.display = "flex"
	getLevels.style.display = "none"
	resetMenu.classList.toggle("sideLvl")
	rotate()
})

let closeUpload = document.querySelector('.closeUpload');

closeUpload.addEventListener("click",()=>{
	uploadView.style.display = "none"
})

let questionUp = document.querySelector('#insertQues');

questionUp.addEventListener("click",function(){
	let quizSave = prompt('Ingrese un nombre para su quiz'," ");
	let quizSaveName = quizSave 
	
		if (quizSave.length > 0){
		
			let maxQuestion = prompt("ingrese el numero de preguntas que tendrá su quiz")
							
			let qToQuiz = [];
			let aToQuiz = [];
			let bToQuiz = [];
			let cToQuiz = [];
			let dToQuiz = [];
			let eToQuiz = [];
						
			let cont = "";
			let x;
							
			if(maxQuestion != NaN){		
								
				for (i = 1; i<= maxQuestion; i++){
					x = prompt ("ingrese una pregunta","")
					y = prompt ("ingrese respuesta Correcta")
					b = prompt ("ingrese respuesta opcional(Debe ser Erronea)")
					c = prompt ("ingrese respuesta opcional(Debe ser Erronea)")
					d = prompt ("ingrese respuesta opcional(Debe ser Erronea)")
							
					qToQuiz.push(x)
					aToQuiz.push(y)
					bToQuiz.push(b)
					cToQuiz.push(c)
					dToQuiz.push(d)
					}
										
					for (i = 1;i <= maxQuestion;i++){
						cont += qToQuiz[i] + " ";		
						cont += aToQuiz[i] + " ";
						cont += bToQuiz[i] + " ";
						cont += cToQuiz[i] + " ";
						cont += dToQuiz[i] + " ";
										
						let quizSave = []	
		
					for (i  = 0;i < maxQuestion; i++){
												
						quizSave.push({
						q:qToQuiz[i],
						options:[aToQuiz[i],bToQuiz[i],cToQuiz[i],dToQuiz[i]],
						answer:0
						})
					}

					savePre.classList.add("localBtn")
					uploadView.style.display = "none"
					localStorage.setItem(quizSaveName, JSON.stringify(quizSave));
					quizNameStorage.push(quizSaveName)
				}
							
		if(maxQuestion.length > 0 ){
			const btnSave = quizSaveName	
			
			localStorage.setItem("getNameForQuiz",JSON.stringify(quizNameStorage))	
			let getNameForLocal = localStorage.getItem("getNameForQuiz")
			let	getParseName = JSON.parse(getNameForLocal)
			guardarLocal.addEventListener("click",function(){
			lvlSave.removeChild(levelSave)
					//let parseNameLength = getParseName.length
					if(document.querySelector(".levelSave")){
						
						for(i=0;i<getParseName.length;i++){
						let btnSave = document.createElement("button")
							btnSave.classList.add("levelSave")
							btnSave.innerHTML = "ejemplo1"
							console.log(btnSave)
							getLevels.appendChild(btnSave)	
						}
						console.log("1")
					}else{
						for(i=0;i<getParseName.length;i++){
						let btnSave = document.createElement("button")
							btnSave.classList.add("levelSave")
							btnSave.innerHTML = "ejemplo1"
							console.log(btnSave)
							getLevels.appendChild(btnSave)	
						}
						console.log("2")
					}
					
				textSave.innerHTML = 'Su quiz se ha guardado con Exito!, encuentralo en la pestaña niveles'
					/*
					
					localStorage.setItem('darkos',quizSaveName)
					getLevels.appendChild(btnSave)*/
					
				/*	btnSave.addEventListener("click",function nasa(){
						
					let quizGuardadoSave = localStorage.getItem("adrian");
				// Se parsea para poder ser usado en js con JSON.parse :)
					quizGuardado = JSON.parse(quizGuardadoSave);
					quiz = quizGuardado 
				 //console.log(arrayEjemplo)		
				 
			for (let i=0;i<quiz;i++){
				availableQuestions.push(quiz[i])
				}
				
			savePre.style.display = "none"
			document.querySelector(".total-quiz").innerHTML = "Fase prueba";
			homeBox.querySelector(".total-questions").innerHTML = quiz.length;
			document.querySelector('.cont-menu').classList.toggle('sideLvl');
			resultBox.classList.add("hide");
			homeBox.classList.remove("hide");								
			answersIndicator();
			goToHome()	 											
})	
					quiz = quizSave 
					
					document.querySelector(".total-quiz").innerHTML = quizSave;
					homeBox.querySelector(".total-questions").innerHTML = quizSave.length;
					document.querySelector('.cont-menu').classList.remove('sideLvl');
						
					answersIndicator();
					goToHome()	 
								
					for (let i=0;i<quizSave;i++){
					availableQuestions.push(quiz5[i])
					resultBox.classList.add("hide");
					homeBox.classList.add("hide");	
					break
							}
	resultBox.classList.add("hide");
	homeBox.classList.add("hide");		 */					
	
})		
	resultBox.classList.add("hide");
	homeBox.classList.add("hide");							
							}else if(maxQuestion.length < 1){
								alert("ingrese un numero")
							}
						}
}	
})

window.onload = function(){
    // Checar que en el local storage no exista algo que evite que se muestre
    if ("getNameForQuiz" in localStorage) {
     //let darkos = localStorage.getItem('getNameForLocal')
	let onClickBtn = document.getElementsByClassName("levelSave")
	let getNameForLocal = localStorage.getItem("getNameForQuiz")
	let	getParseName = JSON.parse(getNameForLocal)
	
	//let arrayNameToString = getParseName.toString()
	

		for(i=0;i<getParseName.length;i++){
			let btnSave = document.createElement("p")
			btnSave.classList.add("levelSave")
			btnSave.innerHTML = getParseName[i]
			getLevels.appendChild(btnSave)
				
		let quizGuardadoSave = localStorage.getItem(getParseName[i]);
		let quizGuardado = JSON.parse(quizGuardadoSave);
	
	onClickBtn[i].onclick = function(){
		console.log(quizGuardado)
		quiz = quizGuardado
		
		for (let i=0;i<quiz;i++){
			availableQuestions.push(quiz[i])
		}
		
		savePre.style.display = "none"
		document.querySelector(".total-quiz").innerHTML = "prueba";
		homeBox.querySelector(".total-questions").innerHTML = quiz.length;
		document.querySelector('.cont-menu').classList.toggle('sideLvl');
		resultBox.classList.add("hide");
		homeBox.classList.remove("hide");												
		answersIndicator();
		goToHome()	
		mobileOn.classList.remove("mobileHide")		
		 
	
		//btnToggle.classList.remove("rotate")
		
		/*for (let i=0;i<quiz;i++){
			availableQuestions.push(quiz[i])
		}
				*/
		}			
		}
	
		
	
		
	} else{

	} 
}

function startQuizSave(){
	
}

let opt4 = document.querySelector('.opt4');
let opt4Hide = document.querySelector('.opt4Hide');
let closeOpt = document.querySelector('.closeOpt');

opt4.addEventListener('click',()=> {
	opt4Hide.style.display = "block"	
})

closeOpt.addEventListener("click",()=>{
	opt4Hide.style.display = "none"
})

let viewGuia = document.querySelector('#viewGuia')
let hideGuia = document.querySelector('.pdf')
let closePdf = document.querySelector('.closePdf')

viewGuia.addEventListener('click',()=>{
	hideGuia.style.display = "flex"
	resetMenu.classList.toggle("sideLvl")
	rotate()
})

closePdf.addEventListener('click',()=>{
	hideGuia.style.display = "none"
})

let minCard = document.querySelector('.main-min');

/*"tap swipe doubletap press panleft panright"*/
if(screen.width < 701){

let moveMinPage = new Hammer(document.getElementById("min-page"))
	moveMinPage.on('swipeleft',function(ev) {
	
	iconHome.classList.remove("iconDark")
	iconGame.classList.add("iconDark")
	minPage.style.position="absolute"
	minPage.style.top="-9999px"
	mainCard.style.position="relative";
	mainCard.style.top="0px"
	mainCard.style.display = "block"

	
	})
	
	function iconDark(){
		
	}
	
let moveMinCard = new Hammer(document.getElementById("mainMin"))
	moveMinCard.on('swiperight',function(ev) {
		
		/*mainCard.style.display = "block"*/
		iconHome.classList.add("iconDark")
		iconGame.classList.remove("iconDark")
		minPage.style.position="relative"
		minPage.style.top="0"
		mainCard.style.position="absolute";
		mainCard.style.top="-9999px"
	})
	
	moveMinCard.on('swipeleft',function(ev) {
			iconGame.classList.remove("iconDark")
			iconConfig.classList.add("iconDark")
			mainCard.style.position="absolute";
			mainCard.style.top="-9999px"
			minConfig.removeAttribute("style")
	})
		
let moveMinConfig = Hammer(document.getElementById("configMin"))
	moveMinConfig.on('panright',function(ev) {
		
	iconConfig.classList.remove("iconDark")
	iconGame.classList.add("iconDark")
	mainCard.style.position="relative";
	mainCard.style.top="0px"
	mainCard.style.display = "block"
	minPage.style.position="absolute"
	minPage.style.top="-9999px"
	minConfig.style.position="absolute"
	minConfig.style.top="-9999px"
		
	})		
}

let minPage = document.querySelector(".min-page");
let mainCard = document.querySelector('.main');
let minConfig = document.querySelector('.config-min');

function screenGame(){
	mainCard.style.position="relative";
	mainCard.style.top="0px"
	mainCard.style.display = "block"
	minPage.style.position="absolute"
	minPage.style.top="-9999px"
	minConfig.style.position="absolute"
	minConfig.style.top="-9999px"
	iconHome.classList.remove("iconDark")
	iconGame.classList.add("iconDark")
	iconConfig.classList.remove("iconDark")
	
	if(document.body.classList.contains("bg-play")){
		pageHome()
	}
}

function screenMain(){
	mainCard.style.position="absolute";
	mainCard.style.top="-9999px"
	minPage.style.position="relative"
	minPage.style.top="0"
	minConfig.style.position="absolute"
	minConfig.style.top="-9999px"
	iconHome.classList.add("iconDark")
	iconGame.classList.remove("iconDark")
	iconConfig.classList.remove("iconDark")
	
	
	if(document.body.classList.contains("bg-play")){
		pageHome()
	}
}

function screenConfig(){
	mainCard.style.position="absolute";
	mainCard.style.top="-9999px"
	minPage.style.position="absolute"
	minPage.style.top="-9999px"
	minConfig.removeAttribute("style")
	iconConfig.classList.add("iconDark")
	iconHome.classList.remove("iconDark")
	iconGame.classList.remove("iconDark")
	
	
	if(document.body.classList.contains("bg-play")){
		pageHome()
	}
}

// sidebar toggle
const btnToggle = document.querySelector('.icon-menu');

btnToggle.addEventListener('click', function () {
	
	document.querySelector('.cont-menu').classList.toggle('sideLvl');
  
});

let resetPadding = document.querySelector('.cont-menu button')

function rotate(){
	btnToggle.classList.toggle("rotate");
}

let containSide = document.querySelector('.containSide')
let arrowBack = document.querySelector('.arrow-back')

function getLvls(){
	getLevels.removeAttribute("style");
	containSide.style.display = "none"
	containSide.classList.toggle("containSide");
	resetMenu.style.width = "45%"
	

}

function hideLvls(){
	getLevels.style.display = "none"
	containSide.removeAttribute("style")
	resetMenu.style.width = "40%"
}

let online = document.querySelector('.online')
let contMult = document.querySelector('.containMult')
let customBox = document.querySelector('.custom-box')
let oneOne = document.querySelector('.oneOn')

online.addEventListener('click',function(){
	contMult.removeAttribute("style")
	containSide.style.display = "none"
	
})

function hideContMult(){
	containSide.removeAttribute("style")
	contMult.style.display = "none"
}

oneOne.addEventListener('click',function(){
	homeBox.classList.add("hide")
	resultBox.classList.add("hide")
	resetMenu.classList.toggle("sideLvl")
	mobileOn.classList.add("mobileHide")
	btnToggle.classList.remove("rotate")
})

let players = document.querySelector(".players")
let playersGame = document.querySelector(".playersGame")
let onliStart = document.querySelector(".onliStart")
let viewNames = document.getElementsByClassName("saveNames")

players.addEventListener('click',function(){
	let name = prompt ("ingrese los nombre de los jugadores","")
	let saveNames = []
	let classSave = document.getElementsByClassName('saveNames')
	let cont = ''
	
	if (name === null || name === "" || name == false ){
		alert("ingrese un nombre")
	}else{
		let newName = document.createElement("p")
		let newIconDelet = document.createElement("span")
		
		newName.classList.add("saveNames")
		newName.innerHTML = name + `<i class="fas fa-trash-alt"></i>`
		playersGame.appendChild(newName)
	
		newName.onclick = function(){
			playersGame.removeChild(newName)
		}	
		
	
		onliStart.addEventListener("click",function(){
			console.log(viewNames.length)
			
			for (i = 0;i < viewNames.length;i++){
				saveNames.push(name)
			}
			
			for (i = 0;i < viewNames.length;i++){
				cont += saveNames[i] + " ";
			}
			
			
			console.log(saveNames)

		})		
	}
	
})

	/*const namesLocal = aleaNames[Math.floor(Math.random() * availableQuestions.length)]

		questionText.innerHTML = currentQuestion.q;
		// obtener una pregunta aleatoria de 'questionIndex' del arreglo disponible
		const index1= availableQuestions.indexOf(questionIndex);
		//remover el 'questionIndex' del arreglo availableQuestions, para que no se repita la pregunta
		availableQuestions.splice(index1,1);
	
	
	let names = document.createElement("p")
	names.innerHTML = "Adrian"
	let headerquiz = document.querySelector(".header-quiz")
	headerquiz.appendChild(names)
		
  quiz = modoLocal
	mobileOn.classList.remove("mobileHide")
		savePre.classList.remove("localBtn")
		for (let i=0;i<quiz;i++){
		availableQuestions.push(quiz[i])
	}
	document.querySelector(".total-quiz").innerHTML = "Online Local";
	resultBox.classList.add("hide");
	homeBox.classList.remove("hide");
	homeBox.querySelector(".total-questions").innerHTML = quiz.length;

	goToHome()
	btnToggle.classList.remove("rotate")
	
*/	/*)*/

	
