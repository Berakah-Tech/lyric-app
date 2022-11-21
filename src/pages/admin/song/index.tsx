import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

const SongPage = () => {
  const { data } = trpc.song.getAll.useQuery();
  return (
    <div>
      <div>Song Page</div>
      <div className="admin-song-wrap">
        {data && (
          <div>
            {data.map((song) => (
              <div key={song.id}>
                <p>{song.id}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

SongPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SongPage;
