import { Observable } from 'rxjs';

export default interface HeaderPostContainerProps {
  index: number;
  post: {
    image: string;
    title: string;
    intro: string;
    thumb: string;
    url: string;
  };
  isMouseOver: boolean;
  mousesOver$: Observable<any>[];
  setMousesOver$: ($: Observable<any>[]) => void;
}