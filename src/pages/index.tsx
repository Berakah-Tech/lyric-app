import Head from "next/head";
import Link from "next/link";
import { type ReactElement } from "react";
import Layout from "../components/layouts/Layout";
import type { NextPageWithLayout } from "../types/types";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Lyric App</title>
      </Head>
      <div className="grid">
        <p>Home Page</p>
        <Link href={"/admin"} className="bg-black p-2 text-white">
          Go to Admin Page
        </Link>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
