import "./style.scss";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { IconButton, Button, InputAdornment, TextField, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Signup } from "../../types/interface/aouth";
import { validationSchemaRegister } from "../../utils/validation";
import { setCookies } from "../../utils/cooki";
import { auth } from "../../service/auth";
import Notifation from "@notifation";

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues: Signup = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "",
  };

  const handleSubmit = async (values: Signup) => {
    try {
      const response = await auth.signup(values);
      if (response.status === 200) {
        setCookies("access_token", response?.data.access_token);
        setCookies("refresh_token", response?.data.refresh_token);
        setCookies("id", response?.data?.id);
        // setTimeout(() => {
        //   navigate("/main");
        // }, 1000);

        Notifation({
          title: "Tizimga muvaffaqiyatli kirdingiz",
          type: "success",
        });
      }
    } catch (error) {
      Notifation({ title: "Xatolik mavjud", type: "error" });
    }
  };

  return (
    <div className="w-full  flex items-center justify-center">
      <div className="max-w-[710px] w-full py-10 px-20 rounded-tl-[30px] rounded-br-3xl shadow-[30px] pt-[200px]">
        <h1 className="text-[35px] font-bold mt-[-150px] text-center">Ro'yxatdan o'tish</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaRegister}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="first_name"
                  type="first_name"
                  as={TextField}
                  label="First Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="first_name"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="last_name"
                  type="last_name"
                  as={TextField}
                  label="Last Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="last_name"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  label="Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                 <Field
                as={RadioGroup}
                aria-label="gender"
                name="gender"
                className="flex items-center mb-3"
              >
                <div className="flex items-center justify-between">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </div>
              </Field>
              <ErrorMessage
                name="gender"
                component="p"
                className="mb-3 text-red-500 text-center"
              />
                <div className="flex  justify-between mb-3 items-center ">
                  <p
                    className="cursor-pointer"
                    onClick={() => navigate("/signin")}
                  >
                    Tizimga kirish
                  </p>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                >
                  {isSubmitting ? "Submitting" : "Tizimga kirish"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;
