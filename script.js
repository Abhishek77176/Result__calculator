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
  var pas_m = parseInt(document.getElementById('pas').value);
  var pas_gpc = gpc(pas_m,100,3);

  var dbms_m = parseInt(document.getElementById('dbms').value);
  var dbms_gpc = gpc(dbms_m,100,3);

  var pp_m = parseInt(document.getElementById('pp').value);
  var pp_gpc = gpc(pp_m,100,3);

  var os_m = parseInt(document.getElementById('os').value);
  var os_gpc = gpc(os_m,100,3);

  var wt_m = parseInt(document.getElementById('wt').value);
  var wt_gpc = gpc(wt_m,100,3);

  var cam_m = parseInt(document.getElementById('cam').value);
  var cam_gpc = gpc(cam_m,100,3);

  // Getting marks of Lab subject
  var dbmsl_m = parseInt(document.getElementById('dbmsl').value);
  var dbmsl_gpc = gpc(dbmsl_m,50,1);

  var ppl_m = parseInt(document.getElementById('ppl').value);
  var ppl_gpc = gpc(ppl_m,50,1);

  var osml_m = parseInt(document.getElementById('osml').value);
  var osml_gpc = gpc(osml_m,50,1);

  var wtl_m = parseInt(document.getElementById('wtl').value);
  var wtl_gpc = gpc(wtl_m,50,1);

  // Mentoring Marks
  var mpd_m = parseInt(document.getElementById('mpd').value);
  var mpd_gpc = gpc(mpd_m,100,1);

  var sum = pas_m + dbms_m + pp_m + os_m + wt_m + cam_m + ppl_m + osml_m + wtl_m + mpd_m + dbmsl_m;
  document.getElementById("demo").textContent = "Your Percentage is : " + (sum*100/900).toFixed(2) + "%";
  var SGPA = (pas_gpc + dbms_gpc + pp_gpc + os_gpc + wt_gpc + cam_gpc + dbmsl_gpc + ppl_gpc + osml_gpc + wtl_gpc + mpd_gpc)/23;
  document.getElementById("demo2").textContent = "Your SGPA is : " + (SGPA).toFixed(2);

  const element = document.getElementsByClassName('down')[0];
  element.style.display = 'inline-block';

  var targetElement = document.getElementById("dm");

  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: "smooth" });
}
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


