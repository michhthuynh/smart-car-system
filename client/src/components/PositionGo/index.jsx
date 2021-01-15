import React from 'react';
import PropTypes from 'prop-types';
import 'react-step-progress/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faCheck } from "@fortawesome/free-solid-svg-icons";
import './style.scss'

PositionGo.propTypes = {
  now: PropTypes.number
};

PositionGo.defaultProps = {
  now: 0
}

function PositionGo(props) {
  const { now } = props
  let temp = now
  if (now < 6) {
    temp = now + 1
  }
  if (now > 100 / 3) {
    temp = now - 2
  }
  if (now == 100) {
    temp = now - 3
  }
  return (
    <div className="go-progress-wrapper">
      <div className="anchors">
        <div className={now >= 0 ? "anchor active" : 'anchor'}>A</div>
        <div className={now >= (100 / 3) ? "anchor active" : 'anchor'} >
          {now >= (100 / 3) ? <FontAwesomeIcon icon={faCheck} /> : 'B'}
        </div>
        <div className={now >= (200 / 3) ? "anchor active" : 'anchor'}>
          {now >= (200 / 3) ? <FontAwesomeIcon icon={faCheck} /> : 'C'}
        </div>
        <div className={now >= 100 ? "anchor active" : 'anchor'}>D</div>
      </div>
      <div className="line"></div>
      <div className="line-progress" style={{ width: `${now}%` }}></div>
      <div className="car" style={{ left: `${temp}%` }}>
        <FontAwesomeIcon icon={faBus} />
      </div>
    </div>
  );
}

export default PositionGo;