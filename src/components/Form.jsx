import { useState } from "react";
import { ExclamationCircleIcon, CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const formStatusStyle = {
  default:
    "border-white border-opacity-10 outline-white focus:border-opacity-30",
  error: "border-orange outline-orange",
  valid: "border-green outline-green",
};

const statusMessages = {
  error: (
    <span>
      Error message&nbsp;
      <span className="text-xs">(hint: an open-source boosting company)</span>
    </span>
  ),
  valid: "Success message",
};

const statusStyle = {
  error: "text-orange",
  valid: "text-green",
};

// This validation schema accepts "ONLYDUST" value without consideration for space or capitalization
const validationSchema = (value) =>
  value.replace(/ /g, "").toUpperCase() === "ONLYDUST";

export function Form({ handleSuccess, onClose }) {
  const [formStatus, setFormStatus] = useState("default");
  const StatusIcon = formStatus === "valid" ? CheckIcon : ExclamationCircleIcon;

  function onSubmit(event) {
    event.preventDefault();
    const test = event.target.test.value;

    if (validationSchema(test)) {
      handleSuccess();
      onClose();
    }
  }

  function onChange(event) {
    const test = event.target.value;
    if (test === "") {
      setFormStatus("default");
      return;
    }

    if (validationSchema(test)) {
      setFormStatus("valid");
    } else {
      setFormStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor="test"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="test"
          name="test"
          className={`block w-full p-4 pl-10 text-sm text-white border rounded-lg bg-white bg-opacity-10 outline-0 focus:border-opacity-100 transition-all ease-in-out ${formStatusStyle[formStatus]}`}
          placeholder="Placeholder"
          required
          onChange={onChange}
        />
      </div>

      {formStatus !== "default" ? (
        <p
          className={`mt-4 text-sm ${statusStyle[formStatus]} inline-flex items-center transition-all ease-in-out`}
        >
          <StatusIcon className={`h-6 w-6 mr-2 ${statusStyle[formStatus]}`} />
          {statusMessages[formStatus]}
        </p>
      ) : null}

      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
      >
        <div className="w-full flex py-8">
          <button
            type="submit"
            className="btn-submit ml-auto disabled:opacity-50 disabled:cursor-not-allowed hover:none transition-all ease-in-out"
            disabled={formStatus !== "valid"}
          >
            Submit
          </button>
        </div>
      </motion.div>
    </form>
  );
}
