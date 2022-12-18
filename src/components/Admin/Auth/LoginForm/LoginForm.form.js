import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: "",
    };
}


export function validationSchema(){
    return Yup.object({
        email:Yup.string().email("Invalid Email").required("Obligatory field"),
        password: Yup.string().required("Obligatory field"),
    });
}