// var balance = 2400;
//  function donate(cardId, currentDonation) {
//     const donationAmountInput = document.getElementById('donationAmount' + cardId);
//     const donationAmount = parseInt(donationAmountInput.value);

//     if (isNaN(donationAmount) || donationAmount <= 0) {
//         alert('Please enter a valid donation amount.');
//         return;
//     }

//     if (donationAmount > balance) {
//         alert('Insufficient balance.');
//         return;
//     }

//     balance += donationAmount;
//     document.getElementById('balance').textContent = balance + " BDT";

//     const currentDonationElem = document.getElementById('currentDonation' + cardId);
//     const newDonationAmount = currentDonation + donationAmount;
//     currentDonationElem.textContent = 'Current Donation: ' + newDonationAmount + ' BDT';
// }

document.getElementById('last-add').addEventListener('click',function(event){
    event.preventDefault();

    const addNum=document.getElementById('donationAmount3').value;
    const addNumSum=parseFloat(addNum);
    const addTotal=document.getElementById('currentDonation3').innerText;
    const sum=parseFloat(addTotal);
    const totalNum=addNumSum+ sum;
    console.log(totalNum)


})
