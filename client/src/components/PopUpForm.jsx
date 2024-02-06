import React, { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CountContext } from "../context/CountContext";
import { DataContext } from "../context/DataContext";
import Input from "./Input";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const PopUpForm = ({ user, setVisibility }) => {
  const [loading, setLoading] = useState(false);
  const { handleUpdateCountChange } = useContext(CountContext);
  const { getUsers } = useContext(DataContext);
  //form state
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: user.name,
        email: user.email,
      },
      //form validations
      validationSchema: Yup.object({
        name: Yup.string()
          .min(2, "Enter atleast 2 characters!")
          .max(15, "Enter atmost 15 characters!")
          .required("name required!"),

        email: Yup.string().email("Invalid email!").required("email required!"),
      }),
      //function to handle form submit
      onSubmit: async (values, { resetForm }) => {
        try {
          debugger;
          setLoading(true);
          const res = await axios.patch(`/api/users/${user._id}`, values);
          console.log(res);
          handleUpdateCountChange();
          getUsers();
          setLoading(false);
          toast.success("User Successfully Updated!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          resetForm();
          setVisibility(false);
        } catch (error) {
          setLoading(false);
          const message = error.response.data.message;
          if (message.includes("duplicate key"))
            toast.error("Email alredy added!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
        }
      },
    });
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-10 text-white p-5"
      >
        <h1 className="text-4xl font-semibold">Update User</h1>
        <div className="flex flex-col gap-2">
          <Input
            id="name"
            type="text"
            label="Name"
            value={values.name}
            touched={touched.name}
            error={errors.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Input
            id="email"
            type="text"
            label="Email"
            value={values.email}
            touched={touched.email}
            error={errors.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <button
          type="submit"
          className="bg-white p-3 text-black w-[250px] rounded-lg cursor-pointer font-semibold"
          disabled={loading}
        >
          {loading ? (
            <ClipLoader
              color={"black"}
              loading={loading}
              cssOverride={{ margin: "auto" }}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "UPDATE"
          )}
        </button>
        <button
          className="absolute right-0 top-0 p-3"
          onClick={() => setVisibility(false)}
        >
          <ImCross />
        </button>
      </form>
    </div>
  );
};

export default PopUpForm;
