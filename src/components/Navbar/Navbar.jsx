import PageHeader from './NavbarAtoms/2-PageHeader';
import ResizeScreen from './NavbarAtoms/1-ResizeScreen';
import ThemeToggle from './NavbarAtoms/3-ThemeToggle';
const Navbar = () => {
  return (
    <nav>
      <ul className="bg-firstBgColor z-10 fixed top-0 left-0 right-0 flex justify-between items-center px-2 py-1 border-b-[1px] border-identityColor border-solid">
        <ResizeScreen />
        <PageHeader/>
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
