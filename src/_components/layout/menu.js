"use client";

import { useEffect, useState } from "react";
import {
  Report,
  Documentation,
  Withdraw,
  Disbursement,
  SubAccount,
  Dashboard,
} from "./menuSvg";
import Cookies from "js-cookie";
import { MENU_THEME } from "@/_constant/global";

const Menu = () => {
  const [menuTheme, setMenuTheme] = useState(MENU_THEME.NAVBAR);
  useEffect(() => {
    setMenuTheme(Cookies.get("menu-theme"));
  }, [menuTheme]);

  return (
    <ul
      className={`navbar-nav ${
        menuTheme == MENU_THEME.SIDEBAR ? "pt-lg-3" : ""
      }`}
    >
      <li className="nav-item active">
        <a className="nav-link" href="./">
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <Dashboard />
          </span>
          <span className="nav-link-title">Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./">
          <span className="nav-link-icon d-md-none d-lg-inline-block">
            <SubAccount />
          </span>
          <span className="nav-link-title">Sub Account</span>
        </a>
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
              <a className="dropdown-item" href="./alerts.html">
                Alerts
              </a>
              <a className="dropdown-item" href="./accordion.html">
                Accordion
              </a>
              <div className="dropend">
                <a
                  className="dropdown-item dropdown-toggle"
                  href="#sidebar-authentication"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  role="button"
                  aria-expanded="false"
                >
                  Authentication
                </a>
                <div className="dropdown-menu">
                  <a href="./sign-in.html" className="dropdown-item">
                    Sign in
                  </a>
                  <a href="./sign-in-link.html" className="dropdown-item">
                    Sign in link
                  </a>
                  <a
                    href="./sign-in-illustration.html"
                    className="dropdown-item"
                  >
                    Sign in with illustration
                  </a>
                  <a href="./sign-in-cover.html" className="dropdown-item">
                    Sign in with cover
                  </a>
                  <a href="./sign-up.html" className="dropdown-item">
                    Sign up
                  </a>
                  <a href="./forgot-password.html" className="dropdown-item">
                    Forgot password
                  </a>
                  <a href="./terms-of-service.html" className="dropdown-item">
                    Terms of service
                  </a>
                  <a href="./auth-lock.html" className="dropdown-item">
                    Lock screen
                  </a>
                  <a
                    href="./2-step-verification.html"
                    className="dropdown-item"
                  >
                    2 step verification
                  </a>
                  <a
                    href="./2-step-verification-code.html"
                    className="dropdown-item"
                  >
                    2 step verification code
                  </a>
                </div>
              </div>
              <a className="dropdown-item" href="./blank.html">
                Blank page
              </a>
              <a className="dropdown-item" href="./badges.html">
                Badges
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./buttons.html">
                Buttons
              </a>
              <div className="dropend">
                <a
                  className="dropdown-item dropdown-toggle"
                  href="#sidebar-cards"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  role="button"
                  aria-expanded="false"
                >
                  Cards
                  <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                    New
                  </span>
                </a>
                <div className="dropdown-menu">
                  <a href="./cards.html" className="dropdown-item">
                    Sample cards
                  </a>
                  <a href="./card-actions.html" className="dropdown-item">
                    Card actions
                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                      New
                    </span>
                  </a>
                  <a href="./cards-masonry.html" className="dropdown-item">
                    Cards Masonry
                  </a>
                </div>
              </div>
              <a className="dropdown-item" href="./carousel.html">
                Carousel
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./charts.html">
                Charts
              </a>
              <a className="dropdown-item" href="./colors.html">
                Colors
              </a>
              <a className="dropdown-item" href="./colorpicker.html">
                Color picker
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./datagrid.html">
                Data grid
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./datatables.html">
                Datatables
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./dropdowns.html">
                Dropdowns
              </a>
              <a className="dropdown-item" href="./dropzone.html">
                Dropzone
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <div className="dropend">
                <a
                  className="dropdown-item dropdown-toggle"
                  href="#sidebar-error"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  role="button"
                  aria-expanded="false"
                >
                  Error pages
                </a>
                <div className="dropdown-menu">
                  <a href="./error-404.html" className="dropdown-item">
                    404 page
                  </a>
                  <a href="./error-500.html" className="dropdown-item">
                    500 page
                  </a>
                  <a href="./error-maintenance.html" className="dropdown-item">
                    Maintenance page
                  </a>
                </div>
              </div>
              <a className="dropdown-item" href="./flags.html">
                Flags
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./inline-player.html">
                Inline player
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./lightbox.html">
                Lightbox
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
            </div>
            <div className="dropdown-menu-column">
              <a className="dropdown-item" href="./lists.html">
                Lists
              </a>
              <a className="dropdown-item" href="./modals.html">
                Modal
              </a>
              <a className="dropdown-item" href="./maps.html">
                Map
              </a>
              <a className="dropdown-item" href="./map-fullsize.html">
                Map fullsize
              </a>
              <a className="dropdown-item" href="./maps-vector.html">
                Map vector
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./markdown.html">
                Markdown
              </a>
              <a className="dropdown-item" href="./navigation.html">
                Navigation
              </a>
              <a className="dropdown-item" href="./offcanvas.html">
                Offcanvas
              </a>
              <a className="dropdown-item" href="./pagination.html">
                Pagination
              </a>
              <a className="dropdown-item" href="./placeholder.html">
                Placeholder
              </a>
              <a className="dropdown-item" href="./steps.html">
                Steps
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./stars-rating.html">
                Stars rating
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
              <a className="dropdown-item" href="./tabs.html">
                Tabs
              </a>
              <a className="dropdown-item" href="./tags.html">
                Tags
              </a>
              <a className="dropdown-item" href="./tables.html">
                Tables
              </a>
              <a className="dropdown-item" href="./toasts.html">
                Toasts
              </a>
              <a className="dropdown-item" href="./typography.html">
                Typography
              </a>
              <a className="dropdown-item" href="./tinymce.html">
                TinyMCE
                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                  New
                </span>
              </a>
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
              <a className="dropdown-item" href="./alerts.html">
                Alerts
              </a>
              <a className="dropdown-item" href="./accordion.html">
                Accordion
              </a>
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
              <a className="dropdown-item" href="./alerts.html">
                Alerts
              </a>
              <a className="dropdown-item" href="./accordion.html">
                Accordion
              </a>
            </div>
          </div>
        </div>
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
