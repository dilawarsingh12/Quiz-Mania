const questions=[
    {
        'que':'which langusge is hyper text markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'javascript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'what year was javascript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of these',
        'correct':'b'
    },
    {
        'que':'what does CSS stands for?',
        'a':'Hypertext Markup Language',
        'b':'Cascading Style Sheet',
        'c':'jason object notation',
        'd':'helicopter terminals motorboats lamborginis',
        'correct':'b'
    }
]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll('.options');
const loadquestion=()=>{
    reset();
    if(index==total)
    {
        return endQuiz();
    }
    console.log('ASDAD');
    const data=questions[index];
    quesBox.innerText=` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    console.log(ans);
    if(ans===data.correct)
    {
        right++;
    }
    else
    wrong++;
    index++;
    loadquestion();

}

function getAnswer(){
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked)
        answer=input.value;
    })
    return answer;
}
function reset(){
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=
    `<h2> quiz completed <h2>
    <h3> your correct questions are ${right} <h3>
    <h3> your wrong questions are ${wrong} <h3>`
}
loadquestion();