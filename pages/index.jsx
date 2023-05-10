import { useEffect, useState } from "react";
import words from "friendly-words";
import { ClipboardIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

import Layout from "components/Layout";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(generate());
  }, []);

  /**
   * Generates a friendly username
   * @see https://chasem.co/2019/11/friendly-ids
   * @returns string
   */
  function generate() {
    const { predicates, objects } = words;
    const predicate = predicates[Math.floor(Math.random() * predicates.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    return `${predicate} ${object}`;
  }

  function onCopy() {
    navigator.clipboard.writeText(username.replace(" ", "-"));
  }

  function onGenerate() {
    setUsername(generate());
  }

  return (
    <Layout title="Friendly Usernames">
      <div
        className="shadow rounded-md mx-auto max-w-screen-sm
          p-1 bg-gray-100 dark:bg-gray-800"
      >
        <div className="flex leading-none text-2xl sm:text-3xl">
          <input
            readOnly
            value={username}
            className="
              flex-grow w-3/4 bg-gray-100 dark:bg-gray-800
              p-3 pr-0 capitalize font-mono"
          />

          <button
            className="p-2 text-gray-500 dark:text-gray-500
              hover:text-current dark:hover:text-current"
            onClick={onCopy}
          >
            <span className="sr-only">Copy to clipboard</span>
            <ClipboardIcon className="h-10 w-10" />
          </button>

          <button
            className="p-2 text-gray-500 dark:text-gray-500
              hover:text-current dark:hover:text-current"
            onClick={onGenerate}
          >
            <span className="sr-only">Generate new username</span>
            <ArrowPathIcon className="h-10 w-10" />
          </button>
        </div>
      </div>
    </Layout>
  );
}
