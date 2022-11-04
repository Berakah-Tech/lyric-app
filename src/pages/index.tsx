import { type NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.song.count.useQuery();

  const songDummy = {
    name: "Amazing Grace",
    author: "Syles",
    lyrics: {},
    music: {},
    language: "english",
    slug: "asdasdas",
  };

  const songMutation = trpc.song.create.useMutation();

  return (
    <>
      <div>
        {hello.data ? <p>{hello.data}</p> : <p>Loading..</p>}
        <br />
        {/* <p>{song.data?.name}</p> */}
        <button
          onClick={async () => {
            const songReq = await songMutation.mutate(songDummy);
            console.log("🚀 ~ file: index.tsx ~ line 27 ~ songReq", songReq);
          }}
        >
          click me
        </button>
      </div>
    </>
  );
};

export default Home;
