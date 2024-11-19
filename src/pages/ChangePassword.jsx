import { Formik, Form } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { object, string, ref } from "yup";
import { Link, redirect, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import FormikControl from "../components/formikElements/FormikControl";
import supabase from "../Api/config";
import toast from "react-hot-toast";
import Title from "../components/Title";
import FormWrapper from "../components/FormWrapper";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function submitHandler(values) {
    setLoading(true);
    const { error, data } = await supabase.auth.updateUser({
      password: values.password,
    });

    setLoading(false);
    if (error) toast.error(`دسترسی ندارید`);
    if (data) {
      toast.success("رمز عبور با موفقیت تغییر کرد");
      navigate("/");
    }
  }

  const validationSchema = object({
    password: string()
      .required("لطفا این فیلد پر کنید")
      .min(8, "حداقل 8 کاراکتر")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
        "حداقل هشت کاراکتر و شامل حروف و عدد"
      )
      .notOneOf(["test1234"], "test1234 نمیشه بزاری")
      .max(16, "حداکثر 16 کاراکتر"),
    confirmPassword: string()
      .required("لطفا این فیلد پر کنید")
      .oneOf([ref("password")], "رمز ها مشابه نیستند"),
  });
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  return (
    <>
      <Title>ChangePassword</Title>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="inputPassword"
                  type={"password"}
                  name={"password"}
                  label={"رمز عبور جدید"}
                  placeholder={"test1234"}
                  Icon={BiUser}
                  formik={formik}
                />
                <FormikControl
                  control="inputPassword"
                  type={"password"}
                  name={"confirmPassword"}
                  label={"تایید رمز عبور"}
                  placeholder={"test1234"}
                  Icon={BiUser}
                />

                <FormikControl
                  control="submit"
                  text="تایید"
                  loading={loading}
                  formik={formik}
                />
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
}
