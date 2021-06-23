import * as Types from "./Login.types";
import * as Styles from "./Login.styles";
import { Flex, Heading, Input } from "@chakra-ui/react";
import * as SharedStyles from "shared/styles";

const Login = ({ onGuestClick }: Types.Props) => {
  return (
    <Styles.Container>
      <Heading margin="10" size="3xl" color="#314455">
        CINEMA APP
      </Heading>
      <Flex direction="column" background="#314455" p={12} rounded={6} alignItems="center">
        <Heading mb={6} color="#97aabd" size="xl">
          Login
        </Heading>
        <Input placeholder="e-mail" variant="flushed" type="email" mb={3} size="lg" />
        <Input placeholder="********" variant="flushed" type="password" mb={6} size="lg" />
        <Flex direction="row">
          <SharedStyles.StyledButton>Log in</SharedStyles.StyledButton>
          <SharedStyles.StyledButton>Create account</SharedStyles.StyledButton>
        </Flex>
        <SharedStyles.StyledButton onClick={() => onGuestClick("room")}>
          Use as a guest
        </SharedStyles.StyledButton>
      </Flex>
    </Styles.Container>
  );
};

export default Login;
