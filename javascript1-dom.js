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


                            //EX6 :  엘리먼트 노드의 속성 변경 예제 - 사진 변경 & CSS속성변경
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

                            //EX7 :  노드조작: 메뉴추가(createTextNode, Element)
                        /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
                            window.addEventListener("load", function(){
                                var section7=document.querySelector("#section7"); // .은 클래스 #은 id 
                            
                                var titleInput = section7.querySelector(".title-input");// .은 클래스 #은 id 
                                var menuListDiv = section7.querySelector(".menu-list");// .은 클래스 #은 id 
                                var addButton = section7.querySelector(".add-button");// .은 클래스 #은 id 
                                var delButton= section7.querySelector(".del-button");// .은 클래스 #은 id 

                                    addButton.onclick = function(){ 

                                            var title = titleInput.value;
                                            var txtNode = document.createTextNode(title);
                                            menuListDiv.appendChild(txtNode);
                                    };
                                
                                    delButton.onclick = function(){ 
                                        var txtNode = menuListDiv.childNodes[0]; // 예를 위하여 이렇게 작성했지만 이렇게는 거의 쓰지 않는다.
                                        menuListDiv.removeChild(txtNode);


                                    };
                                
                            
                            
                            });
                        
                        
                            //EX8 :   엘리먼트 노드 추가(appendChild,append,innerHTML)/삭제(removeChild,remove)그리고 주의할 점들
                        /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
                            window.addEventListener("load", function(){
                                var section8=document.querySelector("#section8"); // .은 클래스 #은 id 
                            
                                var titleInput2 = section8.querySelector(".title-input2");// .은 클래스 #은 id 
                                var menuListUl = section8.querySelector(".menu-list2");// .은 클래스 #은 id 
                                var addButton2 = section8.querySelector(".add-button2");// .은 클래스 #은 id 
                                var delButton2= section8.querySelector(".del-button2");// .은 클래스 #은 id 

                                    addButton2.onclick = function(){ 

                                        var title2 = titleInput2.value;
                                        //1번 방법 2번 방법의 문제를 해결하기위한 선택
                                        var html = '<a href="">'+title2+'</a>';
                                        var li = document.createElement("li");
                                        li.innerHTML = html;

                                        menuListUl.appendChild(li);

                                        /* 2번 방법
                                        menuListUl.innerHTML += '<li><a href="">'+title2+'</a></li>'; // 따옴표 주의
                                        //한번쓰고 말고는 상관없으나 (문제없음)
                                        //내부적 문제 발생할수도 : 문자열 + 문자열 + 문자열 ...... 건물을 헐고 짓고 헐고 짓고 나중에는 객체가 많아서 성능상 문제 발생할수도.
                                            */

                                        /* 3번 방법 직접 생성되는 형식으로 만드는 방식
                                        코드가 기나 위와 달리 성능상에 문제에서는 바람직 하다.
                                        var title2 = titleInput2.value;
                                        var txtNode2 = document.createTextNode(title2);
                                        
                                        var aNode = document.createElement("a");
                                        aNode.href="";
                                        aNode.appendChild(txtNode2);

                                        var liNode = document.createElement("li");
                                        liNode.appendChild(aNode);
                                        
                                        menuListUl.appendChild(liNode);
                                        */

                                            /* EX7 방식
                                            var title2 = titleInput2.value;
                                            var txtNode2 = document.createTextNode(title2);
                                            menuListDiv2.appendChild(txtNode2);
                                            */
                                    };
                                
                                    delButton2.onclick = function(){ 
                                    
                                    /*EX7에서 썼던 방식
                                        var txtNode2 = menuListDiv2.childNodes[0]; // 모든 노트들에서 0번째 | 예를 위하여 이렇게 작성했지만 이렇게는 거의 쓰지 않는다.
                                        menuListUl.removeChild(txtNode2);
                                            */
                                    
                                            /* 1.부모를 얻어서 그 기능을 통해 삭제 하는 방법 
                                        var liNode = menuListUl.children[0];//앨리먼트 노트들만 선별해서 그중에서 첫번째
                                        menuListUl.removeChild(liNode);
                                            */
                                        //2. 자기자신이 삭제 되는 방법.
                                        var liNode = menuListUl.children[0];
                                        liNode.remove();

                                    };
                                
                            



                            
                            });

                            //EX9 :   노드 복제와 템플릿(template)복제 태그
                        /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/ 
                            window.addEventListener("load", function(){
                               
                                //for 문을 이용하여 밑에와 같이 0번째가 아닌 i 번째로 돌리는것 생각하기
                                var notices = [
                                    {id:5, title:"퐈이야~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
                                    {id:6, title:"나 좀 복제해줘~", regDate:"2019-01-26", writerId:"newlec", hit:17}
                                ];
                            
                                var section9 = document.querySelector("#section9");
                                
                                var noticeList =section9.querySelector(".notice-list"); // .은 클래스 #은 id 
                                var tbodyNode = noticeList.querySelector("tbody");
                                var cloneButton = section9.querySelector(".clone-button");// .은 클래스 #은 id 
                                var templateButton = section9.querySelector(".template-button");// .은 클래스 #은 id 
                            
                                cloneButton.onclick = function(){
                                    
                                    var trNode = noticeList.querySelector("tbody tr"); //querySelector는 괄호 내용중 첫번째만 갖고온다. 
                                    var cloneNode = trNode.cloneNode(true); // false로 하게 되면 trNode(여기서 명시되 있는)라는 껍데기만 갖고 온다. ||true일경우 trNode가 갖고있는 자식 노드 자식의자식노드 모든것을 갖고온다.
                                var tds = cloneNode.querySelectorAll("td"); //td들을 tds에 넣겠다는 말
                                tds[0].textContent = notices[0].id;
                                tds[1].innerHTML = '<a href="'+notices[0].id+'">'+notices[0].title+'</a>';
                                tds[2].textContent = notices[0].regDate;
                                tds[3].textContent = notices[0].writerId;
                                tds[4].textContent = notices[0].hit;
                                
                                tbodyNode.append(cloneNode);
                                };
                            
                                templateButton.onclick = function(){
                                    
                                    var template = section9.querySelector("template");
                            
                                    var cloneNode = document.importNode(template.content, true); // template의 껍데기 뿐만 아니라 내용까지도 다 갖고 오겠다. cloneNode의 true와 같음
                                    var tds = cloneNode.querySelectorAll("td"); //td들을 tds에 넣겠다는 말
                                    tds[0].textContent = notices[0].id;
                                //1번째 표현법 tds[1].innerHTML = '<a href="'+notices[0].id+'">'+notices[0].title+'</a>';
                                    
                                //2번째 표현법
                                    var aNode = tds[1].children[0];
                                    aNode.href=notices[0].id;
                                    aNode.textContent =notices[0].title;
                                    
                                    
                                    tds[2].textContent = notices[0].regDate;
                                    tds[3].textContent = notices[0].writerId;
                                    tds[4].textContent = notices[0].hit;
                                    
                                    tbodyNode.append(cloneNode);
                            
                                };
                            
                            });


                            //Ex10-노드 삽입과 바꾸기
                            /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/ 
                                  window.addEventListener("load", function(){

                                       var section10 = document.querySelector("#section10");
        
                                          var noticeList =section10.querySelector(".notice-list"); // .은 클래스 #은 id 
                                        var tbodyNode = noticeList.querySelector("tbody");
                                         var upButton = section10.querySelector(".up-button");// .은 클래스 #은 id 
                                         var downButton = section10.querySelector(".down-button");// .은 클래스 #은 id 

                                          var currentNode = tbodyNode.firstElementChild;//엘리먼트에 한정해서 선택하게다는 선택자 ||.children[0];

                                  downButton.onclick = function(){
                                    var nextNode = currentNode.nextElementSibling;

                                        if(nextNode == null){
                                            alert("더이상 이동할 수 없습니다.");
                                            return;
                                        }
                                       //1번째 방식 tbodyNode.removeChild(nextNode);
                                        //tbodyNode.insertBefore(nextNode, currentNode);

                                        //2번째 방식 https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement 참고 
                                        currentNode.insertAdjacentElement("beforebegin",nextNode);

                                      };

                                 upButton.onclick = function(){
                                    var prevNode = currentNode.previousElementSibling;
                                    if(prevNode == null){
                                        alert("더이상 이동할 수 없습니다.");
                                        return;
                                    }
                                    //1번째 방식 tbodyNode.removeChild(currentNode);
                                    //tbodyNode.insertBefore(currentNode, prevNode);

                                    
                                    //2번째 방식https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement 참고
                                    currentNode.insertAdjacentElement("afterend",prevNode);

                                      };

                                    });

                                    //Ex11-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
                                     /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/ 
                                    window.addEventListener("load", function(){

                                        var section11 = document.querySelector("#section11");
                                        
                                        var noticeList =section11.querySelector(".notice-list"); // .은 클래스 #은 id 
                                        var tbody = noticeList.querySelector("tbody");
                                        var allCheckbox = section11.querySelector(".overall-checkbox");// .은 클래스 #은 id 
                                        var delButton = section11.querySelector(".del-button");// .은 클래스 #은 id 
                                        var swapButton = section11.querySelector(".swap-button");// .은 클래스 #은 id 

                                        allCheckbox.onchange = function(){
                                            
                                            var inputs  = tbody.querySelectorAll("input[type='checkbox']");//tbody의 input중 type이 checkbox인거를 갖고 오겠다.
                                            for(var i=0; i<inputs.length; i++){
                                                  inputs[i].checked = allCheckbox.checked;
                                                    }
                                        };

                                        delButton.onclick = function(){
                                            var inputs = tbody.querySelectorAll("input[type='checkbox']:checked"); //체크된 대상만 갖고옴. checked로 인해
                                           // console.log(inputs.length); // 선택한거 삭제 했을때 갯수보려고 만든거
                                            // if(inputs[0].checked){} 

                                            for(var i=0; i<inputs.length; i++){ //선택된 갯수만큼만 삭제 하기 
                                                inputs[i].parentElement.parentElement.remove(); //두번 parentElement하는 이유 : input->td -> tr 결국 한 tr이 지워지는 효과
                                            }


                                        };

                                        swapButton.onclick = function(){
                                            var inputs = tbody.querySelectorAll("input[type='checkbox']:checked"); //체크된 대상만 갖고옴. checked로 인해
                                            
                                            if(inputs.length !=2){
                                                alert("엘리먼트는 2개를 선택해야만 합니다.");
                                                return;
                                            }
                                            
                                            var trs = []; // 위 if문으로 인해 여기에는 2개가 담겨있다.
                                            for(var i =0; i<inputs.length; i++){
                                                trs.push(inputs[i].parentElement.parentElement);
                                            }
                                            //자바의 숫자 3개로 자리 바꾸기와 같다 temp 지정후 넣고 빼고 
                                            var  cloneNode = trs[0].cloneNode(true); //선택한 첫번째 대상trs[0]을 cloneNode 삽입
                                            trs[1].replaceWith(cloneNode); // 선택한 두번째 대상 trs[1]을 cloneNode와 바꿈
                                            trs[0].replaceWith(trs[1]);// 선택한 첫번째 대상 trs[0]을 trs[1]과 바꿈

                                        };

                                    });