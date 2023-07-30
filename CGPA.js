function calculateCGPA(event){
  event.preventDefault();
  var sem_1 = parseFloat(document.getElementById('sem1').value);
  var sem_2 = parseFloat(document.getElementById('sem2').value);
  var sem_3 = parseFloat(document.getElementById('sem3').value);
  var sem_4 = parseFloat(document.getElementById('sem4').value);
  var total = ((sem_1*20) + (sem_2*21) + (sem_3*21) + (sem_4*23))/85;
  document.getElementById('demo3').textContent = "Your CGPA is : " + total.toFixed(2);
}