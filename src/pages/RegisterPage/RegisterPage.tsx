import * as Types from "./RegisterPage.types";
import * as Styles from "./RegisterPage.styles";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import { PHONE_REGEX, PASS_REGEX } from "shared/constants";
import { useFormik } from "formik";

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

const RegisterPage = ({}: Types.Props) => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push(RoutesEnum.LoginPage);
  };

  const { values, setFieldValue, errors, validateField, validateForm, isValid, submitForm } =
    useFormik<{
      fullname: string;
      username: string;
      email: string;
      phoneNumber: string;
      password: string;
    }>({
      initialValues: { email: "", phoneNumber: "", fullname: "", password: "", username: "" },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        validateForm();
        //do smth after validation
      },
    });

  return (
    <Styles.PageContainer>
      <Styles.ImageContainer>
        <Styles.RightContainer elevation={10}>
          <Styles.LoginFormContainer>
            <Styles.TitleHeader>Register</Styles.TitleHeader>
            <Styles.LoginContainer>
              <Styles.StyledTextField
                id="fullname"
                label="fullname"
                value={values.fullname}
                type="input"
                variant="outlined"
              />
              {errors.fullname && <Styles.Error>{errors.fullname}</Styles.Error>}
              <Styles.StyledTextField
                id="username"
                label="username"
                value={values.username}
                type="input"
                variant="outlined"
              />
              {errors.username && <Styles.Error>{errors.username}</Styles.Error>}
              <Styles.StyledTextField
                id="email"
                label="e-mail"
                value={values.email}
                type="input"
                variant="outlined"
              />
              {errors.email && <Styles.Error>{errors.email}</Styles.Error>}
              <Styles.StyledTextField
                id="phoneNumber"
                label="phone number"
                value={values.phoneNumber}
                type="input"
                variant="outlined"
              />
              {errors.phoneNumber && <Styles.Error>{errors.phoneNumber}</Styles.Error>}
              <Styles.StyledTextField
                id="password"
                label="password"
                value={values.password}
                type="password"
                variant="outlined"
              />
              {errors.password && <Styles.Error>{errors.password}</Styles.Error>}
              <Styles.LoginButton onClick={submitForm}>REGISTER</Styles.LoginButton>
              <Styles.RegisterProposeContainer>
                <Styles.StyledTypo variant="body2">Already have an account?</Styles.StyledTypo>
                <Styles.StyledLink onClick={goToLoginPage}>Login</Styles.StyledLink>
              </Styles.RegisterProposeContainer>
            </Styles.LoginContainer>
          </Styles.LoginFormContainer>
        </Styles.RightContainer>
      </Styles.ImageContainer>
    </Styles.PageContainer>
  );
};

export default RegisterPage;
