import { type AppProps, type AppType } from "next/app";
import { type Session } from "next-auth";
import type { NextPageWithLayout } from "../types/types";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type CustomAppProps = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <ReactQueryDevtools position="bottom-right" />
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
