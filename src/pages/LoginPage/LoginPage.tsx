import * as Types from "./LoginPage.types";
import * as Styles from "./LoginPage.styles";
import * as SharedStyles from "shared/styles";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import DividerWithText from "components/DividerWithText";
import { useMediaQuery } from "@material-ui/core";
import { PASS_REGEX } from "shared/constants";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdArrowBack } from "react-icons/md";
import { loginWithEmail, loginWithGoogle } from "store/profiles";
import { loginWithFacebook } from "./../../store/profiles/index";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("This email is incorrect!").required("Please enter your full email"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(
      PASS_REGEX,
      "Password have to contain one uppercase letter, one lowercase, one number and one special character "
    ),
});

const LoginPage = ({}: Types.Props) => {
  const matches = useMediaQuery("(min-width:600px)");
  const firebase = useFirebase();
  const history = useHistory();

  const goToRegisterPage = () => {
    history.push(RoutesEnum.RegisterPage);
  };

  const goToMoviesPage = () => {
    history.push(RoutesEnum.MoviesPage);
  };

  const { values, setFieldValue, errors, validateField, validateForm, isValid, submitForm } =
    useFormik<{
      email: string;
      password: string;
    }>({
      initialValues: { password: "", email: "" },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        validateForm();
        if (isValid) {
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
    <Styles.PageContainer>
      {matches && <Styles.ImageContainer></Styles.ImageContainer>}
      <Styles.RightContainer elevation={10}>
        <Styles.LoginFormContainer>
          <Styles.TitleHeader>Login</Styles.TitleHeader>
          <Styles.LoginContainer>
            <Styles.StyledTextField
              id="email"
              size="small"
              label="email"
              value={values.email}
              onChange={onChange}
              helperText={errors.email ? errors.email : " "}
              type="input"
              variant="outlined"
              fullWidth
            />
            <Styles.StyledTextField
              id="password"
              size="small"
              label="password"
              value={values.password}
              onChange={onChange}
              helperText={errors.password ? errors.password : " "}
              type="password"
              variant="outlined"
              fullWidth
            />
            <Styles.LoginButton fullWidth onClick={submitForm}>
              LOGIN
            </Styles.LoginButton>
            <Styles.RegisterProposeContainer>
              <Styles.StyledTypo variant="body2">Don't have an account?</Styles.StyledTypo>
              <Styles.StyledLink onClick={goToRegisterPage}>Register</Styles.StyledLink>
            </Styles.RegisterProposeContainer>
          </Styles.LoginContainer>
          <DividerWithText>OR</DividerWithText>
          <Styles.OutsideLoginContainer>
            <Styles.GoogleButton
              fullWidth
              onClick={() =>
                toast.promise(loginWithGoogle(), {
                  loading: "loading...",
                  success: () => {
                    goToMoviesPage();
                    return "loged in succesfully!";
                  },
                  error: (error) => `${error}`,
                })
              }
            >
              LOGIN WITH GOOGLE
            </Styles.GoogleButton>
            <Styles.FacebookButton
              fullWidth
              onClick={() => loginWithFacebook().then(() => goToMoviesPage())}
            >
              LOGIN WITH FACEBOOK
            </Styles.FacebookButton>
          </Styles.OutsideLoginContainer>
        </Styles.LoginFormContainer>
      </Styles.RightContainer>
      <Toaster />
    </Styles.PageContainer>
  );
};

export default LoginPage;
