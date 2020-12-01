export default interface HeaderPostProps {
  id: string;
  post: {
    image: string;
    title: string;
    intro: string;
    thumb: string;
    url: string;
  };
  isMouseOver: boolean;
}