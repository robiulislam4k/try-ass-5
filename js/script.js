// var balance = 10000;

// document.getElementById('balance').textContent = balance + " BDT";

// // Toggle Donation and History Section
// document.getElementById('historyBtn').addEventListener('click', function() {
//     document.getElementById('donationSection').classList.add('hidden');
//     document.getElementById('historySection').classList.remove('hidden');
//     toggleActive(this, 'donationBtn');
// });

// document.getElementById('donationBtn').addEventListener('click', function() {
//     document.getElementById('historySection').classList.add('hidden');
//     document.getElementById('donationSection').classList.remove('hidden');
//     toggleActive(this, 'historyBtn');
// });

// // Common Function to Toggle Active Class
// function toggleActive(activeBtn, inactiveBtnId) {
//     activeBtn.classList.add('bg-green-700');
//     activeBtn.classList.remove('bg-gray-500');
//     document.getElementById(inactiveBtnId).classList.remove('bg-green-700');
//     document.getElementById(inactiveBtnId).classList.add('bg-gray-500');
// }

// // Donation Function
// function donate(cardId, currentDonation) {
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

//     balance -= donationAmount;
//     document.getElementById('balance').textContent = balance + " BDT";

//     const currentDonationElem = document.getElementById('currentDonation' + cardId);
//     const newDonationAmount = currentDonation + donationAmount;
//     currentDonationElem.textContent = 'Current Donation: ' + newDonationAmount + ' BDT';

//     // Add to History
//     addToHistory(cardId, donationAmount);

//     // Show Success Modal
//     document.getElementById('modal').classList.remove('hidden');

// }

// // Add Transaction to History
// function addToHistory(cardId, amount) {
//     const historyList = document.getElementById('historyList');
//     const listItem = document.createElement('li');
//     listItem.classList.add('bg-white', 'p-4', 'shadow', 'rounded');
//     const donationNames = ['Flood at Noakhali, Bangladesh', 'Flood Relief in Feni, Bangladesh', 'Aid for Injured in the Quota Movement'];
//     const date = new Date().toLocaleString();
    
//     listItem.textContent = `${amount} BDT is Donated for ${donationNames[cardId - 1]} 
//     on ${date}`;
//     historyList.appendChild(listItem);
// }

// // Close Modal
// function closeModal() {
//     document.getElementById('modal').classList.add('hidden');

// }




let balance = 98600;

document.getElementById('balance').textContent = balance + " BDT";

// Toggle Donation and History Section
document.getElementById('historyBtn').addEventListener('click', function() {
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
    toggleActive(this, 'donationBtn');
});

document.getElementById('donationBtn').addEventListener('click', function() {
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('donationSection').classList.remove('hidden');
    toggleActive(this, 'historyBtn');
});

// Common Function to Toggle Active Class
function toggleActive(activeBtn, inactiveBtnId) {
    activeBtn.classList.add('bg-green-700');
    activeBtn.classList.remove('bg-green-500');
    document.getElementById(inactiveBtnId).classList.remove('bg-green-700');
    document.getElementById(inactiveBtnId).classList.add('bg-green-500');
}

// Donation Function
function donate(cardId, currentDonation) {
    const donationAmountInput = document.getElementById('donationAmount' + cardId);
    const donationAmount = parseInt(donationAmountInput.value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    if (donationAmount > balance) {
        alert('Insufficient balance.');
        return;
    }

    balance -= donationAmount;
    document.getElementById('balance').textContent = balance + " BDT";

    const currentDonationElem = document.getElementById('currentDonation' + cardId);
    const newDonationAmount = currentDonation + donationAmount;
    currentDonationElem.textContent = 'Current Donation: ' + newDonationAmount + ' BDT';

    // Add to History
    addToHistory(cardId, donationAmount);

    // Show Success Modal
    document.getElementById('modal').classList.remove('hidden');
}

// Add Transaction to History
function addToHistory(cardId, amount) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.classList.add('bg-white', 'p-4', 'shadow', 'rounded');
    const donationNames = ['Flood at Noakhali, Bangladesh', 'Flood Relief in Feni, Bangladesh', 'Aid for Injured in the Quota Movement'];
    const date = new Date().toLocaleString();
    listItem.textContent = `${amount} BDT is Donated for ${donationNames[cardId - 1]} on ${date}`;
    historyList.appendChild(listItem);
}

// Close Modal
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

