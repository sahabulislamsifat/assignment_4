// const person1 = { name: "sifat", address: "rangpur" };

// function sendNotification(email) {
//   // const [username, domain] = email.split("@");
//   //   const username = "sifat";
//   //   const domain = "sifat";
//   //   const result = `${username} sent you an email from ${domain}`;
//   const result = email.username + "sent you an email from" + email.domain;
//   return result;
// }

// console.log(sendNotification(person1));
// console.log(sendNotification("Sifat234@hotline.com"));
// console.log(sendNotification("sajabul@yeahoo.com"));

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  const [username, domain] = email.split("@");
  const result = `${username} sent you an email from ${domain}`;
  return result;
}

console.log(sendNotification("sahabulislamsifat@gmail.com"));
