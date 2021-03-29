import * as React from 'react';
import './styles.scss';

import { Timer } from '../timer';

export const Navigation = ({ items = [] }) => {
  const [activeEvent, setActiveEvent] = React.useState(null);
  const pointerStyles = usePointerStyles(activeEvent);

  return (
    <nav className="nav">
      <ul className="nav-list">
        {items.map(({ label, section, timezoneOffset }, key) => {
          const isSelected = section === activeEvent?.target.dataset?.section;

          return (
            <li
              key={key}
              className="nav-item"
              onClick={setActiveEvent}
              data-section={section}
              data-selected={isSelected}
            >
              {label}
              <div className="nav-timer">
                {isSelected && <Timer offset={timezoneOffset} />}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="nav-pointer" style={pointerStyles} />
    </nav>
  );
};

function usePointerStyles(event) {
  const [pointerStyles, setStyles] = React.useState(null);

  React.useLayoutEffect(() => {
    function calculateStyles() {
      setStyles({
        width: event?.target.getBoundingClientRect().width || 0,
        left: event?.target.offsetLeft || 0,
      });
    }

    calculateStyles();

    window.addEventListener('resize', calculateStyles);
    return () => {
      window.removeEventListener('resize', calculateStyles);
    };
  }, [event]);

  return pointerStyles;
}
