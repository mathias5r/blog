export default interface TimelinePostViewProps  {
  id: string;
  post: {
    image: string;
    intro: string;
    thumb: string;
    title: string;
    url: string;
  };
  visible: boolean;
  isInViewPort: boolean;
}