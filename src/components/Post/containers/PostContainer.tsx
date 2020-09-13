import React, { useEffect } from 'react';

import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

import PostView from '../presentations/PostView';

interface PostContainerProps {
  index: number;
  backgroundImage: string;
  isMouseOver: boolean;
  mousesOver$: Observable<any>[];
  setMousesOver$: ($: Observable<any>[]) => void;
}

const PostContainer = (props: PostContainerProps): JSX.Element => {
  const { index, backgroundImage, isMouseOver, mousesOver$, setMousesOver$ } = props;

  const id = `post${index}`;

  useEffect(() => {
    mousesOver$[index] = fromEvent(
      document.getElementById(id) as FromEventTarget<Event>,
      'mouseenter',
    ).pipe(map(() => index));
    setMousesOver$([...mousesOver$]);
  }, [id]);

  return <PostView {...{ backgroundImage, id, isMouseOver }}/>
}

export default PostContainer;