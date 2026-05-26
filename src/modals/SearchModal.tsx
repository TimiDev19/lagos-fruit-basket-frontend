// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/store/store";
// import { closeSearch, setQuery } from "@/store/searchSlice";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   avatar: string;
// };

// export default function SearchModal() {
//   const dispatch = useDispatch();
//   const { isOpen, query } = useSelector((state: RootState) => state.search);

//   const [results, setResults] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       if (!query.trim()) {
//         setResults([]);
//         return;
//       }

//       const fetchData = async () => {
//         try {
//           setLoading(true);

//           const res = await fetch(
//             `https://lagos-food-basket-backend.onrender.com/user?search=${query}`
//           );

//           const data = await res.json();
//           setResults(Array.isArray(data) ? data : []);
//         } catch (err) {
//           console.error(err);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchData();
//     }, 400); // debounce

//     return () => clearTimeout(delay);
//   }, [query]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
//       <div className="bg-white w-[90%] max-w-xl rounded-xl p-4">

//         {/* Close */}
//         <button
//           onClick={() => dispatch(closeSearch())}
//           className="float-right"
//         >
//           ✕
//         </button>

//         {/* Input */}
//         <input
//           autoFocus
//           value={query}
//           onChange={(e) => dispatch(setQuery(e.target.value))}
//           placeholder="Search products..."
//           className="w-full border p-2 rounded-md mb-4"
//         />

//         {/* Results */}
//         <div className="max-h-[400px] overflow-y-auto">
//           {loading ? (
//             <p>Searching...</p>
//           ) : results.length > 0 ? (
//             results.map((item) => (
//               <Link
//                 key={item._id}
//                 to={`/product/${item._id}`}
//                 onClick={() => dispatch(closeSearch())}
//                 className="block p-2 hover:bg-gray-100"
//               >
//                 {item.name}
//               </Link>
//             ))
//           ) : (
//             <p className="text-gray-500">No results</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/store/store";
// import { closeSearch, setQuery } from "@/store/searchSlice";
// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   avatar: string;
// };

// export default function SearchModal() {
//   const dispatch = useDispatch();
//   const { isOpen, query } = useSelector((state: RootState) => state.search);

//   const [results, setResults] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);

//   const abortRef = useRef<AbortController | null>(null);

//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       setLoading(false);
//       return;
//     }

//     const delay = setTimeout(() => {
//       const fetchData = async () => {
//         try {
//           setLoading(true);

//           // cancel previous request (fixes wrong/old results)
//           if (abortRef.current) {
//             abortRef.current.abort();
//           }

//           const controller = new AbortController();
//           abortRef.current = controller;

//           const res = await fetch(
//             `https://lagos-food-basket-backend.onrender.com/user?search=${encodeURIComponent(
//               query.trim()
//             )}`,
//             { signal: controller.signal }
//           );

//           const data = await res.json();

//           setResults(Array.isArray(data) ? data : []);
//         } catch (err: any) {
//           if (err.name !== "AbortError") {
//             console.error(err);
//           }
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchData();
//     }, 300); // faster + more responsive

//     return () => clearTimeout(delay);
//   }, [query]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
//       <div className="bg-white w-[90%] max-w-xl rounded-xl p-4">

//         {/* Close */}
//         <button
//           onClick={() => dispatch(closeSearch())}
//           className="float-right"
//         >
//           ✕
//         </button>

//         {/* Input */}
//         <input
//           autoFocus
//           value={query}
//           onChange={(e) => dispatch(setQuery(e.target.value))}
//           placeholder="Search products..."
//           className="w-full border p-2 rounded-md mb-4 outline-none"
//         />

//         {/* Results */}
//         <div className="max-h-[400px] overflow-y-auto">
//           {loading ? (
//             <p className="text-gray-500">Searching...</p>
//           ) : results.length > 0 ? (
//             results.map((item) => (
//               <Link
//                 key={item._id}
//                 to={`/product/${item._id}`}
//                 onClick={() => dispatch(closeSearch())}
//                 className="block p-2 hover:bg-gray-100"
//               >
//                 <p className="font-medium">{item.name}</p>
//                 <p className="text-xs text-gray-500 line-clamp-1">
//                   {item.description}
//                 </p>
//               </Link>
//             ))
//           ) : query.trim() ? (
//             <p className="text-gray-500">No products found</p>
//           ) : (
//             <p className="text-gray-400">Start typing to search...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { closeSearch, setQuery } from "@/store/searchSlice";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  avatar: string;
};

export default function SearchModal() {
  const dispatch = useDispatch();
  const { isOpen, query } = useSelector((state: RootState) => state.search);

  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    const delay = setTimeout(() => {
      const fetchData = async () => {
        try {
          setLoading(true);

          // cancel previous request
          if (abortRef.current) {
            abortRef.current.abort();
          }

          const controller = new AbortController();
          abortRef.current = controller;

          const res = await fetch(
            `https://lagos-food-basket-backend.onrender.com/user?search=${encodeURIComponent(
              query.trim()
            )}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          const list = Array.isArray(data) ? data : [];

          // ✅ RANKING LOGIC (MOST IMPORTANT FIX)
          const q = query.toLowerCase().trim();

          const ranked = [...list].sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();

            // exact match first
            if (aName === q) return -1;
            if (bName === q) return 1;

            // starts-with next
            const aStarts = aName.startsWith(q);
            const bStarts = bName.startsWith(q);

            if (aStarts && !bStarts) return -1;
            if (bStarts && !aStarts) return 1;

            return 0;
          });

          setResults(ranked);
        } catch (err: any) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
      <div className="bg-white w-[90%] max-w-xl rounded-xl p-4">

        {/* Close */}
        <button
          onClick={() => dispatch(closeSearch())}
          className="float-right"
        >
          ✕
        </button>

        {/* Input */}
        <input
          autoFocus
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search products..."
          className="w-full border p-2 rounded-md mb-4 outline-none"
        />

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {loading ? (
            <p className="text-gray-500">Searching...</p>
          ) : results.length > 0 ? (
            results.map((item) => (
              <Link
                key={item._id}
                to={`/product/${item._id}`}
                onClick={() => dispatch(closeSearch())}
                className="block p-2 hover:bg-gray-100"
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-gray-500 line-clamp-1">
                  {item.description}
                </p>
              </Link>
            ))
          ) : query.trim() ? (
            <p className="text-gray-500">No products found</p>
          ) : (
            <p className="text-gray-400">Start typing to search...</p>
          )}
        </div>
      </div>
    </div>
  );
}