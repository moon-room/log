module.exports = {
  validateSignupForm: function(payload) {
    const errors = [];
    let isFormValid = true;
    let message = "";

    if (
      !payload ||
      typeof payload.username !== "string" ||
      payload.username.length < 3
    ) {
      isFormValid = false;
      errors.push("Usernames must be longer than 4 characters");
    }

    if (!payload || payload.password.length < 16) {
      isFormValid = false;
      errors.push(
        "Generate a password above 16 characters. Your data is sacred, guard it well."
      );
    }

    if (!isFormValid) {
      message = "Check the form for errors.";
    }

    return {
      success: isFormValid,
      message,
      errors
    };
  },
  validateLoginForm: function(payload) {
    const errors = [];
    let isFormValid = true;
    let message = "";

    if (
      !payload ||
      typeof payload.username !== "string" ||
      payload.username.trim().length === 0
    ) {
      isFormValid = false;
      errors.push("Please provide your username address.");
    }

    if (
      !payload ||
      typeof payload.password !== "string" ||
      payload.password.trim().length === 0
    ) {
      isFormValid = false;
      errors.push("Please provide your password.");
    }

    if (!isFormValid) {
      message = "Check the form for errors.";
    }

    return {
      success: isFormValid,
      message,
      errors
    };
  }
};
