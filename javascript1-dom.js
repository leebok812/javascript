/* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
window.addEventListener("load", function(){
    var txtX = document.getElementById('txt-x'); 
    var txtY = document.getElementById('txt-y'); 
    var txtAdd = document.getElementById('btn-add'); 
    var txtSum = document.getElementById('txt-sum'); 
  
      

    txtAdd.onclick =  function ()  { //익명함수를 대입함. 이벤트 연계
   
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y; // 위에서 parseInt로 숫자화 한것을 다시 txtSum에 넣어줄때는 자동으로 문자화 된다.

   
    };
})