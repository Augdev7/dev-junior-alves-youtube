interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto w-screen max-w-[1440px] px-7 sm:px-7 md:px-8 xl:px-20'>
      {children}
    </div>
  );
};
export default Container;
