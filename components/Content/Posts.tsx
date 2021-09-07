import React from 'react';
import PostItem from './PostItem';

import styles from './Posts.module.scss';

const POST_ITEMS = [
  {
    // When Math.random() used, server does not matches client.
    id: '1',
    author: 'Said Kaban',
    title: 'How to clone Medium blog?',
    date: '2020-10-10',
    image:
      'https://miro.medium.com/fit/c/400/268/1*tMPWGo9G5RPYr6yrSJrRUQ.jpeg',
  },
  {
    id: '2',
    author: 'Berk Elmas',
    title: 'How to create React app?',
    date: '2020-10-10',
    image:
      'https://miro.medium.com/fit/c/400/268/1*tMPWGo9G5RPYr6yrSJrRUQ.jpeg',
  },
  {
    id: '3',
    author: 'Matt Jones',
    title: 'Way to overcome difficulties',
    date: '2020-10-10',
    image:
      'https://miro.medium.com/fit/c/400/268/1*tMPWGo9G5RPYr6yrSJrRUQ.jpeg',
  },
  {
    id: '4',
    author: 'John Terry',
    title: 'To Kill a Mockingbird',
    date: '2020-10-10',
    image:
      'https://miro.medium.com/fit/c/400/268/1*tMPWGo9G5RPYr6yrSJrRUQ.jpeg',
  },
  {
    id: '5',
    author: 'Rebecca Stones',
    title: 'Of Mice and Men',
    date: '2020-10-10',
    image:
      'https://miro.medium.com/fit/c/400/268/1*tMPWGo9G5RPYr6yrSJrRUQ.jpeg',
  },
  {
    id: '6',
    author: 'Claudia Johnson',
    title: 'Pandemic and our lives',
    date: '2020-10-10',
    image:
      'https://miro.medium.com/fit/c/400/268/1*tMPWGo9G5RPYr6yrSJrRUQ.jpeg',
  },
];

const Posts: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {POST_ITEMS.map((item) => (
          <PostItem
            key={item.id}
            author={item.author}
            title={item.title}
            date={item.date}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
