
function progress(){
  document.getElementById("1").className='';                
  document.getElementById("2").className='';                
  document.getElementById("3").className='';                
  document.getElementById("4").className='';                
}
function remove(){
  document.getElementById("step1").style.display='none';
  document.getElementById("step2").style.display='none';
  document.getElementById("step3").style.display='none';
  document.getElementById("step4").style.display='none';
}

function showProgress(a) {
  console.log(a);
  progress();
  document.getElementById(a).className = "selectprogress";
}

var inputs=1

function next(b) { 
  if(document.getElementById("input"+inputs.toString()).value==""){
    alert("Please Fill the data")
  }
  else{
  console.log("next", b);
       const nextindex = b + 1;
        remove();
        document.getElementById(`step${nextindex}`).style.display = "block";
        showProgress(nextindex);
        document.getElementById("sucess").innerText = "";
        inputs+=1
  }
}
function previous(c) {
  console.log("previous", c);
  const nextindex = c - 1;
  remove();
  document.getElementById(`step${nextindex}`).style.display = "block";
  showProgress(nextindex);
  document.getElementById("sucess").innerText = "";
}


function submit(){
    document.getElementById('sucess').innerHTML='Sucessfuly Submitted👍'
    document.getElementById('sucess').style.fontStyle='italic'
}
