// JavaScript Document
		 var one=document.getElementsByClassName("one")[0];
		 var oTwo=document.getElementsByClassName("two")[0];
		 var oThree=document.getElementsByClassName("three")[0];
		 var oFour=document.getElementsByClassName("four")[0];
		 var oFive=document.getElementsByClassName("five")[0];
				
		 var oSone=document.getElementsByClassName("small-one")[0];
		 var oStwo=document.getElementsByClassName("small-two")[0];
		 var oSthree=document.getElementsByClassName("small-three")[0];
		 var oSfour=document.getElementsByClassName("small-four")[0];
		 var oSfive=document.getElementsByClassName("small-five")[0];
		
		  function play(){
		     if(onmouseover){
			    onmouseover();
			 }else{
			    one.style.display="block";
			 }
		  }
		
		
          oSone.onmouseover= function (){
               if(one.style.display="none"){
					  one.style.display="block"; 
		       }
		   }
           oSone.onmouseout= function (){
               if(one.style.display="block"){
					  one.style.display="none"; 
		       }
		   }
		   
		   oStwo.onmouseover= function (){
               if(oTwo.style.display="none"){
					  oTwo.style.display="block"; 
		       }
		   }
		   oStwo.onmouseout= function (){
               if(oTwo.style.display="block"){
					  oTwo.style.display="none"; 
		       }
		   }
		   
		   
		  oSthree.onmouseover=function(){
			     if(oThree.style.display="none"){
					  oThree.style.display="block"; 
		         }
			  }
		  oSthree.onmouseout=function(){
			     if(oThree.style.display="block"){
					  oThree.style.display="none";
		         }
			  }  
			  
			  
		 oSfour.onmouseover=function(){
			     if(oFour.style.display="none"){
					  oFour.style.display="block"; 
		        }
		 }
		 oSfour.onmouseout=function(){
			     if(oFour.style.display="block"){
					  oFour.style.display="none";  
		        }
		 }
	 
		 oSfive.onmouseover=function(){
			     if(oFive.style.display="none"){
					  oFive.style.display="block"; 
		         }
		 }
		 oSfive.onmouseout=function(){
			     if(oFive.style.display="block"){
					  oFive.style.display="none"; 
		         }
		 }