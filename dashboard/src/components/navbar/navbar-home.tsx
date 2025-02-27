import React from 'react';
import { useRouter } from 'next/router';

export function NavbarHome() {
  const router = useRouter();

  const navigateToHome = () => {
    void router.push('/');
  };

  return (
    <div
      className="flex flex-shrink-0 items-center cursor-pointer"
      onClick={navigateToHome}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-gray-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" rx="16" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
