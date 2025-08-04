import React from "react";
import PropTypes from "prop-types";
import { ReferenceLine } from "recharts";

const EventMarkers = ({ events }) => {
  return (
    <>
      {events.map((event, index) => (
        <ReferenceLine
          key={index}
          x={event.date}
          stroke="#e11d48"
          strokeDasharray="3 3"
          label={{
            value: event.label,
            position: "insideTop",
            angle: -90,
            fill: "#e11d48",
            fontSize: 14, // Make the text bigger
            fontWeight: "bold",
          }}
        />
      ))}
    </>
  );
};

EventMarkers.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventMarkers;
