import React from "react";

import TrendingItem from "./TrendingItem";

import styles from "./Trending.module.scss";

const TRENDING_ITEMS = [
  {
    // When Math.random() used, server does not matches client.
    id: "1",
    author: "Said Kaban",
    title: "How to clone Medium blog?",
    date: "2020-10-10",
  },
  {
    id: "2",
    author: "Berk Elmas",
    title: "How to create React app?",
    date: "2020-10-10",
  },
  {
    id: "3",
    author: "Matt Jones",
    title: "Way to overcome difficulties",
    date: "2020-10-10",
  },
  {
    id: "4",
    author: "John Terry",
    title: "To Kill a Mockingbird",
    date: "2020-10-10",
  },
  {
    id: "5",
    author: "Rebecca Stones",
    title: "Of Mice and Men",
    date: "2020-10-10",
  },
  {
    id: "6",
    author: "Claudia Johnson",
    title: "Pandemic and our lives",
    date: "2020-10-10",
  },
];

const Trending: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
          <path fill="#fff" d="M0 .8h28v28H0z"></path>
          <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
            <path fill="#fff" d="M4 4.8h20v20H4z"></path>
            <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
            <path
              d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
              stroke="#000"
              strokeLinecap="round"
            ></path>
          </g>
          <defs>
            <clipPath id="trending_svg__clip0">
              <path
                fill="#fff"
                transform="translate(4 4.8)"
                d="M0 0h20v20H0z"
              ></path>
            </clipPath>
          </defs>
        </svg>
        <h3 className={styles.title}>Trending on medium</h3>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.items}>
          {TRENDING_ITEMS.map((item, idx) => (
            <div key={item.id}>
              <TrendingItem
                title={item.title}
                author={item.author}
                date={item.date}
                order={idx + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
