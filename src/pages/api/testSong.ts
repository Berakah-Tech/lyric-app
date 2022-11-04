import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient({ log: ["query", "info"] });

const songs = async (req: NextApiRequest, res: NextApiResponse) => {
  const songCount = await prisma.songsonBooks.findMany();
  console.log("🚀 ~ file: testSong.js ~ line 6 ~ songs ~ songCount", songCount);
  res.status(200).json(songCount);
};

export default songs;
