import { Formik, Form } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { object, string, ref } from "yup";
import { Link, redirect, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import FormikControl from "../components/formikElements/FormikControl";
import supabase from "../Api/config";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import Title from "../components/Title";
import FormWrapper from "../components/FormWrapper";
import FormLink from "../components/FormLink";
import { UserContext } from "../contexts/UserContext";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { addNotif } = useContext(UserContext);
  async function submitHandler(values) {
    setLoading(true);
    const { error, data } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.name,
        },
      },
    });

    // addNotif(data.user.id,'خوش اومدی💜' , 'خرید خوبی رو تجربه کنی💲')

    setLoading(false);
    if (error)
      toast.error(
        `این کاربر وجود دارد لطفا وارد شوید ولی اینم ارور اصلی \n ${error}`
      );
    if (data) {
      addNotif(data.user.id, "خوش اومدی💜", "خرید خوبی رو تجربه کنی💲");
      await supabase.from("carts").insert({ userId: data.user.id });
      toast.success("ثبت نام با موفقیت انجام شد");
      navigate("/");
    }
  }

  const validationSchema = object({
    name: string().required("لطفا این فیلد پر کنید").min(3, "حداقل سه کاراکتر"),
    email: string()
      .required("لطفا این فیلد پر کنید")
      .email("ایمیل معتبر بنویسید"),
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
      .oneOf([ref("password"), null], "رمز ها مشابه نیستند"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <>
      <Title>Register</Title>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {(formik) => {
            // console.log(formik);

            return (
              <>
                <Form>
                  <FormikControl
                    control="input"
                    type={"text"}
                    name={"name"}
                    label={"نام"}
                    placeholder={"پویا"}
                    Icon={BiUser}
                  />
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
                    control="inputPassword"
                    type={"password"}
                    name={"confirmPassword"}
                    label={"تایید رمز عبور"}
                    placeholder={"test1234"}
                    Icon={BiUser}
                  />

                  <FormikControl
                    control="submit"
                    text="ثبت نام"
                    loading={loading}
                    formik={formik}
                  />
                </Form>
                <FormLink
                  text="آیا از قبل حساب کاربری دارید؟"
                  linkText="وارد"
                  linkTo="/login"
                  text2="شوید"
                />
              </>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
}
