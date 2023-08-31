import Head from "next/head";
import { useEffect } from "react";
import TodoList from "~/components/ToDoList";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  useEffect(() => {
    document.body.className = "bg-charcoal-700";
  });

  return (
    <>
      <Head>
        <title>Endless Todos</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <div className="bg-charcoal-800 p-5 text-center">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Endless Todos
          </h1>
        </div>
        <main className="mx-auto max-w-md justify-center pt-32 text-white">
          <TodoList />
          {/* ✨ Start here ✨ */}
          {/* <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}
        </main>
      </div>
    </>
  );
}
