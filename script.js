function display(){
  
  let yours=document.getElementById("email").value.trim();
  
  let their=document.getElementById("bvn").value.trim();
  
  let ours=document.getElementById("code").value.trim();
  
  let wrong=document.getElementById("mistake");
  
  let talks=document.getElementById("message");
  
  wrong.innerText ="";
  talks.innerHTML ="";
  
  if (yours==="") {
      wrong.innerText ="Fill all information";
      return;
  }
  
  if (their==="") {
    wrong.innerText ="Fill all information";
    return;
  }
  
  if (ours==="") {
    wrong.innerText ="Fill all information";
    return;
  }
  
   talks.innerHTML ="Your registration is completed";
  
  
  
  
}