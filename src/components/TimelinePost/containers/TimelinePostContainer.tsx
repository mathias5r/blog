import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import TimelinePostContainerProps from '../interfaces/TimelinePostContainerProps';

import TimelinePostView from '../presentations/TimelinePostView';

const TimelinePostContainer: React.FC<TimelinePostContainerProps> = ({
  index,
  post,
}): JSX.Element => {
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
