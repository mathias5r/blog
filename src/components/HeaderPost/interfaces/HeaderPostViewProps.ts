export default interface HeaderPostProps {
  id: string;
  post: {
    image: string;
    title: string;
    intro: string;
    url: string;
  };
  isMouseOver: boolean;
}