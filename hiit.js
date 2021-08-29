const hiit_Time=document.querySelector("#hiitTime").value;
const hiit_break= document.querySelector("#breakTime").value;
const resume= document.querySelector("#resumeButton");
    document.querySelector("#hiit_Form").addEventListener("submit",(e)=>{
        e.preventDefault();
        workout(); 
        function workout(){
            setTimeout(alertFunc, hiit_Time*60000);
         }
        function alertFunc(){
            if(confirm("Take break")){
              setTimeout(function(){
                  if(confirm("Continue HIIT")){
                      workout();
                  }
                  else{
                    alert("Ending session...");
                }
              }, hiit_break*60000);
           }
         else{
             workout();
         }
          
        }   
    });
       