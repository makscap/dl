import React from "react";
import styles from "./ToggleIconMenu.module.css";

function ToggleIconMenu({ isOpen, handleIcon }) {
  return (
    <div className={styles.avatarAbdButton}>
      <div>
        <div className={styles.toggleField} onClick={handleIcon}>
          {!isOpen && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 24H28"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 16H28"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8H28"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {isOpen && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                fill="#1A1A1A"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleIconMenu;
