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



                        //EX3 : Selectors API Level1
                    /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
                        window.addEventListener("load", function(){
                            var section3=document.getElementById('section3'); 
                        
                            var txtX = section3.querySelector("input[name=x]"); // 이렇게도 쓸 수 있다.
                            var txtY = section3.querySelector(".txt-y"); // .은 클래스 #은 id 
                            var txtAdd = section3.querySelector(".btn-add"); // .은 클래스 #은 id 
                            var txtSum = section3.querySelector(".txt-sum"); // .은 클래스 #은 id 
                        
                        
                        
                            txtAdd.onclick =  function ()  { //익명함수를 대입함. 이벤트 연계
                        
                                var x = parseInt(txtX.value);
                                var y = parseInt(txtY.value);
                        
                                txtSum.value = x+y; // 위에서 parseInt로 숫자화 한것을 다시 txtSum에 넣어줄때는 자동으로 문자화 된다.
                        
                        
                            };
                        });


                        //EX4 : childNodes를 이용한 노드 선택
                    /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
                        window.addEventListener("load", function(){
                            var section4=document.querySelector("#section4"); // .은 클래스 #은 id 
                        
                            var box = section4.querySelector(".box");// .은 클래스 #은 id 
                        
                            var input1 = box.children[0];//childNodes[0]; childNodes는 태그형태노드, 주석,텍스트등 모두 다 포함.
                            var input2 = box.children[1];// 하지만  children은 태그형태만 취급.

                            input1.value ="hello";
                            input2.value ="okay";
                        
                        
                        
                        });

                        
                        //EX5 : 엘리먼트 노드의 속성 변경
                    /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
                        window.addEventListener("load", function(){
                            var section5=document.querySelector("#section5"); // .은 클래스 #은 id 
                        
                            var srcInput = section5.querySelector(".src-input");// .은 클래스 #은 id 
                            var imgSelect = section5.querySelector(".img-select");// .은 클래스 #은 id 
                          
                          
                            var changeButton = section5.querySelector(".change-button");// .은 클래스 #은 id 
                            var img = section5.querySelector(".img");// .은 클래스 #은 id 
                        
                                changeButton.onclick = function(){

                                    img.src = "images/"+srcInput.value; // || input창에 직접 써고 변경을 누르면 바꾸는 형식 datalist기능 추가로 옵션선택자와 같은 기능이 되었다.
                                    //img.src = "images/"+imgSelect.value // select optoin 형식으로 선택한것으로 변경하는 형식
                                };
                        
                        
                        });


                        //EX6 : EX6 : 엘리먼트 노드의 속성 변경 예제 - 사진 변경 & CSS속성변경
                    /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
                        window.addEventListener("load", function(){
                            var section6=document.querySelector("#section6"); // .은 클래스 #은 id 
                        
                            var srcInput2 = section6.querySelector(".src-input2");// .은 클래스 #은 id 
                            var imgSelect2 = section6.querySelector(".img-select2");// .은 클래스 #은 id 
                          
                          
                            var changeButton2 = section6.querySelector(".change-button2");// .은 클래스 #은 id 
                            var img2 = section6.querySelector(".img2");// .은 클래스 #은 id 
                            var colorInput = section6.querySelector(".color-input");// .은 클래스 #은 id 


                                changeButton2.onclick = function(){

                                    img2.src = "images/"+srcInput2.value; // || input창에 직접 써고 변경을 누르면 바꾸는 형식 datalist기능 추가로 옵션선택자와 같은 기능이 되었다.
                                    //img2.src = "images/"+imgSelect2.value // select optoin 형식으로 선택한것으로 변경하는 형식
                          
                          
                                    //img2.style.border-color = ? <= 자바스크립트에서 - 이 방법은 안됨.
                                   //첫번째 방법 img2.style["border-color"] = colorInput.value;
                                    img2.style.borderColor = colorInput.value;//두번째 방법
                                    console.log(img2.className); //자바스크립트에서는 class라고 명명하면 안됨 className으로 해야함.
                                };
                        
                        
                        });