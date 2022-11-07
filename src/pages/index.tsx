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
  const { mutate, isSuccess } = trpc.song.create.useMutation();
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
