export default interface LazyImageProps {
  image: string;
  isInViewPort: boolean;
  isLoaded: boolean;
  setIsLoaded: Function;
}