import React, { useEffect } from 'react';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

import HeaderPostView from '../presentations/HeaderPostView';
import HeaderPostContainerProps from '../interfaces/HeaderPostContainerProps';

const HeaderPostContainer: React.FC<HeaderPostContainerProps> = ({
  index,
  isMouseOver,
  mousesOver$,
  post,
  setMousesOver$,
}): JSX.Element => {
  const id = `post${index}`;

  useEffect(() => {
    mousesOver$[index] = fromEvent(
      document.getElementById(id) as FromEventTarget<Event>,
      'mouseenter'
    ).pipe(map(() => index));
    setMousesOver$([...mousesOver$]);
  }, [id]);

  return <HeaderPostView {...{ id, isMouseOver, post }} />;
};

export default HeaderPostContainer;
