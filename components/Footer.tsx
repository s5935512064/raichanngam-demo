"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Footer: FC<Props> = (): JSX.Element => {
  const [year, setYear] = useState<any>(moment().year());
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        if (response.status != 200) {
          throw new Error("Network response was not ok");
        }
        setData(response.data.ip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIP();
  }, []);

  useEffect(() => {
    if (data) {
      // @ts-ignore
      import("vanilla-cookieconsent/dist/cookieconsent.js").then(() => {
        var cc = window.initCookieConsent();
        cc.run({
          current_lang: "en",
          autoclear_cookies: true, // default: false
          page_scripts: true, // default: false
          cookie_expiration: 365,
          // mode: 'opt-out',                    // default: 'opt-in'; value: 'opt-in' or 'opt-out'
          // delay: 0,                               // default: 0
          // auto_language: '',                      // default: null; could also be 'browser' or 'document'
          // autorun: true,                          // default: true
          // force_consent: false,                   // default: false
          // hide_from_bots: false,                  // default: false
          // remove_cookie_tables: false             // default: false
          cookie_name: "SJS_cookie", // default: 'cc_cookie'
          // cookie_expiration: 182,                 // default: 182 (days)
          // cookie_necessary_only_expiration: 182   // default: disabled
          // cookie_domain: location.hostname,       // default: current domain
          // cookie_path: '/',                       // default: root
          // cookie_same_site: 'Lax',                // default: 'Lax'
          // use_rfc_cookie: false,                  // default: false
          revision: 1, // default: 0
          // value: { ipAddress: data.ipAddress, country: data.countryName, prov: data.stateProv },

          onFirstAction: function (user_preferences, cookie) {
            // callback triggered only once on the first accept/reject action
          },

          onAccept: function (cookie: any, user_preferences: any) {
            cc.set("data", {
              value: {
                ipAddress: data,
                UUID: uuidv4(),
              },
            });

            // if (cc.allowedCategory('analytics')) {

            //   cc.loadScript(`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, function () {

            //     console.log('analytics enabled!')
            //   });
            // }
          },

          onChange: function (cookie, changed_categories) {
            // callback triggered when user changes preferences after consent has already been given
          },

          languages: {
            en: {
              consent_modal: {
                title: "We use cookies",
                description:
                  'This website uses cookies to enhance your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.  You can manage your preferences by clicking <button type="button" data-cc="c-settings" class="cc-link">Change Preferences</button>',
                primary_btn: {
                  text: "Accept all",
                  role: "accept_all", // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                  text: "Reject all",
                  role: "accept_necessary", // 'settings' or 'accept_necessary'
                },
              },
              settings_modal: {
                title: "Privacy Preference",
                save_settings_btn: "Save settings",
                accept_all_btn: "Accept all",
                reject_all_btn: "Reject all",
                close_btn_label: "Close",
                cookie_table_headers: [
                  { col1: "Name" },
                  { col2: "Domain" },
                  { col3: "Expiration" },
                  { col4: "Description" },
                ],
                blocks: [
                  {
                    title: "Cookie usage 📢",
                    description:
                      'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://siamsindhorn.com/privacy" class="cc-link">privacy policy</a>.',
                  },
                  {
                    title: "Necessary",
                    description:
                      "Necessary cookies are required to help a website usable by enabling core functions and access to secure areas of the website. The website cannot be function properly without these cookies and they are enabled by default and cannot be disabled.",
                    toggle: {
                      value: "necessary",
                      enabled: true,
                      readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                    },
                  },
                  {
                    title: "Performance and Analytics cookies",
                    description:
                      "Analytics cookies help website to understand how visitors interact through the website. These cookies help to improve user experiences by collecting and reporting information. ",
                    toggle: {
                      value: "analytics", // your cookie category
                      enabled: false,
                      readonly: false,
                    },
                    cookie_table: [
                      // list of all expected cookies
                      {
                        col1: "^_ga", // match all cookies starting with "_ga"
                        col2: "google.com",
                        col3: "2 years",
                        col4: "description ...",
                        is_regex: true,
                      },
                      {
                        col1: "_gid",
                        col2: "google.com",
                        col3: "1 day",
                        col4: "description ...",
                      },
                    ],
                  },
                  {
                    title: "Marketing",
                    description:
                      "Marketing cookies are used to track visitors across websites to display relevant advertisements for the individual user and thereby more valuable for publishers and third party advertisers.",
                    toggle: {
                      value: "targeting",
                      enabled: false,
                      readonly: false,
                    },
                  },
                  {
                    title: "More information",
                    description:
                      'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#">contact us</a>.',
                  },
                ],
              },
            },
          },

          gui_options: {
            consent_modal: {
              layout: "bar", // box/cloud/bar
              position: "bottom center", // bottom/middle/top + left/right/center
              transition: "slide", // zoom/slide
              swap_buttons: false, // enable to invert buttons
            },
            settings_modal: {
              layout: "box", // box/bar
              // position: 'left',           // left/right
              transition: "slide", // zoom/slide
            },
          },
        });
      });
    }
  }, [data]);

  return (
    <>
      <footer
        className={classNames(
          "w-full h-fit  flex flex-col justify-center items-center relative -mt-1 bg-[#1f3026]"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10  w-full flex flex-col gap-2 justify-between  items-center text-primary">
          <div
            className={classNames(
              "w-full flex  flex-col gap-2 lg:gap-3 lg:flex-row justify-center items-center py-4 "
            )}
          >
            <p className="text-xs md:text-sm text-center text-white">
              Copyright © 2024 {year != "2024" && -year} Rai Chan Ngam All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
