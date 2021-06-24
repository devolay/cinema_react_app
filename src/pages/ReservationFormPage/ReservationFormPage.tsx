import * as Types from "./ReservationFormPage.types";
import * as Styles from "./ReservationFormPage.styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import * as SharedStyles from "shared/styles";
import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import { GiDivingDagger } from "react-icons/gi";
import useCinemaContext from "hooks/useCinemaContext";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  fullname: Yup.string().min(3, "Too short name").required("Please enter your full name"),
  email: Yup.string().email("The email is incorrect").required("Please enter your email"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(9, "Phone no. must be atleast 9 digits")
    .max(9, "Phone no. must be atleast 9 digits")
    .notRequired(),
});

const ReservationForm = (): React.ReactElement => {
  const { seatsData } = useCinemaContext();
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

  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.id, e.target.value, false).then(() => {
      validateField(e.target.id);
    });
  };

  const cancelHandler = () => {
    history.push(RoutesEnum.RoomPage);
  };

  return (
    <SharedStyles.Center>
      <Styles.FormContainer>
        <Styles.StyledTypgraphy variant="h4">Reservation</Styles.StyledTypgraphy>
        <Styles.StyledTypgraphy variant="overline">Personal Informations</Styles.StyledTypgraphy>
        <div>
          <Styles.StyledTextField
            id="fullname"
            label="Full name"
            value={values.fullname}
            onChange={onChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BsPersonFill />
                </InputAdornment>
              ),
            }}
          />
          {errors.fullname && <Styles.Error>{errors.fullname}</Styles.Error>}
        </div>
        <div>
          <Styles.StyledTextField
            id="email"
            label="E-mail"
            value={values.email}
            onChange={onChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdEmail />
                </InputAdornment>
              ),
            }}
          />
          {errors.email && <Styles.Error>{errors.email}</Styles.Error>}
        </div>
        <div>
          <Styles.StyledTextField
            id="phoneNumber"
            label="Phone number"
            value={values.phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.currentTarget.value.length <= 9) onChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiFillPhone />
                </InputAdornment>
              ),
            }}
          />
          {errors.phoneNumber && <Styles.Error>{errors.phoneNumber}</Styles.Error>}
        </div>
        <Styles.FormRow>
          <Styles.StyledButton onClick={() => submitForm()}>Confirm</Styles.StyledButton>
          <Styles.StyledButton onClick={() => cancelHandler()}>Cancel</Styles.StyledButton>
        </Styles.FormRow>
      </Styles.FormContainer>
    </SharedStyles.Center>
  );
};

export default ReservationForm;
