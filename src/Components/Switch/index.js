import { SwitchStyle } from "./style";

import { FaToggleOn } from "react-icons/fa";

const Switch = () => {
    const SwitchTheme = () =>{
        
    }

  return (
    <SwitchStyle>
      <FaToggleOn className="icon" onClick={SwitchTheme} />
    </SwitchStyle>
  );
};

export default Switch;
