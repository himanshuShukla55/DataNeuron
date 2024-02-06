import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { CountContext } from "../context/CountContext";
import axios from "axios";
import { DataContext } from "../context/DataContext";

const AddData = () => {
  const [loading, setLoading] = useState(false);
  const { handleAddCountChange } = useContext(CountContext);
  const { getUsers } = useContext(DataContext);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(2, "Enter atleast 2 characters!")
          .max(15, "Enter atmost 15 characters!")
          .required("name required!"),

        email: Yup.string().email("Invalid email!").required("email required!"),
      }),
      onSubmit: async (values, { resetForm }) => {
        try {
          setLoading(true);
          const res = await axios.post("/api/users", values);
          // console.log(res);
          handleAddCountChange();
          getUsers();
          setLoading(false);
          toast.success("User Successfully Added!", {
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-10 text-white p-5"
    >
      <h1 className="text-4xl font-semibold">Add User</h1>
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
          "ADD USER"
        )}
      </button>
    </form>
  );
};

export default AddData;
