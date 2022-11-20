import { type ReactElement } from "react";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "../types/types";

const Home: NextPageWithLayout = () => {
  // const songDummy: Song = {
  //   languages: ["English", "Tamil"],
  //   data: [
  //     {
  //       name: "Holy Holy Holy",
  //       author: "Syles",
  //       slug: "holy-holy-holy",
  //       language: "English",
  //       lyrics: {
  //         chorus: "string",
  //         stanzas: ["string", "string"],
  //         bridge: "string",
  //         chorusOnEveryStanza: true,
  //       },
  //     },
  //     {
  //       name: "தூய தூய தூயா",
  //       author: "Jerome",
  //       slug: "தூய-தூய-தூயா",
  //       language: "Tamil",
  //       lyrics: {
  //         chorus: "string",
  //         stanzas: ["string", "string"],
  //         bridge: "string",
  //         chorusOnEveryStanza: true,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div>Home Page</div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
