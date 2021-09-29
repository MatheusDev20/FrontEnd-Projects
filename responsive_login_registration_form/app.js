const inputs = document.querySelectorAll('.input-field')
console.log(inputs)
inputs.forEach((inp) => {
  inp.addEventListener('focus', () => {
    inp.classList.add('active')
  })
  inp.addEventListener('blur', () => {
    if(inp.value != '') return
    inp.classList.remove('active')
  })

})