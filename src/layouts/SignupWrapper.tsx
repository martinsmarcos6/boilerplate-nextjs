import { Logo } from '../assets';
import { AuthFormFooter } from '../components/AuthFormFooter';

interface SignUpWrapperProps {
  children: React.ReactNode;
}

export const SignUpWrapper = ({ children }: SignUpWrapperProps) => {
  return (
    <main className="fixed left-0 top-0 bg-white w-full h-full flex">
      <aside className="bg-[url('/assets/fractal.svg')] flex-1 bg-no-repeat flex items-center justify-center bg-cover">
        <Logo />
      </aside>
      <aside className="flex-1 flex justify-center items-center relative">
        {children}
        <AuthFormFooter className="absolute bottom-[16px] w-full max-w-[408px]" />
      </aside>
    </main>
  );
};
