"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { doc, onSnapshot } from "firebase/firestore";
import StatusCard from '../components/StatusCard/StatusCard.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  const [data, setData] = useState({ rainAmount: 0, isDanger: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "alerts", "status"), (docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data() as { rainAmount: number; isDanger: boolean });
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 font-mono text-gray-400">
        <span className="animate-pulse">Connecting to El Rosario stations...</span>
      </div>
    );
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-6 transition-colors duration-1000 ${data.isDanger ? 'bg-red-600' : 'bg-emerald-500'}`}>
      <StatusCard data={data} />
      <Footer />
    </main>
  );
}