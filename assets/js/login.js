async function login(){
    var nip = document.getElementById('nip').value;
    var pass = document.getElementById('password').value;

    // var dummyNip = "17220207";
    // var dummyPass = "1234567890";
    
    // if((nip != '') && (pass != '')){
    //     if (nip == dummyNip && pass == dummyPass){
    //         window.location = "pages/dashboardHome.html";
    //     } else {
    //         alert('Data Tidak Ditemukan');
    //     }
    // }
    if((nip != '') && (pass != '')){
        await fetch('http://192.168.8.106:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nip: nip, pass: pass})
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.status === 400){
                
                alert('Data Tidak Ditemukan');
            } else {
                window.location = "pages/dashboardHome.html";
            }
        });
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