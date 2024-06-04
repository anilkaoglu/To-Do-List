const input = document.querySelector("input");
const btn = document.querySelector("button");
const wrapper = document.getElementById("wrapper");
const alert = document.querySelector('.alert');

input.onkeydown = function(e){
    if(e.keyCode == 13){
        kaydet()
    }
}

function kaydet() {
  let value = input.value;
  if (value.trim() != "") {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = 'space-between';
    div.style.padding = "10px"
    div.addEventListener('click', ciz)

    let p = document.createElement("p");
    p.style.margin = "0";
    p.textContent = value;

    let span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-trash"></i>';
    span.addEventListener('click', sil)

    div.appendChild(p);
    div.appendChild(span);
    wrapper.appendChild(div);
  }else{
    alert.classList.add('d-block');
    alert.classList.remove('d-none');
    setTimeout(timeOut, 3000);
  }
  input.value = "";
}

function ciz(){
    this.classList.toggle('bg-secondary');
    this.classList.toggle('text-white');
    this.children[0].classList.toggle('text-decoration-line-through');
}

function sil(){
    this.parentElement.remove()
}

function timeOut(){
    alert.classList.remove('d-block');
    alert.classList.add('d-none')
}
