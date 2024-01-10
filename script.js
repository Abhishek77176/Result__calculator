// Function to calculate (grade point)*credit
function gpc(num,total,credit){
  var per = parseFloat(num*100/total);
  var a = parseInt(per/10) + 1;
  if(per<45){
    a = a - 1;
  }
  return a*credit;
}

function calculateSGPA(event){

  event.preventDefault();

  // Getting marks of theory subject
  var java_m = parseInt(document.getElementById('java').value);
  var java_gpc = gpc(java_m,100,4);

  var dm_m = parseInt(document.getElementById('dm').value);
  var dm_gpc = gpc(dm_m,100,4);

  var iot_m = parseInt(document.getElementById('iot').value);
  var iot_gpc = gpc(iot_m,100,3);

  var toc_m = parseInt(document.getElementById('toc').value);
  var toc_gpc = gpc(toc_m,100,4);

  var el_m = parseInt(document.getElementById('el').value);
  var el_gpc = gpc(el_m,100,3);

  // var cam_m = parseInt(document.getElementById('cam').value);
  // var cam_gpc = gpc(cam_m,100,3);

  // Getting marks of Lab subject
  var javal_m = parseInt(document.getElementById('javal').value);
  var javal_gpc = gpc(javal_m,50,2);

  var iotl_m = parseInt(document.getElementById('iotl').value);
  var iotl_gpc = gpc(iotl_m,50,1);

  var ell_m = parseInt(document.getElementById('ell').value);
  var ell_gpc = gpc(ell_m,50,1);

  // var wtl_m = parseInt(document.getElementById('wtl').value);
  // var wtl_gpc = gpc(wtl_m,50,1);

  // Training Marks
  var trii_m = parseInt(document.getElementById('trii').value);
  var trii_gpc = gpc(trii_m,100,1);

  var sum = java_m + dm_m + iot_m + toc_m + el_m + javal_m + iotl_m + ell_m + trii_m;
  document.getElementById("demo").textContent = "Your Percentage is : " + (sum*100/750).toFixed(2) + "%";
  var SGPA = (java_gpc + dm_gpc + iot_gpc + toc_gpc + el_gpc + javal_gpc + iotl_gpc + ell_gpc + trii_gpc)/23;
  document.getElementById("demo2").textContent = "Your SGPA is : " + (SGPA).toFixed(2);

  const element = document.getElementsByClassName('down')[0];
  element.style.display = 'inline-block';

  var targetElement = document.getElementById("dm");

  targetElement.scrollIntoView({ behavior: "smooth" });
}
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

function calculateCGPA(event){
  event.preventDefault();
  var sem_1 = parseFloat(document.getElementById('sem1').value);
  var sem_2 = parseFloat(document.getElementById('sem2').value);
  var sem_3 = parseFloat(document.getElementById('sem3').value);
  var sem_4 = parseFloat(document.getElementById('sem4').value);
  var sem_5 = parseFloat(document.getElementById('sem5').value);
  var total = ((sem_1*20) + (sem_2*21) + (sem_3*21) + (sem_4*23) + (sem_5*23))/108;
  document.getElementById('demo3').textContent = "Your CGPA is : " + total.toFixed(2);
}


