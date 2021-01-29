


    //Ex1-선택된 이미지 보여주기:event target
     /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
    window.addEventListener("load", function(){

        var section1 = document.querySelector("#section1");// .은 클래스 #은 id 
        
        var imgs = section1.querySelectorAll(".img");// .은 클래스 #은 id 
        var currentImg = section1.querySelector(".current-img");// .은 클래스 #은 id 
        
        for(var i=0; i<imgs.length; i++){ // 메모리를 많이 먹고 복잡도 올라감 후에 이벤트버블링으로 배우면 그것을 쓸 예정
            imgs[i].onclick = function(e){ //event를 줄여썼다.
                currentImg.src = e.target.src;
          };
        }



    }); 


    
//연습문제 1-선택된 레코드 삭제하기:event target
 /* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
window.addEventListener("load", function(){

    var section2 = document.querySelector("#section2");// .은 클래스 #은 id 


    var delButtons = section2.querySelectorAll(".del-button");// .은 클래스 #은 id 


        for (var i=0; i<delButtons.length; i++){

        delButtons[i].onclick = function(e){

            var tr = e.target.parentElement.parentElement;
            tr.remove();
        };


    } 


}); 

//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
/* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  

window.addEventListener("load", function(){

    var section3 = document.querySelector("#section3");// .은 클래스 #은 id 
    var imgList = section3.querySelector(".img-list"); // .은 클래스 #은 id 
    var currentImg = section3.querySelector(".current-img");// .은 클래스 #은 id 
    
    imgList.onclick = function(e){
        
        if(e.target.nodeName !="IMG"){ // div가 클릭되는 경우가 발생할수도 있기에
            return;
        }
        currentImg.src = e.target.src;

    };

    /* 비교를 위해 EX1에서 적은 것을 갖고 옴 
    for(var i=0; i<imgs.length; i++){ // 메모리를 많이 먹고 복잡도 올라감 후에 이벤트버블링으로 배우면 그것을 쓸 예정
        imgs[i].onclick = function(e){ //event를 줄여썼다.
            currentImg.src = e.target.src;
      };
    }
    */

}); 


// Ex3-이벤트 버블링 멈추기
/* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  

window.addEventListener("load", function(){

    var section4 = document.querySelector("#section4");// .은 클래스 #은 id 
    
    var imgList = section4.querySelector(".img-list"); // .은 클래스 #은 id 
    var addButton = section4.querySelector(".add-button");// .은 클래스 #은 id 
    var currentImg = section4.querySelector(".current-img");// .은 클래스 #은 id 
    
    imgList.onclick = function(e){
        if(e.target.nodeName !="IMG"){ // div가 클릭되는 경우가 발생할수도 있기에
            return;
        }
        currentImg.src = e.target.src;
    };

    addButton.onclick = function(e){
        e.stopPropagation(); // 전파되는것을 막아라 <중요>

        var img = document.createElement("img");
        img.src ="images/img1.jpg";
        currentImg.insertAdjacentElement("afterend",img);
    };

}); 


//Ex4-여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
/* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  

window.addEventListener("load", function(){

        var section = document.querySelector("#section5");

        var tbody = section.querySelector(".notice-list tbody");
        
        tbody.onclick = function(e){
           var target =  e.target;

            e.preventDefault(); //클릭에서 반응하는 어떤 엘리먼트가 있다해도 , 버블링을 타고 오는 어떤 행위든 기본행위를 갖지 않겠다.
            
            
            /* 태그로 표현했을때 사용법 
           if(target.nodeName !="A"){
               return;
           } */



           if(target.classList.contains("sel-button")){
            var tr = target.parentElement;  
            for(; tr.nodeName !="TR"; tr= tr.parentElement);
            tr.style.background ="yellow";
           }
           else if(target.classList.contains("edit-button")){
                // 수정에 관한 기능 작성해야함  전 강의들 참고

           }
           else if(target.classList.contains("del-button")){ 
                
                var tr = target.parentElement;  
            for(; tr.nodeName !="TR"; tr= tr.parentElement);
            tr.remove();

            }


        };


}); 

//Ex5-이벤트 트리거
/* window.onload = function (){ onload의 중복으로 인해 변경 다른사람의 코드를 망가뜨리지 않으려면 addEventListener사용*/  
    // 글자로 대신하는 게 주 목적 
            window.addEventListener("load", function(){


                var section6 = document.querySelector("#section6");
                var fileButton =section6.querySelector(".file-button");
                var fileTriggerButton = section6.querySelector(".file-trigger-button");
               
            
                fileTriggerButton.onclick=function(){
                    var event = new MouseEvent("click", {

                        'view':window,
                        'bubbles':true,
                        'cancelable':true // 버블취소 여부


                    });


                fileButton.dispatchEvent(event);
                };

            }); 