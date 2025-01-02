 const donateMain = document.getElementById('donate-main-btn')
donateMain.addEventListener('click', function(){
    donateMain.classList.add('bg-donate-and-blog')
    donateMain.classList.add('font-semibold')
    donateMain.classList.remove('border')
    donateMain.classList.remove('text-gray-color')
    const history = document.getElementById('history-btn');
    history.classList.remove('bg-donate-and-blog')
    history.classList.remove('font-semibold')
    history.classList.add('border')
    history.classList.add('text-gray-color')
    showSectionById('donation-container')    
})

const history = document.getElementById('history-btn');
history.addEventListener('click', function(){
    history.classList.add('bg-donate-and-blog')
    history.classList.add('font-semibold')
    history.classList.remove('border')
    history.classList.remove('text-gray-color')
    const donate = document.getElementById('donate-main-btn')
    donate.classList.remove('bg-donate-and-blog')
    donate.classList.remove('font-semibold')
    donate.classList.add('border-current')
    donate.classList.add('border')
    donate.classList.add('text-gray-color')
    showSectionById('history-container')
})


document.getElementById('close-confirm').addEventListener('click', function(){
    document.getElementById('modal-container').classList.add('hidden');
    document.getElementById('backdrop-container').classList.add('hidden')
})