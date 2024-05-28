import "./style.scss";
import { ErrorMessage, Field, Formik } from "formik";
import { Container } from "@containers";
import { toast } from "react-toastify";
import { Form, useNavigate } from "react-router-dom";
import { IconButton, Button, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { signInValidationSchema } from "../../utils/validation";
import { setCookies } from "../../utils/cooki";
import { Signin } from "../../types/interface/aouth";
import { auth } from "../../service/auth";

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const initialValues: Signin = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values: Signin) => {
    try {
      const response = await auth.signin(values);
      console.log(auth);
      
      if (response.status === 200) {
        // navigate("/main")
        // setCookies("start", response?.data.created_at.slice(0, 10));
        setCookies("access_token", response?.data.access_token);
        setCookies("refresh_token", response?.data.refresh_token);
        setCookies("id", response?.data?.id);
        toast.success("successfully logged in");
        // setTimeout(() => {
        //   navigate("/");
        // }, 1000);

        // localStorage.setItem("token", response.data.access_token);
        // Notifation({ title: "Tizimga muvaffaqiyatli kirdingiz", type: "success" });
      }
    } catch (error) {
      // toast.error("Error : " + error?.message);
      console.log(error);
      // Notifation({ title: "Xatolik mavjud", type: "error" });
    }
  };

  return (
    <div>
      <Container>
        <div className="h-screen flex items-center justify-center flex-col gap-8 p-5 ">
          <h1 className="text-[35px] font-bold mt-[-150px]">Tizimga kirish</h1>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={signInValidationSchema}
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
                  <div className="flex  justify-between mb-3 items-center ">
                    <p
                      className=" cursor-pointer hover:text-blue"
                      onClick={() => setModal(true)}
                    >
                      Parolni unutdingizmi?
                    </p>

                    <p className="cursor-pointer" onClick={() => navigate("/")}>
                      Ro'yxatdan o'tish qismi
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
      </Container>
    </div>
  );
};

export default index;
