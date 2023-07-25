const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');

const toDate = new Date();
const yr = toDate.getFullYear();

//GETTING THE INPUT ELEMENTS
let isValid = false;
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');

//ERROR ELEMENTS
const err_day = document.querySelector('.error-day');
const err_month = document.querySelector('.error-month');
const err_year = document.querySelector('.error-year');

input_day.addEventListener('input', e =>{
  if(+input_day.value > 31 || +input_day.value < 0){
    err_day.textContent = 'must be a valid day';
    document.getElementById('error-span-day').style.color = 'red';
    document.getElementById('day').style.border = '2px solid red';

    isValid = false;
    return;
  }
  if(+input_day.value === 0){
    isValid = false;
    err_day.textContent = 'this field is required';
    document.getElementById('error-span-day').style.color = 'red';
    document.getElementById('day').style.border = '2px solid red';
    return;
  }
  else{
    isValid = true;
    err_day.textContent = '';
    document.getElementById('error-span-day').style.color = '';
    document.getElementById('day').style.border = '';
    return;
  }
})

input_month.addEventListener('input', e =>{
  if(+input_month.value > 12 || +input_month.value < 0){
    err_month.textContent = 'must be a valid month';
    document.getElementById('error-span-month').style.color = 'red';
    document.getElementById('month').style.border = '2px solid red';

    isValid = false;
    return;
  }
  if(+input_month.value === 0){
    isValid = false;
    err_month.textContent = 'this field is required';
    document.getElementById('error-span-month').style.color = 'red';
    document.getElementById('month').style.border = '2px solid red';
    return;
  }
  else{
    isValid = true;
    err_month.textContent = '';
    document.getElementById('error-span-month').style.color = '';
    document.getElementById('month').style.border = '';
    return;
  }
})

input_year.addEventListener('input', e =>{
  if(+input_year.value > yr || +input_year.value < 0){ //PGM DEVELOPED IN 2023
    err_year.textContent = 'must be a valid year';
    document.getElementById('error-span-year').style.color = 'red';
    document.getElementById('year').style.border = '2px solid red';

    isValid = false;
    return;
  }
  if(+input_year.value === 0){
    isValid = false;
    err_year.textContent = 'this field is required';
    document.getElementById('error-span-year').style.color = 'red';
    document.getElementById('year').style.border = '2px solid red';
    return;
  }
  else{
    isValid = true;
    err_year.textContent = '';
    document.getElementById('error-span-year').style.color = '';
    document.getElementById('year').style.border = '';
    return;
  }
})

//OUTPUT CALCULATION
submit_btn.addEventListener('click', calculateDate);

function calculateDate() {

  if(isValid){
    let birthDate = `${input_month.value}/${input_day.value}/${input_year.value}`;
    let dateObj = new Date(birthDate);
    let dateDiff = Date.now() - dateObj;
    let newDate = new Date(dateDiff);

    output_month.textContent = newDate.getMonth();
    output_day.textContent = newDate.getDay();
    output_year.textContent = newDate.getFullYear()-1970;

  }
  else{
    alert('Error');
  }

  
}


