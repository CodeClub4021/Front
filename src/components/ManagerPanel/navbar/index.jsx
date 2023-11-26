import React from "react";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="">
        <p className="shrink text-[33px] capitalize text-white dark:text-white">
      
            {brandText}
        
        </p>
      </div>

     
    </nav>
  );
};

export default Navbar;
