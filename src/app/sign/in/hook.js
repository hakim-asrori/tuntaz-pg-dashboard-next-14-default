import { CODE, SERVICE } from "@/_constant/api";
import {
  REGEX_PASSWORD,
  REGEX_PHONE,
  generateSignature,
  handleChangeEl,
} from "@/_constant/global";
import axios from "axios";
import Cookies from "js-cookie";
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
    email: "",
    password: "",
  });

  const schemaForm = yup.object().shape({
    email: yup.string().min(3).email().required(),
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
          const secret = await generateSignature(SERVICE.AUTH.LOGIN);

          try {
            let response = await axios.post(SERVICE.AUTH.LOGIN, form, {
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
              // Acronym From Token Tuntaz Payment Gateway
              Cookies.set("TTPG", response.data.token);
              // $router.push("/dashboard");
              window.location.href = "/dashboard";

              setIsLoading(false);

              setForm({
                email: "",
                password: "",
              });

              toast.success(response.data.message, {
                autoClose: 3000,
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
