let btnApi = document.querySelector('#btn-api')
let containerSearch = document.querySelector('#consult-api')

// searchApi = onclick(consultApi)
btnApi.addEventListener('click', ()=>{
    containerSearch.classList.toggle('on')
    containerSearch.classList.toggle('off')

})
