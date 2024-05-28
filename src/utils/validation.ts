import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalit email").required("Email is require"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Passpord must be at least 6 characters and contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
   
  });

  export const validationSchemaRegister = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First Name is required"),
    gender: Yup.string().required("Gender is required"),
    last_name: Yup.string().required("Last Name is required"),
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Passpord must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
  });