const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];
let questionIndex=0
let score=0

let listHeader=document.querySelector('#header')
let listQuiz=document.querySelector('#list')
let submitBtn=document.querySelector('#submit')

function clear(){
	listHeader.textContent=""
	listQuiz.textContent=""
}
clear()

function addText(){
	listHeader.innerHTML=`<h2 class="title">${questions[questionIndex]['question']}</h2>`
	for(let i=0;i<questions[questionIndex]['answers'].length;i++){
		listQuiz.innerHTML+=`	<li>
		<label>
			<input value="${i}" type="radio" class="answer" name="answer" />
			<span>${questions[questionIndex]['answers'][i]}</span>
		</label>
	</li>`
	}
let arr=listQuiz.querySelectorAll('input[type=radio]')
listQuiz.querySelectorAll('li').forEach(item=>{
item.querySelector('input[type=radio]').addEventListener('click',(e)=>{
	if(+e.target.value==(questions[questionIndex]['correct']-1)){
		score++
		arr.forEach(item=>{
			item.disabled=true
		})
		questionIndex++
	}
	else{
		arr.forEach(item=>{
			item.disabled=true
		})
		questionIndex++
		
	}
})
})

}
addText()
function finishTest(){
	if(score==questions.length){
		listHeader.innerHTML=`<h2 class="title">Поздравляю вы прошли тест 👊🏿</h2>
		<h3 class="summary">Вы ответили на все вопросы </h3>
		<p class="result">${score} из  ${questions.length} 🤛🏿</p>`
	}
	else if(((score*100)/questions.length)>=50){
		listHeader.innerHTML=`<h2 class="title">Неплохо справились ✋🏿</h2>
		<h3 class="summary">Вы дали более половины ответов </h3>
		<p class="result">${score} из  ${questions.length} 🤛🏿</p>`
	}
	else{
		listHeader.innerHTML=`<h2 class="title">Стоит постаратсься 🖕🏿</h2>
		<h3 class="summary">Пока у вас меньше половины правильных ответов </h3>
		<p class="result">${score} из  ${questions.length} 🤛🏿</p>`
	}
}	

submitBtn.addEventListener('click',()=>{
	clear()
	if(questionIndex!==4){
	addText()
	}
	if(questionIndex==4){
		finishTest()
	}
})