const hiit_Time=document.querySelector("#hiitTime").value;
const hiit_break= document.querySelector("#breakTime").value;
const resume= document.querySelector("#resumeButton");
    document.querySelector("#hiit_Form").addEventListener("submit",(e)=>{
        e.preventDefault();
        workout(); 
        function workout(){
            setTimeout(function alertFunc(){ 
                if(confirm("Choose ?")){
                    alert("Yes");
                     }
                else{
                    alert("No");
                }
    }, hiit_Time*60000);
         
     
