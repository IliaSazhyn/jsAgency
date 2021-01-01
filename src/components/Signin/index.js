import React, { Suspense } from "react";
import { Container, FormWrap, FormContent, Form, Icon, IconText } from "./SigninElements";

const SignIn = () => {
  const LazyLogin = React.lazy(() => import('./Login'));
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">js.Agency
          <IconText>  &lt; Back to main</IconText>
          </Icon>
          <FormContent>
            <Form>
            <Suspense fallback={<div>Loading...</div>}>
            <LazyLogin />
      </Suspense>

            </Form>
       
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
