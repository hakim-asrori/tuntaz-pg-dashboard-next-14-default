import moment from "moment";
import Base64 from "crypto-js/enc-base64";
import hmacSHA256 from "crypto-js/hmac-sha256";

export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?"'@#\$%\^&\*.,])(?=.{8,})/;

export const REGEX_PHONE = /^8\d{9,15}$/;

export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ROLES = {
  BUSSINESS: 1,
  INDIVIDUAL: 2,
};

export const MENU_THEME = {
  SIDEBAR: "sidebar",
  NAVBAR: "navbar",
};

export const handleChangeEl = async (
  _key,
  _e,
  values,
  setValues,
  schemaData,
  setErrorsField,
  errorsField = {},
  _typeData = "string"
) => {
  let _dataKey0 = _e?.target?.value ?? _e?.value ?? _e ?? "";

  if (!!(_e instanceof Event)) {
    if (
      _typeData === "number" ||
      _typeData === "int" ||
      _typeData === "integer"
    ) {
      _dataKey0 = _dataKey0.toString() === "" ? "0" : _dataKey0.toString();
      _dataKey0 = _dataKey0?.replace(/\./g, "").replace(/\,/g, "");
      _dataKey0 =
        !_dataKey0 || _dataKey0 === "NaN" || _dataKey0 === NaN
          ? 0
          : parseInt(_dataKey0) ?? 0;
    }
    values[_key] = _dataKey0;
  } else {
    values[_key] = _dataKey0;
  }

  schemaData?.isValid(values).then((valid) => {
    if (!valid) {
      schemaData?.validate(values, { abortEarly: false })?.catch((err) => {
        let errors = {};
        err?.inner?.map((item) => {
          errors = {
            ...errors,
            [item?.path]: (
              item?.message?.charAt(0)?.toUpperCase() +
              item?.message?.slice(1)?.replace(/_([a-z])/g, function (g) {
                return " " + g[1]?.toUpperCase();
              })
            )
              .replace("must be less than or equal to", "Max.")
              .replace("must be greater than or equal to", "Min."),
          };
        });

        if (errors) {
          setErrorsField({ ...errors });
        } else {
          setErrorsField({});
        }
      });
    } else {
      setErrorsField({});
    }
  });

  const _data = values;
  let _dataKey = _e?.target?.value ?? _e?.value ?? _e;

  if (
    _typeData === "number" ||
    _typeData === "int" ||
    _typeData === "integer"
  ) {
    _dataKey = _dataKey?.toString() === "" ? "0" : _dataKey?.toString();
    _dataKey = _dataKey?.replace(/\./g, "").replace(/\,/g, "");
    _dataKey = parseInt(_dataKey ?? 0);
  }

  _data[_key] = _dataKey;

  setValues({ ..._data });
};

export const generateSignature = async (_uri) => {
  const httpMethod = "POST";
  const _time = moment().unix();
  const pattern = (httpMethod + ":" + _uri + ":" + _time).toUpperCase();
  const secretKey = process.env.NEXT_PUBLIC_BE_API_KEY;

  const hmacDigest0 = await Base64.stringify(hmacSHA256(pattern, secretKey));
  const hmacDigest = await hmacSHA256(pattern, secretKey).toString();

  return {
    signature: hmacDigest,
    timestamp: _time,
  };
};
