async function sendRequest() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const xhr = new XMLHttpRequest();
    const method = 'POST';
    const url = 'http://isapi.icu-tech.com/icutech-test.dll/soap/IICUTech';

    xhr.open(method, url, true);

    xhr.onload = () => {
        const response = xhr.response;
        const responseMessage = foundUser(response);
        console.log(responseMessage);
    }

    xhr.send(getBodyXmlRequest(username,password));
}

function getBodyXmlRequest(username,password) {
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

function createNewUser(username,password) {
    const xml = '' +
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" ' +
    '   xmlns:ns1="urn:ICUTech.Intf-IICUTech" ' +
    '   xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
    '   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    '   xmlns:enc="http://www.w3.org/2003/05/soap-encoding">' +
    '   <env:Body>' +//igor.gulyaev.92@list.ru
    '       <ns1:RegisterNewCustomer env:encodingStyle="http://www.w3.org/2003/05/soap-encoding">' +
    `           <Email xsi:type="xsd:string">${username}</Email>` +
    '           <FirstName xsi:type="xsd:string">DavidS</FirstName>' +
    '           <LastName xsi:type="xsd:string">Shmactrertaswsw</LastName>' +
    `			<Password xsi:type="xsd:string">${password}</Password>` + 
    '           <Mobile xsi:type="xsd:string">89182999732</Mobile>' +
    '           <CountryID xsi:type="xsd:int">1</CountryID>' +
    '           <aID xsi:type="xsd:int">2</aID>' +
    '           <SignupIP xsi:type="xsd:string">167.34.99.72</SignupIP>' +
    '       </ns1:RegisterNewCustomer>' +
    '   </env:Body>' +
    '</env:Envelope>';

    const xhr = new XMLHttpRequest();
    const method = 'POST';
    const url = 'http://isapi.icu-tech.com/icutech-test.dll/soap/IICUTech';

    xhr.open(method, url, true);

    xhr.send(xml);
};