import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import EventMarkers from "./EventMarkers";

const PriceChart = ({ data }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((fetchedEvents) => setEvents(fetchedEvents))
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

  const normalizedData = data.map((item) => {
    const dateObj = new Date(item.Date);
    const normalizedDate = !isNaN(dateObj)
      ? dateObj.toISOString().slice(0, 10)
      : item.Date;

    return {
      ...item,
      Date: normalizedDate,
    };
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">📈 Brent Oil Price Over Time</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={normalizedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" tick={{ fontSize: 10 }} />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <EventMarkers events={events} />
          <Line type="monotone" dataKey="Price" stroke="#1d4ed8" dot={false} name="Price" />
          <Line type="monotone" dataKey="MA_30" stroke="#ff7300" dot={false} name="30-day Moving Avg" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

PriceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      Price: PropTypes.number.isRequired,
      MA_30: PropTypes.number,
    })
  ).isRequired,
};

export default PriceChart;
