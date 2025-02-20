// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// }

import Head from "next/head";
import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

// Home component with dynamic head content
export default function Home({ headContent }) {
  console.log(headContent);

  // Load Google fonts using Next.js font optimization
  // const geistSans = Geist({
  //   variable: "--font-geist-sans",
  //   subsets: ["latin"]
  // });

  // const geistMono = Geist_Mono({
  //   variable: "--font-geist-mono",
  //   subsets: ["latin"]
  // });

  // Handle click event
  const handleClick = () => {
    console.log("test");
  };

  return (
    <>
      {/* Head section with dynamic content */}
      <Head>
        <title>{headContent.title || "Default Title"}</title>
        <meta
          name="description"
          content={headContent.description || "Default description"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2016/02/08/11/24/homepage-1186348_1280.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content */}
      <div
      // className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li onClick={() => handleClick()}>
              Get started by editing <code>pages/index.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          {/* Call-to-action buttons */}
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>

        {/* Footer section */}
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}

// Fetch head content from an API using getServerSideProps
export async function getServerSideProps() {
  console.log("1234567");
  try {
    const res = await fetch("https://api.example.com/head-content");
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();

    console.log("12345670000000000000");

    return {
      props: {
        headContent: data // Pass head content to the component as props
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        headContent: {
          title: "Error Title",
          description: "Error fetching description."
        }
      }
    };
  }
}
