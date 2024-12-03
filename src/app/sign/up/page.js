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
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import Image from "next/image";
import LogoSvg from "@/_assets/images/svg/logo.svg";
import Link from "next/link";
import { Carousel } from "@/_components/sign";
import Hook from "./hook";
import { ROLES } from "@/_constant/global";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Page({ props }) {
  const { state, handler } = Hook(props);

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
                    <CRow>
                      <CCol lg="6">
                        <CFormInput
                          type="text"
                          id="firstName"
                          placeholder="First Name"
                          className={[
                            "border-0 border-bottom shadow-none",
                            !state.validated && state.errorsField["firstName"]
                              ? "is-invalid"
                              : "",
                          ]}
                          feedbackInvalid={state.errorsField["firstName"]}
                          value={state.form.firstName}
                          onChange={(e) =>
                            handler.handleChangeEl("firstName", e.target.value)
                          }
                        />
                        <span className="mb-5">&nbsp;</span>
                      </CCol>
                      <CCol lg="6">
                        <CFormInput
                          type="text"
                          id="lastName"
                          placeholder="Last Name"
                          className={[
                            "border-0 border-bottom shadow-none",
                            !state.validated && state.errorsField["lastName"]
                              ? "is-invalid"
                              : "",
                          ]}
                          feedbackInvalid={state.errorsField["lastName"]}
                          value={state.form.lastName}
                          onChange={(e) =>
                            handler.handleChangeEl("lastName", e.target.value)
                          }
                        />
                        <span className="mb-5">&nbsp;</span>
                      </CCol>
                    </CRow>
                    <CInputGroup>
                      <CInputGroupText
                        id="phone"
                        className="bg-white border-0 border-bottom"
                      >
                        +62
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="phone"
                        placeholder="Whatsapp Number"
                        className={[
                          "border-0 border-bottom shadow-none",
                          !state.validated && state.errorsField["phone"]
                            ? "is-invalid"
                            : "",
                        ]}
                        feedbackInvalid={state.errorsField["phone"]}
                        value={state.form.phone}
                        onChange={(e) =>
                          handler.handleChangeEl("phone", e.target.value)
                        }
                      />
                    </CInputGroup>
                    <span className="mb-5">&nbsp;</span>
                    <CFormInput
                      type="text"
                      id="username"
                      placeholder="Username"
                      className={[
                        "border-0 border-bottom shadow-none",
                        !state.validated && state.errorsField["username"]
                          ? "is-invalid"
                          : "",
                      ]}
                      feedbackInvalid={state.errorsField["username"]}
                      value={state.form.username}
                      onChange={(e) =>
                        handler.handleChangeEl("username", e.target.value)
                      }
                    />
                    <span className="mb-5">&nbsp;</span>
                    <CFormSelect
                      options={[
                        { label: "Bussiness", value: ROLES.BUSSINESS },
                        { label: "Individual", value: ROLES.INDIVIDUAL },
                      ]}
                      className={[
                        "border-0 border-bottom shadow-none",
                        !state.validated && state.errorsField["roleId"]
                          ? "is-invalid"
                          : "",
                      ]}
                      feedbackInvalid={state.errorsField["roleId"]}
                      value={state.form.roleId}
                      onChange={(e) =>
                        handler.handleChangeEl("roleId", e.target.value)
                      }
                    />
                    <span className="mb-5">&nbsp;</span>
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
                    <span className="mb-5">&nbsp;</span>
                    <CFormCheck
                      id="loggedIn"
                      label="I've read and agree to the privacy & terms"
                      defaultChecked
                    />
                    <CButton
                      shape="rounded-pill"
                      className="t__btn-primary w-100"
                      type="submit"
                    >
                      Register
                    </CButton>
                    <div className="hr-text">or</div>
                    <Link
                      href={"/sign/in"}
                      className="btn t__btn-primary t__btn-outline-primary w-100 rounded-pill"
                    >
                      Sign In
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
