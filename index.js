/* window.onload = function (){  test.js의 onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 사용*/  
window.addEventListener("load", function(){
    var btnPrint = document.getElementById('btn-Print'); 
  
           var add =function(x,y){ // 이런식으로 안쪽에 추가 할 수도 있다. (지역화 시킴)
                   return x + y;
           };


    btnPrint.onclick =  function ()  { //익명함수를 대입함. 이벤트 연계
   
   //var btnPrint = document.getElementById('btn-Print'); //위에서 준비했기에 또 따로 준비 할 필요가 없다.
   
   var x = prompt("x 값을 입력하세요",0);
   var y = prompt("y 값을 입력하세요",0);
   
   x = parseInt(x);
   y = parseInt(y);
   
   btnPrint.value = x+y;
    };
})