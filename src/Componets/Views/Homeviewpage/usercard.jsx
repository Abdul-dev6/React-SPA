import React from "react";
import avatar from "../../../assets/photos/avator.png";

function usercard() {
  return (
    <div className="flex items-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full items-center justify-center"
        src={avatar}
        alt="Bonnie Green image"
      />

      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-heading">
              Bonnie Green
            </span>
            <span className="text-sm text-body">11:46</span>
          </div>

          <div className="flex items-start my-2.5 bg-neutral-tertiary rounded-base p-2">
            <div className="me-1.5">
              <span className="flex items-center gap-2 text-sm font-medium text-heading pb-2">
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3173_1381)">
                    <path
                      fill="#E2E5E7"
                      d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"
                    />
                    <path
                      fill="#B0B7BD"
                      d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"
                    />
                    <path
                      fill="#CAD1D8"
                      d="M18.774 9.25l-3.75-3.75h3.75v3.75z"
                    />
                    <path
                      fill="#F15642"
                      d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"
                    />
                    <path
                      fill="#fff"
                      d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3173_1381">
                      <path d="M0 0h20v20H0z" transform="translate(0 .5)" />
                    </clipPath>
                  </defs>
                </svg>
                Terms & Conditions
              </span>

              <span className="flex text-xs font-normal text-heading gap-2">
                12 Pages
                <svg width="3" height="4">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                18 MB
                <svg width="3" height="4">
                  <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                </svg>
                PDF
              </span>
            </div>

            <div className="inline-flex self-center items-center">
              <button
                className="text-heading bg-neutral-tertiary border border-transparent hover:bg-neutral-quaternary focus:ring-4 focus:ring-neutral-quaternary font-medium rounded-base p-2"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <span className="text-sm text-body">Delivered</span>
        </div>
      </div>

      {/* Menu Button */}
      <button
        className="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5"
        type="button"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
            d="M12 6h.01M12 12h.01M12 18h.01"
          />
        </svg>
      </button>
    </div>
  );
}

export default usercard;
