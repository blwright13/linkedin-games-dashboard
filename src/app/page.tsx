"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("linkedin_games")
        .select("*");

      setData(data ?? []);
    }

    load();
  }, []);

  return (
    <main className="p-8">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}