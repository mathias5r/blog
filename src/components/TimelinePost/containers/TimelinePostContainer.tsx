import React from 'react';

import TimelinePostView from '../presentations/TimelinePostView';

interface TimelinePostContainerProps {
  post: {
    image: string;
    title: string;
    intro: string;
    url: string;
  };
}

const TimelinePostContainer = (props: TimelinePostContainerProps): JSX.Element => {
  const { post } = props;
  
  return (
    <TimelinePostView {...{ post }}/>
  )
}

export default TimelinePostContainer;