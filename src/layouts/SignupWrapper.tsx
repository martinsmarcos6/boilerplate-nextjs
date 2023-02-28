import { Logo } from '../assets';
import { AuthFormFooter } from '../components/AuthFormFooter';

interface SignUpWrapperProps {
  children: React.ReactNode;
}

export const SignUpWrapper = ({ children }: SignUpWrapperProps) => {
  return (
    <main className="fixed left-0 top-0 bg-white w-full h-full flex">
      <aside className="bg-[url('/assets/fractal.svg')] flex-1 bg-no-repeat  items-center justify-center bg-cover hidden md:flex">
        <Logo />
      </aside>
      <aside className="flex-1 flex justify-center items-center relative px-4">
        {children}
        <AuthFormFooter className="absolute bottom-[16px] w-full max-w-[408px]" />
      </aside>
    </main>
  );
};
