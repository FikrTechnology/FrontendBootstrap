const transactionListElement = document.getElementById('listHistory');
const receiptListElement = document.getElementById('receiptList');
const emptyHistoryElement = document.getElementById('emptyHistory');
const receiptElement = document.getElementById('receipt');
// for Dummy
// var data = JSON.parse(localStorage.getItem('transactionHistory')) || [];
var dataReceipt = [];
let filteredData = [];

// For Dummy
// function loadDataHistory() {
//     if (data.length > 0) {
//         emptyHistoryElement.style.display = 'block';
//         data.forEach((transaction, index) => {
//             const transactionElement = document.createElement('div');
//             transactionElement.className = 'col-12 p-0';
//             transactionElement.innerHTML = `
//                 <div class="col-12 white-card rounded-4 p-3 mb-3 list-history") id="listHistory${index}" onclick="loadReceipt(${index}, 'listHistory${index}')">
//                     <div class="row justify-content-center align-items-center">
//                         <div class="col-1 text-center">
//                             <img src="../assets/icons/ico-history-success.svg" alt="" style="width: 80px;">
//                         </div>
//                         <div class="col-10">
//                             <label for="" class="transactionDateTime font-grey-12px">${transaction.dateTime}</label><br>
//                             <label for="" class="branchCode mt-1 fc-grey">${transaction.outlet}</label>
//                         </div>
//                         <div class="col-1 text-center">
//                             <img src="../assets/icons/ico-arrow-right.svg" alt="">
//                             `;
//             transactionListElement.appendChild(transactionElement);
//         });
//     } else {
//         emptyHistoryElement.style.display = 'block';
//     }
// }


async function loadDataHistory() {
    await fetch("http://192.168.8.106:3000/transactionHistory", {
        method: 'GET'
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data.data);
        if (data.data.length > 0) {
            emptyHistoryElement.style.display = 'block';
            data.data.forEach((transactionHistory, index) => {
                var loadReceipt = JSON.parse(transactionHistory.log_transaction);
                const transactionElement = document.createElement('div');
                transactionElement.className = 'col-12 p-0';
                transactionElement.innerHTML = `
                    <div class="col-12 white-card rounded-4 p-3 mb-3 list-history") id="listHistory${index}" onclick="loadReceipt(${index}, 'listHistory${index}')">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-1 text-center">
                                <img src="../assets/icons/ico-history-success.svg" alt="" style="width: 80px;">
                            </div>
                            <div class="col-10">
                                <label for="" class="transactionDateTime font-grey-12px">${loadReceipt.dateTime}</label><br>
                                <label for="" class="branchCode mt-1 fc-grey">${loadReceipt.outlet}</label>
                            </div>
                            <div class="col-1 text-center">
                                <img src="../assets/icons/ico-arrow-right.svg" alt="">
                            </div>
                        </div>
                    </div>
                `;
                transactionListElement.appendChild(transactionElement);
                dataReceipt.push(loadReceipt);
            });
        } else {
            emptyHistoryElement.style.display = 'block';
        }
    });

    dataReceipt = data.data.map(item => JSON.parse(item.log_transaction));
    filteredData = [...dataReceipt];
    renderTransactionList();
}

window.loadReceipt = (index, id) => {
    var element = document.getElementById(id);
    $('.list-history').removeClass('history-selected');
    element.classList.add('history-selected');

    emptyHistoryElement.style.display = 'none';

    // const transaction = data[index];
    // const transaction = dataReceipt[index];
    const transaction = filteredData[index];
    receiptListElement.innerHTML = '';
    for (const [key, item] of Object.entries(transaction.receipt)) {
        const itemElement = document.createElement('div');
        itemElement.className = 'row mb-2';
        itemElement.innerHTML = `
            <div class="product-list-receipt">
                <div class="row mb-2">
                    <div class="col-7 font-grey-12px">${item.productName}</div>
                    <div class="col-1 font-grey-12px text-center">${item.qty}</div>
                    <div class="col-2 font-grey-12px text-end">${item.amount}</div>
                    <div class="col-2 font-grey-12px text-end">${item.subTotal}</div>
                </div>
            </div>
        `;
        receiptListElement.appendChild(itemElement);
    }

    const itemElement2 = `
        
        <hr style="border-top: 2px dashed #616161;">

        <div class="row mb-1">
            <div class="col-7 font-grey-12px">Total Belanja</div>
            <div class="col-1 font-grey-12px text-center" id="productSum">${transaction.sumQty}</div>
            <div class="col-4 font-grey-12px text-end" id="totalSum">${transaction.total}</div>
        </div>

        <div class="row mb-1">
            <div class="col-8 font-grey-12px">Tunai</div>
            <div class="col-4 font-grey-12px text-end" id="cash">${transaction.cash}</div>
        </div>

        <div class="row mb-1">
            <div class="col-8 font-grey-12px">Kembalian</div>
            <div class="col-4 font-grey-12px text-end" id="moneyChanges">${transaction.moneyChange}</div>
        <div 
    `;

    receiptListElement.innerHTML += itemElement2;

    receiptElement.style.display = 'block';
    emptyHistoryElement.style.display = 'none';
}




// =========== Seputar Search Bar dan Sort ===========

// Render ulang list berdasarkan filteredData
function renderTransactionList() {
  transactionListElement.innerHTML = '';
  if (filteredData.length > 0) {
    emptyHistoryElement.style.display = 'none';
    filteredData.forEach((transaction, index) => {
      const transactionElement = document.createElement('div');
      transactionElement.className = 'col-12 p-0';
      transactionElement.innerHTML = `
        <div class="col-12 white-card rounded-4 p-3 mb-3 list-history" id="listHistory${index}" onclick="loadReceipt(${index}, 'listHistory${index}')">
          <div class="row justify-content-center align-items-center">
            <div class="col-1 text-center">
              <img src="../assets/icons/ico-history-success.svg" alt="" style="width: 80px;">
            </div>
            <div class="col-10">
              <label class="transactionDateTime font-grey-12px">${transaction.dateTime}</label><br>
              <label class="branchCode mt-1 fc-grey">${transaction.outlet}</label>
            </div>
            <div class="col-1 text-center">
              <img src="../assets/icons/ico-arrow-right.svg" alt="">
            </div>
          </div>
        </div>
      `;
      transactionListElement.appendChild(transactionElement);
    });
  } else {
    emptyHistoryElement.style.display = 'block';
    receiptElement.style.display = 'none';
  }
}

document.getElementById('searchInput').addEventListener('input', function (e) {
  const keyword = e.target.value.toLowerCase();
  filteredData = dataReceipt.filter(item =>
    item.outlet.toLowerCase().includes(keyword) ||
    item.dateTime.toLowerCase().includes(keyword)
  );
  applySort();
});

document.getElementById('sortSelect').addEventListener('change', function () {
  applySort();
});

function applySort() {
  const sortValue = document.getElementById('sortSelect').value;
  switch (sortValue) {
    case 'newest':
      filteredData.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
      break;
    case 'oldest':
      filteredData.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
      break;
    case 'outlet-asc':
      filteredData.sort((a, b) => a.outlet.localeCompare(b.outlet));
      break;
    case 'outlet-desc':
      filteredData.sort((a, b) => b.outlet.localeCompare(a.outlet));
      break;
  }
  renderTransactionList();
}