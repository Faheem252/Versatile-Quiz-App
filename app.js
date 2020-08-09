var questionArray = [
    {
    question:"Q1. Who is the inventor of JavaScript",
    answer:" Brendan Eich",
    options: [
        "(a) Dennis Ritche",
        "(b) Brendan Eich",
        "(c) Noor Gul",
        "(d) Imran khan"
    ]
},
    {
        question:"Q2. Who is the founder of Pakistan",
        answere:"Quid-e-azam",
        options:[
            "(a) Allama iqbal",
            "(b) Ali jinah",
            "(c) Molana Mohammad ali joh", 
            "(d) Quaid-e-azam"
        ]
    },
    {
        question:"Q3. Who is the founder of Computer",
        answere:"Charles Babbage",
        options:[
            "(a) Chris li",
            "(b) bruce li",
            "(c) Laddan jafri",
            "(d) Charles Babbage"
        ]
    },
    {
        question:"Q4. Who is the CEO of Google",
        answere:"Sundar pichae",
        options:[
            "(a) Sundar pichae",
            "(b) Ertugrul bhai",
            "(c) Laddan jafri",
            "(d) Zameer akhter"
        ]

    }
]

function showQuestion(e){
    var qustionElement = document.getElementById("qustionElement");
    qustionElement.innerHTML = questionArray[e].question;
    var optionElement = document.getElementsByClassName("optionElement");
    for(var i = 0;i< optionElement.length;i++){
      optionElement[i].innerHTML = questionArray[e].options[i] 
    }
}
  var questionCount = 0;
  var score = 0;
function nextQuestion(){
 questionCount++;
 validate(questionCount);
 showQuestion(questionCount);
 removeActiveClass();
}

function putActiveClass(e){
    removeActiveClass()
    e.classList.add("active")
}
function removeActiveClass(){
    var active = document.getElementsByClassName("active");
    for(var i= 0; i<active.length;i++){
        active[i].classList.remove("active")
    }
}
function validate(e){
    var active = document.getElementsByClassName("active");
    if(active[0].innerHTML === questionArray[e].answer){
        score += 10;
    }
}
