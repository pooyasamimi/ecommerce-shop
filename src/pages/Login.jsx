import { Field, Formik, Form } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import FormikControl from "../components/formikElements/FormikControl";
import supabase from "../../utils/supabase/config";
import toast from "react-hot-toast";

import Title from "../components/Title";
import FormWrapper from "../components/FormWrapper";
import GithubLogin from "../components/GithubLogin";
import FormLink from "../components/FormLink";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validationSchema = object({
    email: string()
      .required("لطفا این فیلد پر کنید")
      .email("ایمیل معتبر بنویسید"),
    password: string().required("لطفا این فیلد پر کنید"),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  async function submitHandler(values) {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    setLoading(false);

    if (error) toast.error("نام کاربری یا رمز عبور اشتباهه");
    else {
      toast.success("ورود با موفقیت انجام شد");
      navigate("/");
    }
  }

  return (
    <>
      <Title>ورود</Title>
      <FormWrapper>
        <GithubLogin />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {(formik) => {
            return (
              <>
                <Form>
                  <FormikControl
                    control="input"
                    type={"text"}
                    name={"email"}
                    label={"ایمیل"}
                    placeholder={"pooyatest@gmail.com"}
                    Icon={MdOutlineEmail}
                  />
                  <FormikControl
                    control="inputPassword"
                    type={"password"}
                    name={"password"}
                    label={"رمز عبور"}
                    placeholder={"test1234"}
                    Icon={BiUser}
                    formik={formik}
                  />

                  <FormikControl
                    control="submit"
                    text="ورود"
                    loading={loading}
                    formik={formik}
                  />
                </Form>
                <FormLink
                  text="رمز خودرا فراموش کرده اید؟"
                  linkText="بازنشانی رمز"
                  linkTo="/resetpassword"
                  text2="انجام دهید"
                />
                <FormLink
                  text="آیا از قبل حساب کاربری ندارید؟"
                  linkText="ثبت نام"
                  linkTo="/register"
                  text2="کنید"
                />
              </>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
}
