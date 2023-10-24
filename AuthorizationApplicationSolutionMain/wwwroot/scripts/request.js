async function sendRequest() {
    const xhr = new XMLHttpRequest();
    const method = 'POST';
    const url = 'http://isapi.icu-tech.com/icutech-test.dll/soap/IICUTech';

    xhr.open(method, url, true);

    xhr.onload = () => {
        let response = xhr.response;
        let responseMessage = catchServerResponseMessage(response);
        if(responseMessage == "\"User not found\"")
        {
            console.log('nice work');
        }
        
    }
    xhr.send(getBodyXmlRequest());
}

function catchServerResponseMessage(response) {
    let cutFirstPartMassege = response.split('{');
    let cutSecondPartMessage = cutFirstPartMassege[1].split('}');
    let userInformation = cutSecondPartMessage[0].split(':');
    return userInformation[2];
}

function getBodyXmlRequest(){
    let xml = '' +
'<?xml version="1.0" encoding="UTF-8"?>' +
'<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" '+
'	xmlns:ns1="urn:ICUTech.Intf-IICUTech" ' +
'	xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
'	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
'	xmlns:enc="http://www.w3.org/2003/05/soap-encoding">' +
'	<env:Body>' +
'		<ns1:Login env:encodingStyle="http://www.w3.org/2003/05/soap-encoding">' +
'			<UserName xsi:type="xsd:string">Wwww</UserName>' +
'			<Password xsi:type="xsd:string">Gxshebsv</Password>' +
'			<IPs xsi:type="xsd:string"></IPs>' +
'		</ns1:Login>' +
'	</env:Body>' +
'</env:Envelope>';
    return xml;
}