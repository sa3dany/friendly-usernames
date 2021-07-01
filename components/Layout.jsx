import Head from "next/head";

function Layout({ title, children }) {
  return (
    <div className="flex flex-col container mx-auto min-h-full px-3">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="my-auto">{children}</main>
    </div>
  );
}

export default Layout;
