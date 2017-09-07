const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default (emails) => {
  const invalidEmailArray = emails.split(',')
  .map(email => email.trim())
  .filter(email => re.test(email) === false)

  if (invalidEmailArray.length) {
    return ` These emails are invalid: ${invalidEmailArray}`;
  }
  return;
};
