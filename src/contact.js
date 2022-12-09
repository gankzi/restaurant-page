function contact() {
    const contactDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const mainInfo = document.createElement('div');
    
    contactDiv.setAttribute('id', 'main');
    h1.innerHTML = 'Contact Us';
    mainInfo.classList.add('main-info')
    
    
    const locationDiv = document.createElement('div');
    const locationHeading = document.createElement('h3');
    const locationP1 = document.createElement('p');
    const locationP2 = document.createElement('p');
    const locationP3 = document.createElement('p');

    locationDiv.classList.add('location')
    locationHeading.innerHTML = "Location";
    locationP1.innerHTML = "Korean Fried Chicken";
    locationP2.innerHTML = "777 Chicken Street";
    locationP3.innerHTML = "Vancouver, BC V6B 3K3";

    locationDiv.append(locationHeading, locationP1, locationP2, locationP3);

    const hoursDiv = document.createElement('div');
    const hoursHeading  = document.createElement('h3');
    const hoursP1Heading = document.createElement('p');
    const hoursP1 = document.createElement('p');
    const hoursP2Heading = document.createElement('p');
    const hoursP2 = document.createElement('p');

    hoursDiv.classList.add('hours');
    hoursHeading.innerHTML = "Hours of operation";
    hoursP1Heading.classList.add('days');
    hoursP1Heading.innerHTML = "Monday to Thursday";
    hoursP1.innerHTML = "3pm to 11pm";
    hoursP2Heading.classList.add('days');
    hoursP2Heading.innerHTML = "Friday to Sunday & Holidays";
    hoursP2.innerHTML = "3pm to 1am";

    hoursDiv.append(hoursHeading, hoursP1Heading, hoursP1, hoursP2Heading, hoursP2);

    const contactsDiv = document.createElement('div');
    const contactsHeading = document.createElement('h3');
    const contactsP1 = document.createElement('p');
    const contactsP2 = document.createElement('p');

    contactsDiv.classList.add('contacts');
    contactsHeading.innerHTML = "Contacts";
    contactsP1.innerHTML = "Tel: 778-751-7835";
    contactsP2.innerHTML = "Email: therealKFC@gmail.com";

    contactsDiv.append(contactsHeading, contactsP1, contactsP2);

    mainInfo.append(locationDiv, hoursDiv, contactsDiv);

    contactDiv.append(h1, mainInfo);

    return contactDiv;

}

export default contact();