import { Link } from "react-router-dom";
import Input from "../Common/Input";
import {useFormik} from "formik"; 
import * as Yup from "yup";



const Login = () => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        PhoneNumber: "",
        passwordConfirm: "",
        gender: "",
        country: "",
        ability: [],
    }

    const onSubmit = (value) => console.log(value);

    const validationSchema = Yup.object({
        name: Yup.string().required("name is required").min(3 , "Name lenght not small of 6 character"),
        email: Yup.string().email("invalid email type").required("email is required"),
        password: Yup.string().required("error is required").min(8 , "password lenght not small of 8 character"),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm is required"),
        PhoneNumber: Yup.string("only inter number").required("PhoneNumber is required").min(11 , "PhoneNumber should have 11 character"),
        gender: Yup.string().required("gender is required"),
        country: Yup.string().required("Contry is required"),
        ability: Yup.string().min(0 , "pleace Select a Ability").required("Ability is requred")
    })


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true,
        enableReinitialize: true
    })

    return (
        <div>
            <form className="Form" onSubmit={formik.handleSubmit}>
                <Input formik={formik} name={"email"} label={"email"} type={"email"}/>
                <Input formik={formik} name={"password"} label={"password"} type={"password"}/>
                <button type="submit" className="Login">SignUp</button>
            </form>
        </div>
    );
}
 
export default Login;