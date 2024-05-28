// import { Box, Modal, TextField, Typography } from "@mui/material";
// import { auth } from "../../service/auth";
// import {ModalProps} from "@ModalProps"
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Button } from "@mui/material";
// import {Signup} from "../../types/interface/aouth"
// import { useState } from "react";
// import { validationSchemaRegister } from "../../utils/validation";

// const style = {
//     position: "absolute" as "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };

// const SignubModal = ({open,handelClose}:ModalProps) => {
//     const [modal, setModal] = useState(false);

//     const initialValues:Signup = {
//         email: "",
//         first_name: "",
//         last_name: "",
//         password: "",
//         gender: "",
//       };
//       const handleSubmit = async (values: Signup) => {
        
//          try {
//            const response = await auth.signup(values);
//            response.status === 200 && setModal(true);
//            handelClose()
//          } catch (error) {
//            console.log(error);
//          }
//        };
//   return (
//     <div>
//         <Modal
//             open={open}
//             onClose={handelClose}
//             aria-labelledby="parent-modal-title"
//             aria-describedby="parent-modal-description"
//         >
//             <Box sx={{ ...style, width: 400 }}>
//             <Typography
//                 id="keep-mounted-modal-title "
//                 className="text-center"
//                 variant="h6"
//                 component="h2"
//             >
//                 Emailni kiriting
//             </Typography>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchemaRegister}
//                 onSubmit={handleSubmit}
//             >
//                 <Form>
//                 <Field
//                     name="email"
//                     type="email"
//                     as={TextField}
//                     label="Email"
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     helperText={
//                     <ErrorMessage
//                         name="email"
//                         component="p"
//                         className="text-[red] text-[15px]"
//                     />
//                     }
//                 />

//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                 >
//                     submit
//                 </Button>
//                 </Form>
//             </Formik>
//             </Box>
//         </Modal>
//     </div>
//   )
// }

// export default SignubModal