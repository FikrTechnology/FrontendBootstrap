function login(){
    var nip = document.getElementById('nip').value;
    var pass = document.getElementById('password').value;
    
    if((nip != '') && (pass != '')){
        window.location = "pages/dashboardHome.html";
    }else{
        $('#alertNIP').hide();
        $('#alertPass').hide();
        if((nip == '') && (pass == '')){
            console.log('masuk sini');
            $('#alertNIP').show();
            $('#alertPass').show();
        }else if(nip == ''){
            $('#alertNIP').show();
        }else{
            $('#alertPass').show();
        }
    }
}