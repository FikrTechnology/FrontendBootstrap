function convertIDR(idr){
    return idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function loadData(){
    paymentMethod('tunai');
    chooseMoney('customeCard');
}

function paymentMethod(param){
    var total = parseInt(sessionStorage.getItem("total"));
    var element = document.getElementById(param);
    $('.payment-method').removeClass('payment-method-selected');
    element.classList.add('payment-method-selected');
    if(param == 'tunai'){
        $('#cashMethod').show();
        $('#qrisMethod').hide();
        $('#transferMethod').hide();
    }else if(param == 'qris'){
        $('#qrisMethod').show();
        $('#transferMethod').hide();
        $('#cashMethod').hide();
    }else if(param == 'transfer'){
        $('#transferMethod').show();
        $('#cashMethod').hide();
        $('#qrisMethod').hide();
        $('#totalForTF').html('Rp '+ convertIDR(total));
    }
}

function inputCustomeMoney(element){
    var total = parseInt(sessionStorage.getItem("total"));
    var cash = parseInt($(element).val());
    var moneyChange = cash - total;

    $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
}

function chooseMoney(param){
    var total = parseInt(sessionStorage.getItem("total"));
    var cash = 0;
    var moneyChange = 0;
    var element = document.getElementById(param);
    $('.money-card').removeClass('payment-method-selected');
    element.classList.add('payment-method-selected');

    if(param == 'customeCard'){
        document.getElementById('inpAmount').value = '';
        $('#moneyChange').html('-');
        $('.inpAmount').show();
        $('#amount').hide();
        $('#total').html('Rp '+ convertIDR(total));
    }else if(param == 'sepuluhCard'){
        cash = 10000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 10.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }else if(param == 'duaPuluhCard'){
        cash = 20000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 20.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }else if(param == 'limaPuluhCard'){
        cash = 50000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 50.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }else if(param == 'seratusCard'){
        cash = 100000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 100.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }
}