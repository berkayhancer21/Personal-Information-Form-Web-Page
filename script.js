const input1 = document.getElementById('name');
const input2 = document.getElementById('lastname');
const input3 = document.getElementById('province');
const input4 = document.getElementById('phone');
const input5 = document.getElementById('course_type');
const input6 = document.getElementById('age');
const input7 = document.getElementById('email');
const input8 = document.getElementById('address');

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
const output6 = document.getElementById('output6');
const output7 = document.getElementById('output7');
const output8 = document.getElementById('output8');

function printInput(){
  output1.innerHTML = input1.value;
  output2.innerHTML = input2.value;
  output3.innerHTML = input3.value;
  output4.innerHTML = input4.value;
  output5.innerHTML = input5.value;
  output6.innerHTML = input6.value;
  output7.innerHTML = input7.value;
  output8.innerHTML = input8.value;
}

function resetPage(){
  output1.innerHTML = "";
  output2.innerHTML = "";
  output3.innerHTML = "";
  output4.innerHTML = "";
  output5.innerHTML = "";
  output6.innerHTML = "";
  output7.innerHTML = "";
  output8.innerHTML = "";

}

