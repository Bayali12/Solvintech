import ContentLoader from 'react-content-loader';

export const CardSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={380}
      height={405}
      viewBox="0 0 380 405"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="19" ry="19" width="380" height="405" />
    </ContentLoader>
  );
};
