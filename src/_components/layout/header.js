"use client";

import Avatar from "@/_assets/static/avatars/000m.jpg";
import { SERVICE } from "@/_constant/api";
import { MENU_THEME, generateSignature } from "@/_constant/global";
import { CContainer } from "@coreui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LogoTuntas from "@/_assets/images/logo/logo-tuntaz.png";
import Image from "next/image";
import Link from "next/link";
import {
  BankBuilding,
  Information,
  LockPassword,
  Logout,
  Setting,
} from "./menuSvg";

const Header = ({ props, router }) => {
  const $router = useRouter();
  const [menuTheme, setMenuTheme] = useState(MENU_THEME.NAVBAR);

  const onLogout = async (event) => {
    event.preventDefault();

    const secret = await generateSignature(SERVICE.AUTH.LOGOUT);

    try {
      let response = await axios.post(
        SERVICE.AUTH.LOGOUT,
        {},
        {
          headers: {
            "x-signature": secret.signature,
            "x-timestamp": secret.timestamp,
            Authorization: Cookies.get("TTPG"),
          },
        }
      );

      if (response.data.status == CODE.ERROR) {
        toast.error(response.data.message, {
          autoClose: 3000,
        });
      } else {
        Cookies.remove("TTPG");
        $router.push("/sign/in");

        toast.success(response.data.message, {
          autoClose: 3000,
        });
      }
    } catch (error) {
      Cookies.remove("TTPG");
      $router.push("/sign/in");

      toast.success("success logout", {
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    setMenuTheme(Cookies.get("menu-theme"));
  }, [menuTheme]);

  return (
    <header
      className={`navbar navbar-expand-md d-print-none ${
        menuTheme == MENU_THEME.SIDEBAR ? "d-none d-lg-flex" : ""
      }`}
    >
      <CContainer xl>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {menuTheme != MENU_THEME.SIDEBAR ? (
          <div>
            <div className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <a href=".">
                <Image src={LogoTuntas} alt="Logo" />
              </a>
            </div>
          </div>
        ) : (
          <div className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"></div>
        )}
        <div className="navbar-nav flex-row order-md-last">
          <div className="nav-item d-none d-md-flex me-3">
            <div className="btn-list">
              <a
                href="https://github.com/tabler/tabler"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                Source code
              </a>
              <a
                href="https://github.com/sponsors/codecalm"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon text-pink"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                Sponsor
              </a>
            </div>
          </div>
          <div className="d-none d-md-flex">
            <a
              href="?theme=dark"
              className="nav-link px-0 hide-theme-dark"
              title="Enable dark mode"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            </a>
            <a
              href="?theme=light"
              className="nav-link px-0 hide-theme-light"
              title="Enable light mode"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            </a>
            <div className="nav-item dropdown d-none d-md-flex me-3">
              <a
                href="#"
                className="nav-link px-0"
                data-bs-toggle="dropdown"
                tabIndex="-1"
                aria-label="Show notifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <span className="badge bg-red"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Last updates</h3>
                  </div>
                  <div className="list-group list-group-flush list-group-hoverable">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot status-dot-animated bg-red d-block"></span>
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 1
                          </a>
                          <div className="d-block text-secondary text-truncate mt-n1">
                            Change deprecated html tags to text decoration
                            classes (#29604)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon text-muted"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot d-block"></span>
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 2
                          </a>
                          <div className="d-block text-secondary text-truncate mt-n1">
                            justify-content:between ⇒
                            justify-content:space-between (#29734)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions show">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon text-yellow"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot d-block"></span>
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 3
                          </a>
                          <div className="d-block text-secondary text-truncate mt-n1">
                            Update change-version.js (#29736)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon text-muted"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="status-dot status-dot-animated bg-green d-block"></span>
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">
                            Example 4
                          </a>
                          <div className="d-block text-secondary text-truncate mt-n1">
                            Regenerate package-lock.json (#29730)
                          </div>
                        </div>
                        <div className="col-auto">
                          <a href="#" className="list-group-item-actions">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon text-muted"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link d-flex lh-1 text-reset p-0"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              <span
                className="avatar avatar-sm"
                style={{ backgroundImage: `url(${Avatar.src})` }}
              ></span>
              <div className="d-none d-xl-block ps-2">
                <div>Paweł Kuna</div>
                <div className="mt-1 small text-secondary">UI Designer</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <Link href="/dashboard/profile" className="dropdown-item">
                <Information />{" "}
                <span className="ms-2">Information Personal</span>
              </Link>
              <Link
                href="/dashboard/profile/business"
                className="dropdown-item"
              >
                <Information />{" "}
                <span className="ms-2">Information Business</span>
              </Link>
              <Link href="/dashboard/profile/bank" className="dropdown-item">
                <BankBuilding /> <span className="ms-2">Bank Information</span>
              </Link>
              <Link
                href="/dashboard/profile/change-password"
                className="dropdown-item"
              >
                <LockPassword /> <span className="ms-2">Change Password</span>
              </Link>
              <div className="dropdown-divider"></div>
              <Link href="/dashboard/profile/setting" className="dropdown-item">
                <Setting /> <span className="ms-2">Settings</span>
              </Link>
              <a href="#" onClick={onLogout} className="dropdown-item">
                <Logout /> <span className="ms-2">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </CContainer>
    </header>
  );
};

export default Header;
