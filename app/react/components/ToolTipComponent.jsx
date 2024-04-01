import React, { ReactElement, useRef, useState, Timeout } from 'react';

const ToolTipComponent = ({ children, text, customClass }) => {
  const refSetTimeout = useRef(Timeout);
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTipClasses = customClass ? 'toolTipCustom' : 'tooltip';

  const onMouseEnterHandler = () => {
    console.log('ghfhv');
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 750);
  };

  const onMouseLeaveHandler = () => {
    console.log('ghfhv');
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };

  return (
    <div className='containerTool' onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && <div className={toolTipClasses}>{text}</div>}
    </div>
  );
};

export default ToolTipComponent;