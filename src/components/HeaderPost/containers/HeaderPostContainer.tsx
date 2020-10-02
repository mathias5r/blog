import React, { useEffect } from 'react';

import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

import HeaderPostView from '../presentations/HeaderPostView';

interface HeaderPostContainerProps {
  index: number;
  post: {
    image: string;
    title: string;
    intro: string;
    url: string;
  };
  isMouseOver: boolean;
  mousesOver$: Observable<any>[];
  setMousesOver$: ($: Observable<any>[]) => void;
}

const HeaderPostContainer = (props: HeaderPostContainerProps): JSX.Element => {
  const { index, isMouseOver, mousesOver$, post, setMousesOver$ } = props;

  const id = `post${index}`;

  useEffect(() => {
    mousesOver$[index] = fromEvent(
      document.getElementById(id) as FromEventTarget<Event>,
      'mouseenter',
    ).pipe(map(() => index));
    setMousesOver$([...mousesOver$]);
  }, [id]);

  return <HeaderPostView {...{ id, isMouseOver, post }}/>
}

export default HeaderPostContainer;