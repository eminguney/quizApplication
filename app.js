function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;    
 }
 
//Question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

//Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

//Quiz prototype++
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

var q1 = new Question("what's the best language?",
["javascript","c++","python","asp"], "javascript");


var q2 = new Question("what's the most language?",
["javascript","c++","python","asp"], "javascript");


var q3 = new Question("what's the best modern language?",
["javascript","c++","python","asp"] , "javascript");

var questions = [q1,q2,q3];

//start quiz

var quiz = new Quiz(questions);
loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for(var i=0; i<choices.length; i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+ i,choices[i]);
        }
    }
}

function guess(id,guess){
    var btn= document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore(){
    var html= `<h2>Your Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML = html;
}

