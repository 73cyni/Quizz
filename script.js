const data = [
    {question:"2*3-4+6/3+1-5",answers:"0",choice:{one:"-3",two:"-2.67",three:"0",four:"1"}},
    {question:"0.9999... เท่ากับอะไร",answers:"1",choice:{one:"0.9999",two:"0.9998...",three:"1",four:"0.9"}},
    {question:"2*2/2",answers:"2",choice:{one:"0",two:"2",three:"4",four:"8"}},
    {question:"ธาตุอะไรเบาที่สุด",answers:"H",choice:{one:"H",two:"Fe",three:"Cl",four:"Ca"}},
    {question:"ธาตุที่มีมากที่สุดในเปลือกโลก",answers:"O",choice:{one:"Fe",two:"O",three:"Ca",four:"H"}}
]

const question = document.getElementById("head");
const quiz_1 = document.getElementById("quiz-1");
const quiz_2 = document.getElementById("quiz-2");
const quiz_3 = document.getElementById("quiz-3");
const quiz_4 = document.getElementById("quiz-4");

window.addEventListener("load",Chang)

let index = 0;
let point = 0;

function next(x) {
    switch(x) {
        case 'a':
            if(quiz_1.innerHTML === data[index].answers) {
                point+=1;
            } else {
                point+=0;
            }
            break;
        case 'b':
            if (quiz_2.innerHTML === data[index].answers) {
                point+=1;
            } else {
                point+=0;
            }
            break;
        case 'c':
            if (quiz_3.innerHTML === data[index].answers) {
                point+=1;
            } else {
                point+=0;
            }
            break;
        case 'd':
            if (quiz_4.innerHTML === data[index].answers) {
                point+=1;
            } else {
                point+=0;
            }
            break;
    }
    index+=1;
    if(index==5) {
        document.getElementById("quiz").style.display = "none";
        question.innerHTML = point+"/5"
        document.getElementById("bt").style.display = "block"
    } else {
        Chang();
    }
}

function Chang() {
    question.innerHTML = data[index].question;
    quiz_1.innerHTML = data[index].choice.one;
    quiz_2.innerHTML = data[index].choice.two;
    quiz_3.innerHTML = data[index].choice.three;
    quiz_4.innerHTML = data[index].choice.four;
}

document.getElementById("bt").addEventListener("click",function(){
    index = 0;
    point = 0;
    Chang();
    document.getElementById("quiz").style.display = "grid"
    document.getElementById("bt").style.display = "none";
})





