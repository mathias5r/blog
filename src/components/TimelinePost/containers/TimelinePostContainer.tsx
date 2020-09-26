import React from 'react';

import TimelinePostView from '../presentations/TimelinePostView';

interface TimelinePostContainerProps {
  image: string;
}

const TimelinePostContainer = (props: TimelinePostContainerProps): JSX.Element => {
  const { image } = props;
  return (
    <TimelinePostView {...{ image }}/>
  )
}

export default TimelinePostContainer;