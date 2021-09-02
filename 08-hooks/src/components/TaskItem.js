import React from "react";
import PropTypes from "prop-types";

const TaskItem = ({ task, onChangeStatus }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onChangeStatus(task.id)}
      />
      {task.text}
    </label>
  </li>
);

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default TaskItem;
