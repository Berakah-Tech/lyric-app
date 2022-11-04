import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query", "info"] });

const songs = async (req, res) => {
  const songCount = await prisma.song.findMany();
  console.log("🚀 ~ file: testSong.js ~ line 6 ~ songs ~ songCount", songCount);
  res.status(200).json(songCount);
};
