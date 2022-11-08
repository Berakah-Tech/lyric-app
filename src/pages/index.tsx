import { type NextPage } from "next";
import { type Song } from "../types/types";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const songDummy: Song = {
    languages: ["English", "Tamil"],
    data: [
      {
        name: "Holy Holy Holy",
        author: "Syles",
        slug: "holy-holy-holy",
        language: "English",
        lyrics: {
          chorus: "string",
          stanzas: ["string", "string"],
          bridge: "string",
          chorusOnEveryStanza: true,
        },
      },
      {
        name: "தூய தூய தூயா",
        author: "Jerome",
        slug: "தூய-தூய-தூயா",
        language: "Tamil",
        lyrics: {
          chorus: "string",
          stanzas: ["string", "string"],
          bridge: "string",
          chorusOnEveryStanza: true,
        },
      },
    ],
  };

  const { mutate } = trpc.song.create.useMutation();
  const onSubmit = () => {
    mutate(songDummy);
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
