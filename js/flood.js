
document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const donateAmount = getInputFieldValueById('noakhali-donation-input');
    const noakhaliTotalDonation = getTextFieldValueById('noakhali-total-donation')
    const initialAmount = getTextFieldValueById('initial-ammount');
    if (donateAmount > 0 && donateAmount <= initialAmount && !isNaN(donateAmount)) {

        const newDonationTotalAmount = noakhaliTotalDonation + donateAmount
        document.getElementById('noakhali-total-donation').innerText = newDonationTotalAmount

        const newInitialAmount = initialAmount - donateAmount

        document.getElementById('initial-ammount').innerText = newInitialAmount;
        document.getElementById('noakhali-donation-input').value = '';


        const currentDate = new Date()
        const div = document.createElement('div')
        div.innerHTML = `
      <div class = " border p-6 " >
      <h4 class =" text-2xl font-semibold"> ${donateAmount} Taka is Donated for flood at Noakhali, Bangladesh </h4>
        <p> Date:${currentDate}</p>
       </div>

    `
        document.getElementById('history-container').appendChild(div)
        const modal = document.getElementById('modal-container');
        modal.classList.remove('hidden')
        const backdrop = document.getElementById('backdrop-container')
        backdrop.classList.remove('hidden')
    }

    else if (initialAmount < donateAmount) {
        alert('Do not have sufficient balance');
        return
    }

    else {
        alert('enter a valid amount')
        return
    }


})


document.getElementById('feni-donate-btn').addEventListener('click', function () {
    // const modal = document.getElementById('modal-container');
    // modal.classList.remove('hidden')
    // const backdrop = document.getElementById('backdrop-container')
    // backdrop.classList.remove('hidden')
})




document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const donateAmount = getInputFieldValueById('feni-donation-input');
    const noakhaliTotalDonation = getTextFieldValueById('feni-total-donation')
    const initialAmount = getTextFieldValueById('initial-ammount');


    if (donateAmount > 0 && donateAmount <= initialAmount && !isNaN(donateAmount)) {
        const newDonationTotalAmount = noakhaliTotalDonation + donateAmount
        document.getElementById('feni-total-donation').innerText = newDonationTotalAmount

        const newInitialAmount = initialAmount - donateAmount

        document.getElementById('initial-ammount').innerText = newInitialAmount
        document.getElementById('feni-donation-input').value = '';

        // const modal = document.getElementById('modal-container');
        // modal.classList.remove('hidden')
        const currentDate = new Date()
        const div = document.createElement('div')
        div.innerHTML = `
      <div class = " border p-6 " >
      <h4 class =" text-2xl font-semibold"> ${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh </h4>
        <p> Date:${currentDate}</p>
       </div>

    `
        document.getElementById('history-container').appendChild(div)

        const modal = document.getElementById('modal-container');
        modal.classList.remove('hidden')
        const backdrop = document.getElementById('backdrop-container')
        backdrop.classList.remove('hidden')
    }



    else if (initialAmount < donateAmount) {
        alert('Do not have sufficient balance')
        return
    }

    else {
        alert('enter a valid amount')
        return
    }




})

document.getElementById('quota-donate-btn').addEventListener('click', function () {
    const donateAmount = getInputFieldValueById('quota-donation-input');
    const noakhaliTotalDonation = getTextFieldValueById('quota-total-donation')
    const initialAmount = getTextFieldValueById('initial-ammount');

    if (donateAmount > 0 && donateAmount <= initialAmount && !isNaN(donateAmount)) {
        const newDonationTotalAmount = noakhaliTotalDonation + donateAmount
        document.getElementById('quota-total-donation').innerText = newDonationTotalAmount

        const newInitialAmount = initialAmount - donateAmount

        document.getElementById('initial-ammount').innerText = newInitialAmount;
        document.getElementById('quota-donation-input').value = '';
        const currentDate = new Date()
        const div = document.createElement('div')
        div.innerHTML = `
          <div class = " border p-6 " >
          <h4 class =" text-2xl font-semibold"> ${donateAmount} Taka is Donated for aid for injured in the Quota movement, Bangladesh </h4>
            <p> Date:${currentDate}</p>
           </div>
    
        `
        document.getElementById('history-container').appendChild(div)
        const modal = document.getElementById('modal-container');
        modal.classList.remove('hidden')
        const backdrop = document.getElementById('backdrop-container')
        backdrop.classList.remove('hidden')

    }

    else if (initialAmount < donateAmount) {
        alert('Do not have sufficient balance')
        return
    }

    else {
        alert('enter a valid amount')
        return
    }

})





