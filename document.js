const pagetopBtn = document.querySelector('#page-top');

pagetopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});


//円グラフ
let pieData = {
    labels:['誘導無し',
            '誘導有り'
            ],
    series:[29,6]
};

let pieOptions = {
    width:'100%',
    height:'440px'
};

new Chartist.Pie('.pie-chart',pieData,pieOptions);

//円グラフ
let piepieData = {
  labels:['前進中',
　　　　　 '後退中',
          'その他'
          ],
  series:[19,10,14]
};

let piepieOptions = {
  width:'100%',
  height:'440px'
};

new Chartist.Pie('.piepie-chart',piepieData,piepieOptions);



//棒グラフ
new Chartist.Bar('.ct-chart', {
  labels: ['前進', '後退', 'その他',],
  series: [
    [17,6,12],
    [2,4,2]
  ]
}, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value / 1 + '');
    }
  }
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 60px'
    });
  }
});

//車両別棒グラフ//
var barData = {
  labels: ['救急車','ポンプ車','防災パトロール車','指揮車','その他'],
  series: [[15,13,4,3,9]]
};

var barOptions = {
  axisY:{
  offset: 60,
  scaleMinSpace: 50,
  labelInterpolationFnc: function(value){
    return value + '件'
  }
},
width: '100%',
height: '250px'
};
new Chartist.Bar('.bar-chart',barData,barOptions);


//対物棒グラフ//
var barData = {
  labels: ['車両','動物','物、塀など（敷地内）','物、塀など（敷地外）'],
  series: [[13,2,16,12]]
};

var barOptions = {
  axisY:{
  offset: 60,
  scaleMinSpace: 50,
  labelInterpolationFnc: function(value){
    return value + '件'
  }
},
width: '100%',
height: '250px'
};
new Chartist.Bar('.barbar-chart',barData,barOptions);

/*ポップアップ*/

const image1 = document.getElementById('js_trigger');
    let stat = false;

    image1.addEventListener('mouseover',function () {
      //
      if(stat) {
        image1.classList.add('off');
        image1.classList.remove('on');
      } else {
        image1.classList.add('on');
        image1.classList.remove('off');
      }
      stat = !stat;
    })

//ラインチャート
new Chartist.Line('.line-chart', {
    label:'月別出場件数',
    labels: ['0時','1時','2時','3時','4時','5時','6時','7時','8時','9時','10時',
    '11時','12時','13時','14時','15時','16時','17時','18時','19時','20時','21時','22時','23時'],
    series: [
      [0,0,0,2,1,0,2,1,3,4,5,2,1,3,5,3,4,3,2,1,1,0,1,0,0]
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 100
    }
  });
  let lineOptions = {
    width:string,
    height:'300px'
};
new Chartist.Line('.line-chart',lineOptions);
