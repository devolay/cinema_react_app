import * as Types from "./ReservationForm.types";
import * as Styles from "./ReservationForm.styles";

const ReservationForm = ({}: Types.Props) => {
  return (
    <Styles.FormContainer>
      <Styles.FormRow>
        <Styles.StyledTextField
          label="Name"
          variant="outlined"
          size="small"
        ></Styles.StyledTextField>
        <Styles.StyledTextField
          label="Surname"
          variant="outlined"
          size="small"
        ></Styles.StyledTextField>
      </Styles.FormRow>
    </Styles.FormContainer>
  );
};

export default ReservationForm;
