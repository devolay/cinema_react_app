import * as Types from "./ReservationFormPage.types";
import * as Styles from "./ReservationFormPage.styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import * as SharedStyles from "shared/styles";
import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Typography from "@material-ui/core/Typography";
import { createStyles, InputAdornment, makeStyles, Theme } from "@material-ui/core";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  fullname: Yup.string().min(3, "Too short name").required("Please enter your full name"),
  email: Yup.string().email("The email is incorrect").required("Please enter your email"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(9, "Phone no. must be atleast 9 digits")
    .notRequired(),
});

const ReservationForm = ({}: Types.Props): React.ReactElement => {
  const { values, setFieldValue, errors, validateField, validateForm, isValid, submitForm } =
    useFormik<{
      email: string;
      fullname: string;
      phoneNumber: string;
    }>({
      initialValues: { email: "", phoneNumber: "", fullname: "" },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        //do something
        validateForm();
      },
    });

  return (
    <SharedStyles.Center>
      <Styles.FormContainer>
        <Styles.StyledTypgraphy variant="h4">Reservation</Styles.StyledTypgraphy>
        <Styles.StyledTypgraphy variant="overline">Personal Informations</Styles.StyledTypgraphy>
        <Styles.StyledTextField
          id="standard-basic"
          label="Full name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BsPersonFill />
              </InputAdornment>
            ),
          }}
        />
        <Styles.StyledTextField
          id="standard-basic"
          label="E-mail"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdEmail />
              </InputAdornment>
            ),
          }}
        />
        <Styles.StyledTextField
          id="standard-basic"
          label="Phone number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AiFillPhone />
              </InputAdornment>
            ),
          }}
        />
      </Styles.FormContainer>
    </SharedStyles.Center>
  );
};

export default ReservationForm;
