// import { motion } from 'framer-motion';
// import clsx from 'clsx';

// function StarIcon(props) {
//   return (
//     <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
//       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//     </svg>
//   );
// }

// function StarRating({ rating }) {
//   return (
//     <div className="flex">
//       {[...Array(5).keys()].map((index) => (
//         <StarIcon
//           key={index}
//           className={clsx(
//             'h-5 w-5',
//             rating > index ? 'fill-cyan-500' : 'fill-gray-300'
//           )}
//         />
//       ))}
//     </div>
//   );
// }

// function Review({ title, body, author, rating }) {
//   return (
//     <motion.figure
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="rounded-3xl bg-white p-6 shadow-md shadow-gray-900/5"
//     >
//       <blockquote className="text-gray-900">
//         <StarRating rating={rating} />
//         <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
//           {title}
//         </p>
//         <p className="mt-3 text-base leading-7">{body}</p>
//       </blockquote>
//       <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
//         {author}
//       </figcaption>
//     </motion.figure>
//   );
// }

// export default Review;
