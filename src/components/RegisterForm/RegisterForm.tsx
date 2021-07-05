import * as Types from "./RegisterForm.types";
import * as Styles from "./RegisterForm.styles";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import { PHONE_REGEX, PASS_REGEX } from "shared/constants";
import { useFormik } from "formik";
import { loginWithEmail, registerWithEmail } from "store/profiles/index";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().min(3, "Too short name").required("Please enter your full name"),
  username: Yup.string().min(3, "Too short name").required("Please enter your username"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(
      PASS_REGEX,
      "Password have to contain one uppercase letter, one lowercase, one number and one special character "
    ),
  email: Yup.string().email("The email is incorrect").required("Please enter the e-mail address"),
  phoneNumber: Yup.string()
    .matches(PHONE_REGEX, "Phone number is not valid")
    .min(9, "Phone no. must be atleast 9 digits")
    .max(9, "Phone no. must be atleast 9 digits")
    .notRequired(),
});

const RegisterForm = ({ changeForm }: Types.Props) => {
  const history = useHistory();

  const goToMoviesPage = () => {
    history.push(RoutesEnum.MoviesPage);
  };

  const { values, setFieldValue, errors, validateField, validateForm, isValid, submitForm } =
    useFormik<{
      fullname: string;
      username: string;
      email: string;
      password: string;
    }>({
      initialValues: { email: "", fullname: "", password: "", username: "" },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        validateForm();
        if (isValid) {
          registerWithEmail(values.email, values.password);
          loginWithEmail(values.email, values.password).then(goToMoviesPage);
        }
      },
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.id, e.target.value, false).then(() => {
      validateField(e.target.id);
    });
  };

  return (
    <Styles.LoginFormContainer>
      <Styles.TitleHeader>Register</Styles.TitleHeader>
      <Styles.LoginContainer>
        <Styles.StyledTextField
          id="fullname"
          size="small"
          label="fullname"
          value={values.fullname}
          onChange={onChange}
          helperText={errors.fullname ? errors.fullname : " "}
          type="input"
          variant="outlined"
          fullWidth
        />
        <Styles.StyledTextField
          id="username"
          size="small"
          label="username"
          value={values.username}
          helperText={errors.username ? errors.username : " "}
          onChange={onChange}
          type="input"
          variant="outlined"
          fullWidth
        />
        <Styles.StyledTextField
          id="email"
          size="small"
          label="e-mail"
          value={values.email}
          helperText={errors.email ? errors.email : " "}
          onChange={onChange}
          type="input"
          variant="outlined"
          fullWidth
        />
        <Styles.StyledTextField
          id="password"
          size="small"
          label="password"
          value={values.password}
          helperText={errors.password ? errors.password : " "}
          onChange={onChange}
          type="password"
          variant="outlined"
          fullWidth
        />
        <Styles.LoginButton fullWidth onClick={submitForm}>
          REGISTER
        </Styles.LoginButton>
        <Styles.RegisterProposeContainer>
          <Styles.StyledTypo variant="body2">Already have an account?</Styles.StyledTypo>
          <Styles.StyledLink onClick={() => changeForm(false)}>Login</Styles.StyledLink>
        </Styles.RegisterProposeContainer>
      </Styles.LoginContainer>
    </Styles.LoginFormContainer>
  );
};

export default RegisterForm;
