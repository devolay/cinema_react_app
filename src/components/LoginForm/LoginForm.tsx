import * as Types from "./LoginForm.types";
import * as Styles from "./LoginForm.styles";
import DividerWithText from "components/DividerWithText";
import { useFormik } from "formik";
import { RoutesEnum } from "shared/types";
import { useHistory } from "react-router-dom";
import { loginWithEmail, loginWithFacebook, loginWithGoogle } from "store/profiles";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("This email is incorrect!").required("Please enter your full email"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum"),
});

const LoginForm = ({ changeForm }: Types.Props) => {
  const history = useHistory();

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
          <Styles.StyledLink onClick={() => changeForm(true)}>Register</Styles.StyledLink>
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
  );
};

export default LoginForm;
