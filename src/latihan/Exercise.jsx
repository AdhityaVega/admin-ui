import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import PostCard from "./PostCard";
import { getUsers, staticPosts } from "./Services";
import { use } from "react";

function Exercise() {
  const [users, setUsers] = useState([]);

  // Mengambil data user dari API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-special-mainBg p-8 font-body">
      
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-center text-special-red2 font-poppins uppercase tracking-wide">
          Post Cards
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 max-w-[1350px] mx-auto px-6 mb-16">
        {staticPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      <hr className="border-gray-05 max-w-[1500px] mx-auto mb-12" />

      <header className="mb-10">
        <h1 className="text-2xl font-bold text-center text-defaultBlack font-poppins uppercase tracking-wide">
          User Cards
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {users.map((user) => (
          <UserCard key={user.email} {...user} />
        ))}
      </div>

    </div>
  );
}

export default Exercise;