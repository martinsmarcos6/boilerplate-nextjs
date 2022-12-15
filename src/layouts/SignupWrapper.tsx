import { Logo } from '../assets';

interface SignUpWrapperProps {
  children: React.ReactNode;
}

export const SignUpWrapper = ({ children }: SignUpWrapperProps) => {
  return (
    <main className="fixed left-0 top-0 bg-white w-full h-full flex">
      <aside className="bg-[url('/assets/fractal.svg')] flex-1 bg-no-repeat flex items-center justify-center">
        <Logo />
      </aside>
      <aside className="flex-1 flex justify-center items-center">
        {children}
      </aside>
    </main>
  );
};