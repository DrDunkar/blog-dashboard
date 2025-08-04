export const formValidation = (formData = {}) => {
  const errors = {};

  const { email, password, confirmpassword, content } = formData;

  if (!email?.includes("@")) {
    errors.email = "Invalid email.";
  }

  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (confirmpassword && password !== confirmpassword) {
    errors.confirmpassword = "Passwords do not match.";
  }

  if (!content?.trim()) {
    errors.content = "Content is required.";
  }

  return errors;
};
