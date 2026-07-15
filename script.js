let clock1 = document.getElementById("clock");
let but1 = document.getElementById("b1");
let but2 = document.getElementById("b2");
let but3 = document.getElementById("b3");
let count = 0;
let id;
but1.addEventListener("click", function(){
  if (id) return;  
  id = setInterval(() => {
    count++;
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    clock1.innerText = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
  }, 1000);
});
but2.addEventListener("click", function(){
  clearInterval(id);
  id = undefined;
});
but3.addEventListener("click", function(){
  clearInterval(id);
  count = 0;
  clock1.innerText = "00:00";
});