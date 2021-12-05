import React, { useRef } from "react";
import * as Yup from "yup";
import { FormLayout, Button } from "ui-build";

import { Container, Box } from "./styled";
import { FormProvider, useForm } from "react-hook-form";
import { HookFormInput } from "components/HookFormElements";
import { yupResolver } from "@hookform/resolvers/yup";


type Props = {
    label: string;
    fieldName: 'recovery_code' | 'code';
    children: React.ReactNode;
};


function FormTwoFactor(props: Props) {
    const { fieldName } = props;
    const validationSchema = Yup.object().shape({
        [fieldName]: Yup.string().required("This field is mandatory."),
    });
    
    const { children, label } = props;
    const resolver = yupResolver(validationSchema);
    const twoFactorFormRef = useRef<HTMLFormElement>();
    const reactHookFormProps = useForm<any>({
        defaultValues: {
            [fieldName]: "",
        },
        resolver,
    });

    return (
        <Container>
            <Box>
                <FormProvider {...reactHookFormProps}>
                    <form
                        ref={twoFactorFormRef}
                        method="POST"
                        action="/two-factor-challenge"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            if (!(await reactHookFormProps.trigger())) {
                                return;
                            }

                            if (!twoFactorFormRef.current) {
                                return;
                            }
                            twoFactorFormRef.current.submit();
                        }}
                    >
                        <FormLayout>
                            <HookFormInput
                                name={fieldName}
                                label={label}
                                required
                            />
                            <Button type="submit">Verify</Button>
                        </FormLayout>
                    </form>
                </FormProvider>
            </Box>
            {children}
        </Container>
    );
}

export default FormTwoFactor;
