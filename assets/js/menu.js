function category(produk, id){
    var element = document.getElementById(id);
    $('.cat-product-sub-card').removeClass('category-selected');
    element.classList.add('category-selected');
    if(produk == 'dapur'){
        $('.list-product-dapur').show();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'rumah'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').show();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'makanan'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').show();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'minuman'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').show();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'rokok'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').show();
        $('.list-product-lain').hide();
    }else if(produk == 'lain'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').show();
    }
}