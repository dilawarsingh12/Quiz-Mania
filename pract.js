let difficulty_level;
let ctg;
let limit;
firstpage();
function firstpage()
{
    document.getElementById("box").innerHTML=`
    <h2 id="quesBox">Choose your difficulty level</h2>
            <div class="row">
                <input class="options" id="option1" type="radio" value="a" name="option"/>
                <label for="option1">Hard</label>
            </div>
            <div class="row">
                <input class="options" id="option2" type="radio" value="b" name="option"/>
                <label for="option2">Medium</label>
            </div>
            <div class="row">
                <input class="options" id="option3" type="radio" value="c" name="option"/>
                <label for="option3">Easy</label>
            </div>
            <button class="btn" onclick="submitDifficulty()">
            SubmitDifficulty
            </button>`;
}
let optionInputs;

function submitDifficulty(){
    $(".btn").fadeIn(100).fadeOut(100).fadeIn(100);
     difficulty_level=getDifficulty();
     if(difficulty_level=="a")
     difficulty_level="Hard";
     else if(difficulty_level=="b")
     difficulty_level="Medium";
     else{
        difficulty_level="Easy";
     }
     setTimeout(() => {
        category();
     }, 1000);
}

function getDifficulty(){
    let answer;
    optionInputs=document.querySelectorAll('.options');
    optionInputs.forEach((input)=>{
        if(input.checked)
        answer=input.value;
    })
    return answer;
}
function category(){
    document.getElementById("box").innerHTML=`
    <h2 id="quesBox">Choose your category</h2>
            <div class="row">
                <input class="options" id="option1" type="radio" value="a" name="option"/>
                <label for="option1">Linux</label>
            </div>
            <div class="row">
                <input class="options" id="option2" type="radio" value="b" name="option"/>
                <label for="option2">DevOps</label>
            </div>
            <div class="row">
                <input class="options" id="option3" type="radio" value="c" name="option"/>
                <label for="option3">SQL</label>
            </div>
            <div class="row">
                <input class="options" id="option4" type="radio" value="d" name="option"/>
                <label for="option3">Docker</label>
            </div>
            <button class="btn" onclick="submitCategory()">
            SubmitCategory
            </button>
    `;

}
function submitCategory(){
    $(".btn").fadeIn(100).fadeOut(100).fadeIn(100);
    ctg=getCategory();
    if(ctg=="a")
    ctg="Linux";
    else if(ctg=="b")
    ctg="DevOps";
    else if(ctg=="c")
    ctg="SQL";
    else {
        ctg="Docker";
    }
    // console.log(ctg);
    setTimeout(() => {
        setLimit();
    }, 1000);
}
function getCategory(){
    let answer;
    optionInputs=document.querySelectorAll('.options');
    optionInputs.forEach((input)=>{
     if(input.checked){
        answer=input.value;
     }
    })
    return answer;
}
function setLimit(){
    document.getElementById("box").innerHTML=`
    <h2 id="quesBox">Set Limit</h2>
            <div class="row">
                <input class="options" id="option1" type="radio" value="a" name="option"/>
                <label for="option1">5</label>
            </div>
            <div class="row">
                <input class="options" id="option2" type="radio" value="b" name="option"/>
                <label for="option2">10</label>
            </div>
            <div class="row">
                <input class="options" id="option3" type="radio" value="c" name="option"/>
                <label for="option3">15</label>
            </div>
            <div class="row">
                <input class="options" id="option4" type="radio" value="d" name="option"/>
                <label for="option3">20</label>
            </div>
            <button class="btn" onclick="submitLimit()">
            SetLimit
            </button>
    `;
}
function submitLimit(){
    $(".btn").fadeIn(100).fadeOut(100).fadeIn(100);
    limit=getLimit();
    if(limit=="a")
    limit="5";
    else if(limit=="b")
    limit="10";
    else if(limit=="c")
    limit="15";
    else if(limit=="d")
    limit="20";
    setQuestion();
}

function getLimit(){
    let answer;
    optionInputs=document.querySelectorAll('.options');
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer=input.value;
        }
    })
    return answer;
}
let i=0;
let score=0;
let f=0;
const s=new Set();
function setQuestion(){
    if(i==limit)
    {
        return exitQuiz();
    }
    if(f==1)
    submitques();
    f=1;
    function submitques(){
        $(".btn").fadeIn(100).fadeOut(100).fadeIn(100);
        optionInputs.forEach((input)=>{
            if(input.checked)
            {
                if(s.has(input.value))
                score++;
            }
        })
    }
    // s.clear();
    const url="https://quizapi.io/api/v1/questions?apiKey=kRtTWE7hhxupSoNKjM93ZmTro2GcGDAs3gWV0UBa&category="+ctg+"&difficulty="+difficulty_level+"&limit="+toString(15);
    fetch(url)
    .then(res =>  res.json())
    .then((data) => {   
        console.log(data);
        let score=0;
        document.getElementById("box").innerHTML=` 
        <h2 id="quesBox">Set Limit</h2>
        <h3 id="choice"></h3>
        <div class="row">
            <input class="options" id="option1" type="radio" value="a" name="option"/>
            <label for="option1">5</label>
        </div>
        <div class="row">
            <input class="options" id="option2" type="radio" value="b" name="option"/>
            <label for="option2">10</label>
        </div>
        <div class="row">
            <input class="options" id="option3" type="radio" value="c" name="option"/>
            <label for="option3">15</label>
        </div>
        <div class="row">
            <input class="options" id="option4" type="radio" value="d" name="option"/>
            <label for="option3">20</label>
        </div>
        <button class="btn" onclick="setQuestion()">
            SubmitQuestion
        </button>
`;      

        const quest=data[i].question;
        document.getElementById("quesBox").innerText=`${i+1})${quest}`;
        optionInputs=document.querySelectorAll('.options');
        optionInputs[0].nextElementSibling.innerText=data[i].answers.answer_a;
        optionInputs[1].nextElementSibling.innerText=data[i].answers.answer_b;
        optionInputs[2].nextElementSibling.innerText=data[i].answers.answer_c;
        optionInputs[3].nextElementSibling.innerText=data[i].answers.answer_d;
        if(data[i].correct_answers.answer_a_correct=="true")
        s.add("a");
        if(data[i].correct_answers.answer_b_correct=="true")
        s.add("b");
        if(data[i].correct_answers.answer_c_correct=="true")
        s.add("c");
        if(data[i].correct_answers.answer_b_correct=="true")
        s.add("d");
        // console.log(s.size);
        i++;
    });
}
function exitQuiz(){
    document.getElementById("box").innerHTML=`<h2 class="end1"> Your score is ${score}</h2>
    <h1 class="end2"> Thanku for choosing our platform </h1>`;
    document.getElementById("box").style.backgroundColor="orange";
}

