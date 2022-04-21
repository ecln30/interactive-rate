










const submit = document.querySelector('.submit')
const num = document.querySelectorAll('.num')

submit.addEventListener("click", select)

function select() {
    console.log("submit button clicked")
}

num.forEach(item => {
    item.addEventListener("click", check)
})

function check(e) {
   let target = e.target
   target.setAttribute("id", "color")
   let element = document.getElementById('color')
   
}






































