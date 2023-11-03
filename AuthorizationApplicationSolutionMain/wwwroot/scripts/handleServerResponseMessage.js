function catchUserInformationFromServer(response) {
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

function spitServerMessage(response) {
    const cutFirstPartMassege = response.split('{');
    const cutSecondPartMessage = cutFirstPartMassege[1].split('}');
    const splitServerResultCode = cutSecondPartMessage[0].split(':');
    const serverResultCode = splitServerResultCode[1].split(',');
    let errorMessage;
    let successMessage;

    
    if(serverResultCode[0] == "-1") {
        successMessage  = document.getElementById('myAlertSuccess');
        successMessage.style.display = "none";
        errorMessage = document.getElementById('myAlertError');
        errorMessage.style.display = "block";
    }
    else { 
        errorMessage = document.getElementById('myAlertError');
        errorMessage.style.display = "none";
        successMessage  = document.getElementById('myAlertSuccess');
        successMessage.style.display = "block";
        let userInfo = catchUserInformationFromServer(response);
        showUserInformation(userInfo);
    }
}

function showUserInformation(userInfo) {
    let aElement = document.createElement("a");
    const aElementDefaultLength = 17;
    if(document.querySelector("#successResponse").textContent.length == aElementDefaultLength)
    {
        aElement.append("FirstName:  " + userInfo[0] + ", ");
        aElement.append("LastName:  " + userInfo[1] + ", ");
        aElement.append("Mobile:  " + userInfo[2] + ", ");
        aElement.append("Email:  " + userInfo[3] + ", ");
        aElement.append("CountryId:  " + userInfo[4] + ".");
        document.getElementById("successResponse").append(aElement);
    }
}