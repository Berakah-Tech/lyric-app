import Link from "next/link";
import React, { type ReactElement } from "react";
import { adminSongCreatePage } from "../../../common/urls";
import AdminLayout from "../../../layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

const SongPage = () => {
  const { data } = trpc.song.getAll.useQuery();
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ SongPage ~ data", data);

  return (
    <div className="w-full">
      <div className="header-section flex justify-between">
        <h1 className="text-2xl">Songs</h1>
        <Link href={adminSongCreatePage} className="btn-black">
          Add Song
        </Link>
      </div>
      <div className="admin-songs-container mt-8">
        <table className="w-full table-fixed">
          <tbody>
            <tr className="table-heading-row">
              <th className="table-heading">Name</th>
              <th className="table-heading w-[20%]">Language</th>
              <th className="table-heading w-[20%]">Author</th>
            </tr>
            {data &&
              data.map((song) => (
                <tr key={song.id} className="table-data-row">
                  <td className="table-data">{song.name}</td>
                  <td className="table-data">{song.language}</td>
                  <td className="table-data">{song.author}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SongPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SongPage;
