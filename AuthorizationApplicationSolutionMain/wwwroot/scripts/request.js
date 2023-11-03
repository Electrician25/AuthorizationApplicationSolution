async function sendRequestOnServer() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const xhr = new XMLHttpRequest();
    const method = 'POST';
    const url = 'http://isapi.icu-tech.com/icutech-test.dll/soap/IICUTech';

    xhr.open(method, url, true);

    xhr.onload = () => {
        const response = xhr.response;
        spitServerMessage(response);
    }
    
    xhr.send(bodyXmlRequest(username,password));
}

function bodyXmlRequest(username,password) {
    const xml = '' +
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" '+
    '	xmlns:ns1="urn:ICUTech.Intf-IICUTech" ' +
    '	xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
    '	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    '	xmlns:enc="http://www.w3.org/2003/05/soap-encoding">' +
    '	<env:Body>' +
    '		<ns1:Login env:encodingStyle="http://www.w3.org/2003/05/soap-encoding">' +
    `			<UserName xsi:type="xsd:string">${username}</UserName>` +
    `			<Password xsi:type="xsd:string">${password}</Password>` +
    '			<IPs xsi:type="xsd:string"></IPs>' +
    '		</ns1:Login>' +
    '	</env:Body>' +
    '</env:Envelope>';
    return xml;
}