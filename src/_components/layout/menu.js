"use client";

import { useEffect, useState } from "react";
import {
  Report,
  Documentation,
  Withdraw,
  Disbursement,
  SubAccount,
  Dashboard,
  Users,
} from "./menuSvg";
import Cookies from "js-cookie";
import { MENU_THEME } from "@/_constant/global";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const [menuTheme, setMenuTheme] = useState(MENU_THEME.NAVBAR);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  useEffect(() => {
    setMenuTheme(Cookies.get("menu-theme"));
  }, [menuTheme]);

  return (
    <ul
      className={`navbar-nav ${
        menuTheme == MENU_THEME.SIDEBAR ? "pt-lg-3" : ""
      }`}
    >
      <li className={`nav-item ${isActive("/dashboard") && "active"}`}>
        <Link className="nav-link" href={"/dashboard"}>
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <Dashboard />
          </span>
          <span className="nav-link-title">Dashboard</span>
        </Link>
      </li>
      <li
        className={`nav-item ${isActive("/dashboard/sub-account") && "active"}`}
      >
        <Link className="nav-link" href={"/dashboard/sub-account"}>
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <SubAccount />
          </span>
          <span className="nav-link-title">Sub Account</span>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#navbar-base"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          role="button"
          aria-expanded="false"
        >
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <Disbursement />
          </span>
          <span className="nav-link-title">Disbursement</span>
        </a>
        <div className="dropdown-menu">
          <div className="dropdown-menu-columns">
            <div className="dropdown-menu-column">
              <Link
                className="dropdown-item"
                href={"/dashboard/disbursement/single"}
              >
                Disbursement
              </Link>
              <Link
                className="dropdown-item"
                href={"/dashboard/disbursement/batch"}
              >
                Batch Disbursement
              </Link>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#navbar-base"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          role="button"
          aria-expanded="false"
        >
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <Withdraw />
          </span>
          <span className="nav-link-title">Withdraw</span>
        </a>
        <div className="dropdown-menu">
          <div className="dropdown-menu-columns">
            <div className="dropdown-menu-column">
              <Link className="dropdown-item" href={"/dashboard/withdraw/rtgs"}>
                RTGS Withdrawal
              </Link>
              <Link
                className="dropdown-item"
                href={"/dashboard/withdraw/instant"}
              >
                Instant
              </Link>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#navbar-base"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          role="button"
          aria-expanded="false"
        >
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <Report />
          </span>
          <span className="nav-link-title">Report</span>
        </a>
        <div className="dropdown-menu">
          <div className="dropdown-menu-columns">
            <div className="dropdown-menu-column">
              <Link
                className="dropdown-item"
                href={"/dashboard/report/sub-account"}
              >
                Sub Account Report
              </Link>
              <Link
                className="dropdown-item"
                href={"/dashboard/report/disbursement"}
              >
                Disbursement Report
              </Link>
              <Link
                className="dropdown-item"
                href={"/dashboard/report/withdrawal"}
              >
                Withdrawal Report
              </Link>
              <Link
                className="dropdown-item"
                href={"/dashboard/report/account-mutation"}
              >
                Account Mutation Report
              </Link>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/dashboard/user-team">
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <Users />
          </span>
          <span className="nav-link-title">User Team</span>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./">
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <Documentation />
          </span>
          <span className="nav-link-title">Documentation</span>
        </a>
      </li>
    </ul>
  );
};

export default Menu;