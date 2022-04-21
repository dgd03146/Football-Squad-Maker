import styles from './position.module.css';

const Position = (props) => {
  return (
    <select
      className={styles.select}
      name="position"
      id="position"
      type="text"
      ref={props.positionRef}
      value={props.position}
    >
      <option value="CAM">CENTRE ATTACKING MIDFIELDER</option>
      <option value="CB">CENTRE BACK</option>
      <option value="CDM">CENTRE DEFENSIVE MIDFIELDER</option>
      <option value="CF">CENTRE FORWARD</option>
      <option value="CM">CENTRE MIDFIELDER</option>
      <option value="GK">GOALKEEPER</option>
      <option value="LB">LEFT BACK</option>
      <option value="LF">LEFT FORWARD</option>
      <option value="LM">LEFT MIDFIELDER</option>
      <option value="LW">LEFT WING</option>
      <option value="LWB">LEFT WING BACK</option>
      <option value="RB">RIGHT BACK</option>
      <option value="RF">RIGHT FORWARD</option>
      <option value="RM">RIGHT MIDFIELDER</option>
      <option value="RW">RIGHT WING</option>
      <option value="RWB">RIGHT WING BACK</option>
      <option value="ST">STRIKER</option>
    </select>
  );
};

export default Position;
