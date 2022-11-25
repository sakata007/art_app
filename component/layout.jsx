import Head from "next/head";
// import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>{/* <link rel="stylesheet" href="" /> */}</Head>
      <main>{children}</main>
    </div>
  );
}
