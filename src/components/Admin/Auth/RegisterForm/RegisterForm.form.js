import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: "",
        repeatPassword: "",
        conditionsAccepted: false,

    };
}


export function validationSchema() {
    return Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("Obligatory field"),
        password: Yup.string().required("Obligatory field"),
        repeatPassword: Yup.string().required("Obligatory field")
            .oneOf([Yup.ref("password")], "Passwords have to match"),
        conditionsAccepted: Yup.boolean().isTrue(true),
    });
}