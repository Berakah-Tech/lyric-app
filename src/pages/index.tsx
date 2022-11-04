import { type NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.song.song.useQuery();

  return (
    <>
      <div>{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}</div>
    </>
  );
};

export default Home;
