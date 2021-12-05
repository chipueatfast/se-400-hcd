import React, { useCallback, useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "react-hook-form";
import {
  FacebookIcon,
  LinkedinIcon,
  GoogleIcon,
  CloseIcon,
} from "icons-build";
import {
  Button,
  FormLayout,
  FormTitle,
  Grid,
  Typography,
  OutmostContainer,
  IconButton,
} from "ui-build";
import { HookFormInput } from "components/HookFormElements";
import { useLogin } from "hooks/useLogin";
import {
  ServerReturnErrors,
  ServerJsonState,
  ServerReturnDataState,
  ServerReturnOldValues,
} from "types/ServerResponse.model";
import LinkToHome from "components/LinkToHome";

function NormalLoginFormPage(props: any) {
  const serverJsonState: ServerJsonState = props.state
    ? { ...JSON.parse(props.state) }
    : { role: "member" };
  const loginFormRef = useRef<HTMLFormElement>();
  // Create an event handler so you can call the verification on button click event or form submit
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid.")
      .required("This field is mandatory."),
    password: yup.string().required("This field is mandatory."),
  });
  const resolver = yupResolver(validationSchema);
  const { ...reactHookFormProps } = useLogin({
    defaultValues: {
      email: props.oldValueEmail || "",
      password: "",
    },
    resolver,
  });
  useEffect(() => {
    if (props.errorEmail) {
      reactHookFormProps.setError("email", {
        message: props.errorEmail,
      });
    }
  }, []);
  const { isSubmitting } = reactHookFormProps.formState;
  return (
    <OutmostContainer>
      <Grid className="d-flex align-items-center justify-content-center flex-column vh-100">
        <Grid className="login-form  w-100" lg={6}>
          <FormProvider {...reactHookFormProps}>
            <form
              ref={loginFormRef as any}              
              onSubmit={async (e) => {
                e.preventDefault();
                if (!(await reactHookFormProps.trigger())) {
                  console.log("Form is not valid");
                  return;
                }
                if (!loginFormRef.current) {
                  return;
                }
                reactHookFormProps.setError("email", {
                  message: "Invalid credentials",
                });
              }}
            >
              <div className="mb-2">
                <FormTitle>Log In</FormTitle>
              </div>
              <div className="mb-4">
                {serverJsonState.role === "member" && (
                  <Typography.Text>
                    Not a member yet?&nbsp;
                    <a href={"#"}>
                      <Typography.Text color="blue">
                        Create an account
                      </Typography.Text>
                    </a>
                  </Typography.Text>
                )}
                {serverJsonState.role === "partner" && (
                  <Typography.Text>
                    Not a Business Partner yet?&nbsp;
                    <a href={process.env.MIX_TRUEPROFILE_PARTNER_REGISTER_URL}>
                      <Typography.Text color="blue">
                        Become a Business Partner now.
                      </Typography.Text>
                    </a>
                  </Typography.Text>
                )}
              </div>
              <FormLayout>
                <HookFormInput
                  autoComplete="email"
                  name="email"
                  required
                  label="Email"
                />
                <HookFormInput
                  autoComplete="password"
                  name="password"
                  required
                  label="Password"
                  type="password"
                />
                <a href="#" onClick={() => {}}>
                  <Typography.Text size="mini" color="blue">
                    Forgot your password
                  </Typography.Text>
                </a>
                <div className="d-flex justify-content-end">
                  <Button type='submit' disabled={isSubmitting}>Login</Button>
                </div>
                {serverJsonState.role === "member" && (
                  <div className="d-flex flex-row justify-content-end align-items-center">
                    <Typography.Text
                      color="green_highlight"
                      size="standard"
                      className="mx-2"
                    >
                      Or login with
                    </Typography.Text>
                    <a href="/login/facebook">
                      <FacebookIcon className="mx-1" width={32} height={32} />
                    </a>
                    <a href="/login/linkedin">
                      <LinkedinIcon className="mx-1" width={32} height={32} />
                    </a>
                    <a href="/login/google">
                      <GoogleIcon
                        aria-label="google-login"
                        width={32}
                        height={32}
                      />
                    </a>
                  </div>
                )}
              </FormLayout>
              <input type="hidden" name="role" value={serverJsonState.role} />
            </form>
          </FormProvider>
        </Grid>
      </Grid>
    </OutmostContainer>
  );
}

export default NormalLoginFormPage;
