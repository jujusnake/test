import Head from "next/head";
import Link from "next/link";

export default function Stamp({ title, img }: { title: string; img: string }) {
  return (
    <>
      <Head>
        <title>Date Stamp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title ? title : "default"} />
        <meta
          property="og:image"
          content={
            img
              ? img
              : "https://plus.unsplash.com/premium_photo-1680615211040-ad309f1ac38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
        />

        <title>{title ? title : "default"}</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-center">
          Hello!
          <br />
          Welcome to Namju&apos;s photo editing tools.
        </h1>

        <section className="m-4">
          <Link href="/stamp" className="">
            Date Stamp
          </Link>
        </section>
      </main>
    </>
  );
}

Stamp.getInitialProps = ({ req, query }: { req: any; query: any }) => {
  const { seq } = query;
  return {
    title: "stamp - " + seq,
    img: `https://public.metarecon.ai/prod/get?seq=${seq}&type=thumbnail`,
  };
};
