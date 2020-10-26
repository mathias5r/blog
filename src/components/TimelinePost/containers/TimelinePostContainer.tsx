import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import TimelinePostView from '../presentations/TimelinePostView';

interface TimelinePostContainerProps {
  index: number;
  post: {
    image: string;
    title: string;
    thumb: string;
    intro: string;
    url: string;
  };
}

const TimelinePostContainer = (
  props: TimelinePostContainerProps
): JSX.Element => {
  const { index, post } = props;

  const [visible, setVisible] = useState(false);
  const [isInViewPort, setIsInViewPort] = useState(false);

  const id = `timeline-post-${index}`;

  useIntersectionObserver(id, [0.5], (entries) => {
    if (entries[0].isIntersecting === true) {
      setIsInViewPort(true);
      setVisible(true);
    } else {
      setIsInViewPort(false);
    }
  });

  return <TimelinePostView {...{ id, isInViewPort, post, visible }} />;
};

export default TimelinePostContainer;
