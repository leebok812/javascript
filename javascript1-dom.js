            //EX1 : 계산기 프로그램
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
            });


            //EX2 : 엘리먼트 선택방법 개선하기
            /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
                window.addEventListener("load", function(){
                    var section2=document.getElementById('section2'); 
                
                    var txtX = section2.getElementsByClassName("txt-x")[0]; // [0]쓴 이유는 getElementsByClassName Elements 복수형 즉, 배열이기에 0번째 밖에 없겠지만 [0]을 써서 알려줘야한다.
                    var txtY = section2.getElementsByClassName("txt-y")[0];// [0]쓴 이유는 getElementsByClassName Elements 복수형 즉, 배열이기에 0번째 밖에 없겠지만 [0]을 써서 알려줘야한다.
                    var txtAdd = section2.getElementsByClassName("btn-add")[0];// [0]쓴 이유는 getElementsByClassName Elements 복수형 즉, 배열이기에 0번째 밖에 없겠지만 [0]을 써서 알려줘야한다.
                    var txtSum = section2.getElementsByClassName("txt-sum")[0];// [0]쓴 이유는 getElementsByClassName Elements 복수형 즉, 배열이기에 0번째 밖에 없겠지만 [0]을 써서 알려줘야한다.
                
                    /*
                    var inputs = section2.getElementsByTagName("input");

                        EX1 과 EX2에서 id로 중복되기에 id는 페이지내에서 전역으로 작동한다 따라서 문제가 발생할수도 있고 
                        또한 input 태그로 할 경우 input을 추가할 경우 순번을 바꿔줘야하고  다른 기능에서 중복될수 있기에 
                        수정하기 위해 주석 처리
                
                    var txtX = inputs[0];
                    var txtY = inputs[1];
                    var txtAdd = inputs[2]; 
                    var txtSum = inputs[3]; 
                    */
                    
                
                    txtAdd.onclick =  function ()  { //익명함수를 대입함. 이벤트 연계
                
                        var x = parseInt(txtX.value);
                        var y = parseInt(txtY.value);
                
                        txtSum.value = x+y; // 위에서 parseInt로 숫자화 한것을 다시 txtSum에 넣어줄때는 자동으로 문자화 된다.
                
                
                    };
                });
