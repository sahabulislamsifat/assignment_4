// function sendNotification(email) {
//   if (email.indexOf("@") === -1) {
//     return "Invalid Email";
//   }

//   const [username, domain] = email.split("@");
//   const result = `${username} sent you an email from ${domain}`;
//   return result;
// }

// console.log(sendNotification("hanif@gmail.com"));



function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const slittedEmail = email.split("@");
  console.log();

  // const result = `${slittedEmail[0]} sent you an email from ${slittedEmail[1]}`;
  const result = slittedEmail[0] + " sent you an email from " + slittedEmail[1];
  return result;
}
  console.log(sendNotification("hanif@gmail.com"));

