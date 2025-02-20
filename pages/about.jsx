import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
        <meta name="description" content="About page description" />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU="
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About Page</h1>
    </div>
  );
}
