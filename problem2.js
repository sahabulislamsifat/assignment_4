function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  const [username, domain] = email.split("@");
  const result = `${username} sent you an email from ${domain}`;
  return result;
}

console.log(sendNotification("hanif@gmail.com"));



// trying

