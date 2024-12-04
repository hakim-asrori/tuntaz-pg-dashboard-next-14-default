"use client";

import { Flex, Loader } from "@/_components";
import { TGREEN, TWHITE } from "@/_constant/colors";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CRow,
} from "@coreui/react";
import Image from "next/image";
import LogoSvg from "@/_assets/images/svg/logo.svg";
import Link from "next/link";
import { Carousel } from "@/_components/sign";
import Hook from "./in/hook";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { MENU_THEME } from "@/_constant/global";

export default function Page({ props }) {
  const { state, handler } = Hook(props);

  useEffect(() => {
    const menuTheme = Cookies.get("menu-theme");
    if (!menuTheme) {
      Cookies.set("menu-theme", MENU_THEME.NAVBAR);
    }
  }, []);

  return (
    <CForm
      onSubmit={handler.handleSubmit}
      method="post"
      className="position-relative"
    >
      <Loader isLoading={state.isLoading} />
      <CRow className="align-items-center justify-content-center">
        <CCol xl="10" lg="12" md="9">
          <CCard className="border-0 shadow rounded-3">
            <CCardBody className="p-0">
              <CRow>
                <CCol lg="6">
                  <div className="py-4 py-sm-6 px-4 px-sm-7">
                    <Flex className="align-items-center justify-content-center mb-4 mb-sm-7">
                      <Image src={LogoSvg} width={75} height={75} alt="logo" />
                    </Flex>
                    <CFormInput
                      type="email"
                      id="email"
                      placeholder="Email"
                      className={[
                        "border-0 border-bottom shadow-none",
                        !state.validated && state.errorsField["email"]
                          ? "is-invalid"
                          : "",
                      ]}
                      feedbackInvalid={state.errorsField["email"]}
                      value={state.form.email}
                      onChange={(e) =>
                        handler.handleChangeEl("email", e.target.value)
                      }
                    />
                    <span className="mb-5">&nbsp;</span>
                    <CFormInput
                      type="password"
                      id="password"
                      placeholder="Password"
                      className={[
                        "border-0 border-bottom shadow-none",
                        !state.validated && state.errorsField["password"]
                          ? "is-invalid"
                          : "",
                      ]}
                      feedbackInvalid={state.errorsField["password"]}
                      value={state.form.password}
                      onChange={(e) =>
                        handler.handleChangeEl("password", e.target.value)
                      }
                    />
                    <span className="mb-2">&nbsp;</span>
                    <Flex className="justify-content-end">
                      <Link
                        href={"/"}
                        className="mb-5"
                        style={{ color: TGREEN }}
                      >
                        Forgot password?
                      </Link>
                    </Flex>
                    <CFormCheck id="loggedIn" label="Keep me logged in" />
                    <CButton
                      type="submit"
                      shape="rounded-pill"
                      className="t__btn-primary w-100"
                    >
                      Login
                    </CButton>
                    <div className="hr-text">or</div>
                    <Link
                      href={"/sign/up"}
                      className="btn t__btn-primary t__btn-outline-primary w-100 rounded-pill"
                    >
                      Sign Up
                    </Link>
                  </div>
                </CCol>
                <CCol
                  lg="6"
                  className="d-none d-lg-block rounded-end-3 t__bg-primary p-7"
                >
                  <Carousel />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CForm>
  );
}
