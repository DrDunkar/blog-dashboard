export const formValidation = (formData) => {
  const newErrors = {};
  if (formData) {
    if (!formData.email.includes("@")) newErrors.email = "Invalid email.";
    if (formData.password.length < 6) newErrors.password = "Min 6 characters.";
    if (formData?.password !== formData?.confirmpassword)
      newErrors.confirmpassword = "Password doesnot match";
    return newErrors;
  }
};
