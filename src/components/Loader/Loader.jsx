import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ margin: '20px auto' }}>
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};
