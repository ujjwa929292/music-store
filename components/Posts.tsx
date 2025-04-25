import Head from "next/head";
import Link from "next/link";
import React from "react";

// Dummy blog posts
const dummyPosts = [
  {
    id: 1,
    date: "2023-03-16",
    tag: "Technology",
    title: "Understanding React's Virtual DOM",
    info: "React's Virtual DOM helps improve UI performance by abstracting direct DOM manipulations.",
    author: "John Doe",
  },
  {
    id: 2,
    date: "2023-04-10",
    tag: "Web Development",
    title: "Mastering CSS Grid",
    info: "Learn how CSS Grid can help you create complex layouts with ease and flexibility.",
    author: "Jane Smith",
  },
  {
    id: 3,
    date: "2023-05-05",
    tag: "Programming",
    title: "Why JavaScript is Still the King",
    info: "Discover the reasons behind JavaScript's dominance in modern web development.",
    author: "Emily Clark",
  },
  {
    id: 4,
    date: "2023-06-01",
    tag: "AI",
    title: "The Rise of AI in Web Development",
    info: "Artificial intelligence is transforming the way websites are built and optimized.",
    author: "Michael Brown",
  },
  {
    id: 5,
    date: "2023-07-15",
    tag: "UX Design",
    title: "Improving User Experience with Animations",
    info: "Learn how thoughtful animations can improve user engagement and satisfaction.",
    author: "Lisa Taylor",
  },
  {
    id: 6,
    date: "2023-08-10",
    tag: "Frontend Development",
    title: "Exploring the Power of TypeScript",
    info: "TypeScript enhances JavaScript development by adding strong typing and tooling support.",
    author: "Kevin Lee",
  },
];

const Posts = () => {
  return (
      <div className="bg-gray-100 py-10 min-h-screen">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {dummyPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 space-y-4">
                {/* Post Metadata */}
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    href={`/blog/${post.id}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.tag}
                  </Link>
                </div>

                {/* Post Title */}
                <h3 className="text-lg font-semibold text-gray-900 hover:text-[#a55e3f] transition duration-300">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                {/* Post Info */}
                <p className="text-sm text-gray-600 line-clamp-3">{post.info}</p>

                {/* Author Info */}
                <div className="flex items-center gap-x-4 pt-4 border-t border-gray-200">
                  <svg
                    fill="#000000"
                    viewBox="0 0 32 32"
                    className="h-10 w-10 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 11.5 12 C 10.671875 12 10 12.671875 10 13.5 C 10 14.328125 10.671875 15 11.5 15 C 12.328125 15 13 14.328125 13 13.5 C 13 12.671875 12.328125 12 11.5 12 Z M 18 13 L 18 15 L 23 15 L 23 13 Z M 20.96875 17.03125 C 20.96875 18.714844 20.292969 19.882813 19.3125 20.71875 C 18.332031 21.554688 17.035156 22 16 22 C 13.878906 22 12.4375 21.140625 11.3125 20.03125 L 9.90625 21.46875 C 11.300781 22.839844 13.320313 24 16 24 C 17.554688 24 19.261719 23.414063 20.625 22.25 C 21.988281 21.085938 22.96875 19.289063 22.96875 17.03125 Z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {post.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Posts;
