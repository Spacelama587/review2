// import { useRef } from 'react';
// import { useInView } from 'framer-motion';
// import Review from './Review';
// import { Container } from './Container';

// const reviews = [
//   {
//     title: 'It really works.',
//     body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour.',
//     author: 'CrazyInvestor',
//     rating: 5,
//   },
//   {
//     title: 'You need this app.',
//     body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
//     author: 'CluelessButRich',
//     rating: 5,
//   },
//   {
//     title: 'This shouldn’t be legal.',
//     body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
//     author: 'LivingDaDream',
//     rating: 5,
//   },
//   {
//     title: 'Screw financial advisors.',
//     body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
//     author: 'JordanBelfort1962',
//     rating: 5,
//   },
//   {
//     title: 'I love it!',
//     body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
//     author: 'MrBurns',
//     rating: 5,
//   },
//   {
//     title: 'Too good to be true.',
//     body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
//     author: 'LazyRich99',
//     rating: 5,
//   },
//   {
//     title: 'Wish I could give 6 stars',
//     body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
//     author: 'SarahLuvzCash',
//     rating: 5,
//   },
//   {
//     title: 'Bought an island.',
//     body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
//     author: 'ScroogeMcduck',
//     rating: 5,
//   },
//   {
//     title: 'No more debt!',
//     body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
//     author: 'BruceWayne',
//     rating: 5,
//   },
//   {
//     title: 'I’m 13 and I’m rich.',
//     body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
//     author: 'RichieRich',
//     rating: 5,
//   },
//   {
//     title: 'Started an investment firm.',
//     body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
//     author: 'TheCountOfMonteChristo',
//     rating: 5,
//   },
//   {
//     title: 'It’s like a superpower.',
//     body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
//     author: 'ClarkKent',
//     rating: 5,
//   },
//   {
//     title: 'Quit my job.',
//     body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
//     author: 'GeorgeCostanza',
//     rating: 5,
//   },
//   {
//     title: 'Don’t download this app',
//     body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
//     author: 'JeffBezos',
//     rating: 5,
//   },
// ];

// function ReviewGrid() {
//   const containerRef = useRef();
//   const isInView = useInView(containerRef, { once: false, amount: 0.4 });

//   return (
//     <div
//       ref={containerRef}
//       className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
//     >
//       {isInView && reviews.map((review, index) => (
//         <Review key={index} {...review} />
//       ))}
//       <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 " />
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
//     </div>
//   );
// }

// export default ReviewGrid;
