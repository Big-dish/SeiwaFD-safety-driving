window.alert('クイズをスタートしてよろしいですか？');　

const quiz = [
  {
    question:'最も事故が多かった『進行方向』はどれ？',
    answers:[
      '前進中',
      '後退中',
      '停車中',
      'その他'
    ],
    correct: '前進中'
  },{
    question:'最も事故が多かった『時間帯』はどれ？',
    answers:[
      '９～１１時',
      '１３～１５時',
      '１７～１９時',
      '２２～２４時'
    ],
    correct: '９～１１時'
  },{
    question:'最も事故が多かった『時間帯』はどれ？',
    answers:[
      '０～６時',
      '６～１２時',
      '１２～１８時',
      '１８～２４時'
    ],
    correct: '１２～１８時'
  },{
    question:'ポンプ車走行時、安全なオーバーハング幅は？',
    answers:[
      '３０ｃｍ',
      '４５ｃｍ',
      '６０ｃｍ',
      '１００ｃｍ'
    ],
    correct: '４５ｃｍ'
  },{
    question:'救急車とポンプ車で、全体の事故の『おおよそ何％』を占めるか？',
    answers:[
      '４０％以上',
      '６０％以上',
      '８０％以上',
      '１００％'
    ],
    correct: '６０％以上'
  },{
    question:'最も事故が多かったパターンはどれ？',
    answers:[
      '前進中、誘導なし',
      '前進中、誘導あり',
      '後退中、誘導なし',
      '後退中、誘導あり'
    ],
    correct: '前進中、誘導なし'
  },{
    question:'最も事故が多かった『相手方』は？',
    answers:[
      '車両',
      '物、塀など(敷地内)',
      '物、塀など(敷地外)',
      '動物'
    ],
    correct: '物、塀など(敷地外)'
  },{
    question:'誘導無しで事故に至ったケースは全体の『おおよそ何％』を占めるか？',
    answers:[
      '３０％',
      '５０％',
      '８０％',
      '１００％'
    ],
    correct: '８０％'
  },{
    question:'前進中の事故の内、最も多かった『原因』はどれ？',
    answers:[
      '不注意',
      '狭隘',
      '対向',
      '追越し'
    ],
    correct: '不注意'
  },{
    question:'最も多かった『破損個所』はどれ？',
    answers:[
      '運転席側',
      '助手席側',
      '前',
      '後ろ'
    ],
    correct: '後ろ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button =  document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題を選択し定義
const setupQuiz = () => { 
  document.getElementById('js-question') .textContent = quiz[quizIndex].question; 
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){  
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題がまだあればこちらを実行
    setupQuiz();
  }else{
    //問題がもうなければこちらを実行
    window.alert('お疲れ様でした。！あなたの正解数は' + score + '/' + quizLength + 'です！');
    window.addEventListener('click',function(){
      let newwin = window.open("file:///C:/Users/0975/Desktop/11%E6%9C%88%E5%88%86%E5%80%AB%E7%90%86%E7%A0%94%E4%BF%AE/source%20class/class.html");
    })
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
handlerIndex++;

      
  
  

}

