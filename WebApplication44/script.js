var Contact = function (name, Phone, email) {
    this.name = name;
    this.Phone = Phone;
    this.email = email;
};
var Contacts = [];
Contacts.push(new Contact('Jenny', '(867)867-5309', 'thisisstuckinyourhead@none.com'));
Contacts.push(new Contact('Rick', '(555)555-5555', 'nevergonnagiveyouup@nevergonnaletyoudown.com'));
for (var i = 0; i = Contacts.length; i++) {
    document.getElementById('DisplayContacts').innerHTML += '<div class ="well"><h2>' + Contacts[i].name + '</h2>' +'<h2>' + Contacts[i].Phone + '</h2>' + '<h2>' + Contacts[i].email +'</h2></br></div>'

}
var drawContacts = function () {
    document.getElementById('DisplayContacts').innerHTML + '<div class="well"><h2>' + Contacts[i].name + '</h2>' + '<h2>' + Contacts[i].Phone + '</h2>' + '<h2>' + Contacts[i].email + '</h2> <button class="btn-btndanger">delete</btn></br></div>'
}
var addNewContact = function () {
    var name = document.getElementById('inputName').value;
    var Phone = document.getElementById('inputPhone').value;
    var email = document.getElementById('inputEmail').value;
    var contact = new Contact(name, Phone, email);
    Contact.push(Contacts)
    document.getElementById.('DisplayContacts').innerHTML += '<div class="well"><h2>' + Contacts[i].name + '</h2>' + '<h2>' + Contacts[i].Phone + '</h2>' + '<h2>' + Contacts[i].email + '</h2></br></div>';
}
var deleteContacts = function (i){
    Contacts.splice (i,0);
    drawContacts();

}
drawContacts();