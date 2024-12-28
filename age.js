
  let generate = document.getElementById('calculate');



function calculateAge() {
  let userAge = document.getElementById('age').value;

  if(!userAge){
    alert("please Enter your age");
    return;
  }

  let dateInput = new Date(userAge);

  let currentDate = new Date();

  let birthYear = dateInput.getFullYear();
  let birthMonth = dateInput.getMonth();
  let birthDay = dateInput.getDate();

  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if(months < 0){
    years--;
    months+=12;

  }

  if(days < 0){
    months--;
    let prevMonth = currentMonth - 1 < 0 ? 11 : currentMonth - 1;
    let prevDay = new Date(currentYear, prevMonth+1, 0).getDate();
    days += prevDay;
  }

  document.getElementById('year').innerText = years;
  document.getElementById('month').innerText = months;
  document.getElementById('day').innerText = days;

}

   generate.addEventListener('click', calculateAge);
