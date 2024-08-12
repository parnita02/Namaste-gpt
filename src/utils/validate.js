export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPassValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    );
  const isNameValid = /[a-zA-Z]+\.?/.test(name);
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassValid) return "Password is not valid";
  if (!isNameValid) return "Name is not valid";

  return null;
};
