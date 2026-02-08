"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function HistoryPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const user = auth.currentUser;
      const res = await fetch(`/api/history?userId=${user.uid}`);
      const json = await res.json();
      setData(json.data);
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">History</h1>

      {data.map(item => (
        <div key={item.id} className="bg-purple-100 p-4 mt-4 rounded">
          <p>{item.output}</p>
        </div>
      ))}
     {data.map(item => (
  <div key={item.id} className="bg-purple-100 p-4 mt-4 rounded">
    <p>{item.output}</p>

    <button
      onClick={() =>
        fetch(`/api/content/${item.id}`, { method: "DELETE" })
      }
      className="mt-2 text-red-600"
    >
      Delete
    </button>
  </div>
))}
    </div>
  );
}