import React, { useEffect, useState } from 'react';

import TimelinePostView from '../presentations/TimelinePostView';

interface TimelinePostContainerProps {
  index: number;
  post: {
    image: string;
    title: string;
    intro: string;
    url: string;
  };
}

const TimelinePostContainer = (props: TimelinePostContainerProps): JSX.Element => {
  const { index, post } = props;

  const [visible, setVisible] = useState(false);

  const id = `timeline-post-${index}`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true) {
        setVisible(true);
      } else{
        setVisible(false);
      }
    }, { threshold: [0.5] });
    observer.observe(document.getElementById(id) as Element);
  }, [])
  
  return (
    <TimelinePostView {...{ id, post, visible }}/>
  )
}

export default TimelinePostContainer;