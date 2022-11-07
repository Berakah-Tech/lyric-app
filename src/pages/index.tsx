import { type NextPage } from "next";
import { type zSong } from "../types/types";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const songDummy: zSong = {
    languages: ["English", "Tamil"],
    data: [
      {
        name: "Holy Holy Holy",
        author: "Syles",
        slug: "holy-holy-holy",
        lyrics: {
          chorus: "string",
          stanzas: ["string", "string"],
          bridge: "string",
          chorusOnEveryStanza: true,
          language: "English",
        },
      },
      {
        name: "தூய தூய தூயா",
        author: "Jerome",
        slug: "தூய-தூய-தூயா",
        lyrics: {
          chorus: "string",
          stanzas: ["string", "string"],
          bridge: "string",
          chorusOnEveryStanza: true,
          language: "Tamil",
        },
      },
    ],
    music: {},
  };
  // const songDummy: zsong = {
  //   languages: ["English", "Tamil"],
  //   data: [
  //     {
  //       slug: "Slug",
  //       name: "Holy Holy Holy",
  //       author: "Jerome",
  //       lyrics: {
  //         chorus: "Chorus",
  //         stanzas: ["stanza1", "stanza2"],
  //         language: "English",
  //         bridge: "Bridge",
  //         chorusOnEveryStanza: true,
  //       },
  //     },
  //   ],
  // };

  const { mutate, isSuccess } = trpc.song.create.useMutation();
  const onSubmit = () => {
    console.log(
      "🚀 ~ file: index.tsx ~ line 26 ~ onSubmit ~ muatate",
      mutate(songDummy)
    );
  };

  return (
    <>
      <div>
        <button onClick={onSubmit}>Click Me</button>
      </div>
    </>
  );
};

export default Home;
