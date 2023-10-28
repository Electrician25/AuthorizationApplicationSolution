function catchResponseMessage(response) {
    const cutFirstPartMassege = response.split('{');
    const cutSecondPartMessage = cutFirstPartMassege[1].split('}');
    const userInformation = cutSecondPartMessage[0]
    const deleteSimbols = /\*|"|,|\$/g;
    const newString = userInformation.replace(deleteSimbols, '');
    const split = newString.split(':');

    const firstNameSplit = split[2].split('L');
    const firstName = firstNameSplit[0]; 

    const secondNameSplit = split[3].split('C');
    const secondName = secondNameSplit[0];

    const mobileSplit = split[10].split('E');
    const mobile = mobileSplit[0];

    const emailSplit = split[11].split('E');
    const email = emailSplit[0];

    const countryIdSplit = split[14].split('S');
    const countryId = countryIdSplit[0];
    
    const result = [firstName,secondName,mobile,email,countryId];
    return result;
}

function foundUser(response) {
    const cutFirstPartMassege = response.split('{');
    const cutSecondPartMessage = cutFirstPartMassege[1].split('}');
    const splitResultCode = cutSecondPartMessage[0].split(':');
    const resultCode = splitResultCode[1].split(',');
    let myAlertError;
    let myAlertSuccess;

    
    if(resultCode[0] == "-1") {
        myAlertSuccess  = document.getElementById('myAlertSuccess');
        myAlertSuccess.style.display = "none";
        myAlertError = document.getElementById('myAlertError');
        myAlertError.style.display = "block";
    }
    else { 
        myAlertError = document.getElementById('myAlertError');
        myAlertError.style.display = "none";
        myAlertSuccess  = document.getElementById('myAlertSuccess');
        myAlertSuccess.style.display = "block";
        let userInfo = catchResponseMessage(response);
        createUserInfoElement(userInfo);
    }
}

function createUserInfoElement(userInfo) {
    let aElement = document.createElement("a");
    if(document.querySelector("#successResponse").textContent.length == 37)
    {
        aElement.append("FirstName:  " + userInfo[0] + ", ");
        aElement.append("LastName:  " + userInfo[1] + ", ");
        aElement.append("Mobile:  " + userInfo[2] + ", ");
        aElement.append("Email:  " + userInfo[3] + ", ");
        aElement.append("CountryId:  " + userInfo[4] + ".");
        document.getElementById("successResponse").append(aElement);
    }
}