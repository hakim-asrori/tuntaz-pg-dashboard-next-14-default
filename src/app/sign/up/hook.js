import { CODE, SERVICE } from "@/_constant/api";
import {
  REGEX_PASSWORD,
  REGEX_PHONE,
  generateSignature,
  handleChangeEl,
} from "@/_constant/global";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

const Hook = (props) => {
  const $router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorsField, setErrorsField] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    roleId: 1,
  });

  const schemaForm = yup.object().shape({
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    username: yup.string().min(3).required(),
    email: yup.string().min(3).email().required(),
    roleId: yup.number().required(),
    phone: yup
      .string()
      .min(9)
      .max(15)
      .required()
      .matches(REGEX_PHONE, "Phone number is not valid"),
    password: yup
      .string()
      .required()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        REGEX_PASSWORD,
        "Min 8 Chars, Uppercase, Lowercase, Number and Special Character"
      ),
  });

  const _handleChangeEl = (_key, _val) => {
    handleChangeEl(_key, _val, form, setForm, schemaForm, setErrorsField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    schemaForm
      .isValid(form)
      .then(async (valid) => {
        setValidated(valid);
        setIsLoading(true);
        if (valid) {
          const secret = await generateSignature(SERVICE.AUTH.REGISTER);

          form.name = form.firstName + " " + form.lastName;
          form.role_id = form.roleId;

          try {
            delete form.firstName;
            delete form.lastName;
            delete form.roleId;

            let response = await axios.post(SERVICE.AUTH.REGISTER, form, {
              headers: {
                "x-signature": secret.signature,
                "x-timestamp": secret.timestamp,
              },
            });

            if (response.data.status == CODE.ERROR) {
              setIsLoading(false);
              toast.error(response.data.message, {
                autoClose: 3000,
              });
            } else {
              setIsLoading(false);
              toast.success(response.data.message, {
                autoClose: 3000,
              });
              $router.push("/sign");
              setForm({
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                phone: "",
                password: "",
                roleId: 1,
              });
            }
          } catch (error) {
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
          toast.error("Fill data correctly!", {
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {});
  };

  return {
    state: {
      validated: validated,
      form: form,
      errorsField: errorsField,
      isLoading: isLoading,
    },
    handler: {
      setForm: setForm,
      handleChangeEl: _handleChangeEl,
      handleSubmit: handleSubmit,
    },
  };
};

export default Hook;
