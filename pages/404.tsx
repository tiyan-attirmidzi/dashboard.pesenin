import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 2000);
  }, []);

  return (
    <>
      <section className="not-found mx-auto pt-145 pb-md-212 pb-100">
        <div className="container-fluid">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 2032 459"
              className="img-fluid"
              width="30%"
            >
              <path
                fill="#FFA700"
                d="M7076.31 5911.84c5.48.34 10.87-1.6 14.87-5.36 4.01-3.76 6.28-9.01 6.28-14.51.1-13.99.1-29.39.1-29.39 0-17.67 14.32-32 32-32h171.4c18.78 0 34 15.22 34 34v171.44c0 17.66-14.31 31.96-31.96 31.96h-29.43c-5.52 0-10.8 2.29-14.58 6.31a20.003 20.003 0 00-5.38 14.95c3.09 51.89-15.22 104.78-54.82 144.38-73.65 73.64-193.23 73.64-266.87 0-73.64-73.64-73.64-193.22 0-266.87 39.6-39.6 92.49-57.91 144.39-54.91zm21.25 61.82c0-10.27-7.78-18.87-17.99-19.9-42.23-3.97-85.88 10.15-118.19 42.46-57.38 57.38-57.38 150.55 0 207.94 57.39 57.38 150.56 57.38 207.94 0 32.31-32.31 46.43-75.96 42.36-118.18-1.03-10.16-9.59-17.89-19.8-17.89-17.64-.11-42.73-.11-42.73-.11-11.05 0-20 8.96-20 20v42.77a32.01 32.01 0 01-32 32h-60.36a34.04 34.04 0 01-24.05-9.95 34.05 34.05 0 01-9.96-24.05v-60.36c0-8.48 3.38-16.62 9.38-22.62 6-6 14.14-9.38 22.62-9.38h42.78c11.04 0 20-8.95 20-20v-42.73zm93.2 7.15c0-3.45-2.79-6.25-6.25-6.25h-47.78c-3.45 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.8 6.25 6.25 6.25h47.78c3.46 0 6.25-2.8 6.25-6.25v-47.78zm-12.5 6.25v35.28h-35.28v-35.28h35.28zm-7.49 7.49h-20.3v20.3h20.3v-20.3zm132.57-126.07c0-3.45-2.8-6.25-6.25-6.25h-47.78c-3.46 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.79 6.25 6.25 6.25h47.78c3.45 0 6.25-2.8 6.25-6.25v-47.78zm-112.58 0c0-3.45-2.79-6.25-6.25-6.25h-47.78c-3.45 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.8 6.25 6.25 6.25h47.78c3.46 0 6.25-2.8 6.25-6.25v-47.78zm100.08 6.25v35.28h-35.28v-35.28h35.28zm-112.58 0v35.28h-35.28v-35.28h35.28zm105.11 7.47h-20.35v20.34h20.35v-20.34zm-112.6.02h-20.3v20.3h20.3v-20.3z"
                transform="translate(-12070.2 -2218.87) translate(5193.48 -3611.71)"
              />
              <path
                fill="#FFA700"
                fillRule="nonzero"
                d="M13112.7 2524.33c-5-6.15-7.5-11.68-7.5-16.59s4.1-11.4 12.4-19.48c4.8-4.62 9.9-6.93 15.3-6.93s12.9 4.81 22.5 14.43c2.7 3.27 6.6 6.4 11.6 9.38 5 2.98 9.6 4.48 13.8 4.48 17.9 0 26.9-7.32 26.9-21.94 0-4.42-2.5-8.13-7.4-11.11-4.9-2.98-11-5.14-18.3-6.49-7.3-1.35-15.2-3.51-23.7-6.49-8.5-2.99-16.3-6.5-23.7-10.54-7.3-4.04-13.4-10.43-18.3-19.19-4.9-8.75-7.3-19.28-7.3-31.6 0-16.93 6.3-31.69 18.9-44.3 12.6-12.6 29.7-18.9 51.5-18.9 11.5 0 22 1.49 31.6 4.47 9.5 2.99 16.1 6.02 19.7 9.09l7.3 5.49c5.9 5.58 8.9 10.29 8.9 14.14 0 3.85-2.3 9.14-6.9 15.87-6.6 9.62-13.3 14.43-20.2 14.43-4.1 0-9.1-1.92-15-5.77-.6-.39-1.7-1.35-3.4-2.89-1.6-1.54-3.1-2.79-4.4-3.75-4.1-2.5-9.2-3.75-15.5-3.75-6.2 0-11.4 1.49-15.5 4.47-4.2 2.99-6.3 7.12-6.3 12.41s2.5 9.57 7.4 12.84c4.9 3.28 11 5.49 18.3 6.64 7.3 1.16 15.3 2.93 24 5.34 8.6 2.4 16.6 5.34 23.9 8.8 7.3 3.47 13.5 9.48 18.4 18.04 4.9 8.56 7.3 19.09 7.3 31.6 0 12.5-2.5 23.52-7.5 33.04-5 9.53-11.5 16.88-19.6 22.08-15.6 10.2-32.2 15.29-49.9 15.29-9.1 0-17.6-1.1-25.7-3.32-8.1-2.21-14.6-4.95-19.6-8.22-10.2-6.16-17.4-12.12-21.4-17.89l-2.6-3.18zm686.8-156.41c0-4.43.2-7.74.5-9.96.3-2.21 1.2-4.76 2.7-7.64 2.7-5.2 10.2-7.79 22.5-7.79 13.5 0 21.5 3.55 24 10.67.9 3.27 1.4 8.27 1.4 15.01v160.45c0 4.62-.1 7.99-.4 10.1-.3 2.12-1.2 4.62-2.8 7.51-2.6 5.19-10.2 7.79-22.5 7.79-13.4 0-21.3-3.66-23.6-10.97-1.2-3.08-1.8-7.98-1.8-14.72v-160.45zm-866.3 135.06h88.9c4.4 0 7.7.14 9.9.43 2.3.29 4.8 1.2 7.7 2.74 5.2 2.7 7.8 10.2 7.8 22.51 0 13.47-3.6 21.36-10.7 23.67-3.3 1.15-8.3 1.73-15 1.73h-114.3c-13.4 0-21.3-3.66-23.6-10.97-1.2-3.08-1.8-7.98-1.8-14.72v-160.45c0-9.81 1.9-16.5 5.5-20.06 3.7-3.56 10.6-5.33 20.8-5.33h113.7c4.4 0 7.7.14 9.9.43 2.3.29 4.8 1.2 7.7 2.74 5.2 2.69 7.8 10.2 7.8 22.51 0 13.47-3.6 21.35-10.7 23.66-3.3 1.16-8.3 1.73-15 1.73h-88.6v29.15h57.1c4.5 0 7.8.15 10 .43 2.2.29 4.8 1.21 7.7 2.75 5.1 2.69 7.7 10.19 7.7 22.51 0 13.46-3.6 21.35-10.9 23.66-3.3 1.15-8.3 1.73-15 1.73h-56.6v29.15zm438.9 0h88.9c4.5 0 7.8.14 10 .43s4.7 1.2 7.6 2.74c5.2 2.7 7.8 10.2 7.8 22.51 0 13.47-3.5 21.36-10.7 23.67-3.2 1.15-8.2 1.73-15 1.73h-114.2c-13.5 0-21.4-3.66-23.7-10.97-1.2-3.08-1.7-7.98-1.7-14.72v-160.45c0-9.81 1.8-16.5 5.4-20.06 3.7-3.56 10.6-5.33 20.8-5.33h113.7c4.5 0 7.8.14 10 .43s4.7 1.2 7.6 2.74c5.2 2.69 7.8 10.2 7.8 22.51 0 13.47-3.5 21.35-10.7 23.66-3.2 1.16-8.2 1.73-15 1.73h-88.6v29.15h57.2c4.4 0 7.7.15 9.9.43 2.3.29 4.8 1.21 7.7 2.75 5.2 2.69 7.8 10.19 7.8 22.51 0 13.46-3.7 21.35-11 23.66-3.3 1.15-8.3 1.73-15 1.73h-56.6v29.15zm313-151.65c1.8-3.37 4.6-5.63 8.2-6.78 3.7-1.16 8.3-1.74 13.7-1.74 5.5 0 10 .48 13.3 1.45 3.4.96 5.9 2.11 7.5 3.46 1.7 1.35 2.9 3.37 3.6 6.06 1.2 3.08 1.8 7.98 1.8 14.72v160.16c0 4.62-.2 7.99-.5 10.1-.3 2.12-1.2 4.62-2.7 7.51-2.7 5.19-10.2 7.79-22.5 7.79-7.5 0-12.7-.58-15.6-1.73-2.9-1.16-5.3-2.99-7.2-5.49-43.3-57.71-71.8-95.42-85.4-113.12v94.94c0 4.62-.2 7.99-.5 10.1-.3 2.12-1.2 4.62-2.7 7.51-2.7 5.19-10.2 7.79-22.5 7.79-12 0-19.3-2.6-22-7.79-1.5-2.89-2.4-5.49-2.7-7.8-.3-2.31-.4-5.67-.4-10.1v-161.03c0-7.31.9-12.65 2.7-16.01 1.8-3.37 4.6-5.63 8.2-6.78 3.7-1.16 8.4-1.74 14.2-1.74 5.7 0 10.3.53 13.7 1.59 3.4 1.06 5.7 2.26 7.1 3.61.7.58 2.9 3.08 6.6 7.5 40.6 55.22 67.7 91.67 81.4 109.38v-97.55c0-7.31.9-12.65 2.7-16.01zm368.5 0c1.9-3.37 4.6-5.63 8.3-6.78 3.6-1.16 8.2-1.74 13.7-1.74s9.9.48 13.2 1.45c3.4.96 5.9 2.11 7.5 3.46 1.7 1.35 2.9 3.37 3.7 6.06 1.1 3.08 1.7 7.98 1.7 14.72v160.16c0 4.62-.2 7.99-.4 10.1-.3 2.12-1.2 4.62-2.8 7.51-2.7 5.19-10.2 7.79-22.5 7.79-7.5 0-12.7-.58-15.6-1.73-2.9-1.16-5.3-2.99-7.2-5.49-43.3-57.71-71.8-95.42-85.4-113.12v94.94c0 4.62-.2 7.99-.4 10.1-.3 2.12-1.3 4.62-2.8 7.51-2.7 5.19-10.2 7.79-22.5 7.79-11.9 0-19.2-2.6-21.9-7.79-1.6-2.89-2.5-5.49-2.8-7.8-.3-2.31-.4-5.67-.4-10.1v-161.03c0-7.31.9-12.65 2.7-16.01 1.9-3.37 4.6-5.63 8.3-6.78 3.6-1.16 8.3-1.74 14.1-1.74 5.8 0 10.3.53 13.7 1.59 3.4 1.06 5.7 2.26 7.1 3.61.7.58 3 3.08 6.6 7.5 40.6 55.22 67.7 91.67 81.4 109.38v-97.55c0-7.31.9-12.65 2.7-16.01zm-1241 33.91c5 10.19 7.5 21.54 7.5 34.05 0 12.5-2.5 23.81-7.5 33.91-5 10.1-11.5 18.13-19.4 24.09-15.9 12.32-32.5 18.47-49.6 18.47h-36.1v32.61c0 4.43-.1 7.75-.4 9.96-.3 2.21-1.2 4.76-2.7 7.65-2.7 5.19-10.2 7.79-22.6 7.79-13.4 0-21.3-3.56-23.6-10.68-1.2-3.27-1.7-8.27-1.7-15v-160.17c0-4.43.1-7.74.4-9.96.3-2.21 1.2-4.76 2.7-7.64 2.7-5.2 10.2-7.79 22.5-7.79h61.8c16.9 0 33.4 6.15 49.3 18.46 7.9 5.97 14.4 14.05 19.4 24.25zm-68.7 59.44c5.8 0 11.4-2.11 17-6.34 5.6-4.24 8.4-10.59 8.4-19.05 0-8.47-2.8-14.86-8.4-19.19-5.6-4.33-11.3-6.5-17.3-6.5h-36.1v51.08h36.4z"
                transform="translate(-12070.2 -2218.87)"
              />
            </svg>
          </div>
          <div className="pt-70 pb-md-50 pb-150">
            <h2 className="text-4xl fw-bold text-center color-palette-0 mb-10">Oops! Not Found</h2>
            <p className="text-lg text-center color-palette-0 m-0">
              Mohon maaf, Halaman yang anda kunjungi
              <br className="d-sm-block d-none" />
              sudah tidak tersedia pada sistem kami.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}