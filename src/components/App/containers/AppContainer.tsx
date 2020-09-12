import React, { useEffect, useState } from 'react';

import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

import AppView from '../presentations/AppView';

const AppContainer = (): JSX.Element => {
  const [mousesOver$, setMousesOver$] = useState([] as Observable<any>[]);
  const [itemUnderMouse, setItemUnderMouse] = useState(undefined);

  useEffect(() => {
    const posts$ = fromEvent(
      document.getElementById('posts') as FromEventTarget<Event>,
      'mouseleave'
    ).pipe(map(() => undefined));

    const merge$ = merge(...mousesOver$, posts$)
      .pipe(debounceTime(200))
      .subscribe((index) => setItemUnderMouse(index));

    return (): void => {
      merge$.unsubscribe();
    };
  }, [mousesOver$]);

  return <AppView {...{ itemUnderMouse, mousesOver$, setMousesOver$ }} />;
};

export default AppContainer;
