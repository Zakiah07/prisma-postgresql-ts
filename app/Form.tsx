"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    const res = await data.json();
    router.refresh();
    if (!res.ok) console.log(res.message);
  }

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="bg-gray-200 mr-3"
      />
      <button type="submit">Make a new post</button>
    </form>
  );
}
