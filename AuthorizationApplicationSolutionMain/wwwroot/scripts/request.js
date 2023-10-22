console.log("12131");
const getJson = async () =>{
    let json = JSON.stringify({
        userName: document.getElementById("usernameInput").value,
        userPassword: document.getElementById("passwordInput").value
    });
    console.log(json);
    let request  = await sendPostRequest(json,`https://schemas.xmlsoap.org/wsdl/soap/`);
    console.log(request);
    if(request != undefined) {
        changesLocation();
    }
}

async function sendPostRequest(json, uri) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request(uri, {
        method: 'POST',
        body: json,
        headers:myHeaders
    });

    let search_result;

    try{
        search_result = await fetch(request)
        .then((response) => {
            return response.json();
        });
    }

    catch{
        Errors();
    }
    
    return search_result;
}

function Errors(){
    console.log("Ошибка!");
}