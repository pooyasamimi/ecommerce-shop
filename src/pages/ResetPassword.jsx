import { Field, Formik, Form } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { object, string, ref } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import FormikControl from "../components/formikElements/FormikControl";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/UserContext";
import supabase from "../../utils/supabase/config";
import Title from "../components/Title";
import FormWrapper from "../components/FormWrapper";
import FormLink from "../components/FormLink";
import supabaseAdmin from "../../utils/supabase/adminConfig";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { users } = useContext(UserContext);
  const validationSchema = object({
    email: string()
      .required("لطفا این فیلد پر کنید")
      .email("ایمیل معتبر بنویسید"),
  });
  const initialValues = {
    email: "",
  };

  async function submitHandler(values) {
    setLoading(true);

    const {
      data: { users },
      error,
    } = await supabaseAdmin.auth.admin.listUsers();
    if (users) {
      const findUser = users.find((user) => user.email == values.email);
      if (findUser) {
        const { error } = await supabase.auth.resetPasswordForEmail(
          values.email,
          {
            redirectTo: "http://localhost:5173/changepassword",
          }
        );

        setLoading(false);

        if (error) toast.error("خطا 😶 دوباره سعی کنید");
        else toast.success("ایمیل بازنشانی رمز عبور برای شما ارسال شد");
      } else {
        setLoading(false);
        toast.error("ایمیلی که وارد شده وجود نداره");
      }
    } else {
      toast.error(error || "مدتی بعد تلاش کنید");
    }
  }

  async function getUsers() {}

  return (
    <>
      <Title>Reset Password</Title>
      <FormWrapper>
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
                    control="submit"
                    text="ارسال ایمیل بازنشانی رمز"
                    loading={loading}
                    formik={formik}
                  />
                </Form>
                <FormLink
                  text="رمزت یادت اومد؟"
                  linkText="برگرد"
                  linkTo="/login"
                />
              </>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
}
