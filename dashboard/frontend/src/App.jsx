import { useEffect, useState } from "react";
import PriceChart from "./components/PriceChart";

const App = () => {
  const [priceData, setPriceData] = useState([]);
  const [events, setEvents] = useState([]);

  // Fetch data from Flask API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPrices = await fetch("http://localhost:5000/api/data");
        const resEvents = await fetch("http://localhost:5000/api/events");

        const pricesJson = await resPrices.json();
        const eventsJson = await resEvents.json();

        console.log("Fetched prices:", pricesJson);
        console.log("Fetched events:", eventsJson);

        setPriceData(pricesJson);
        setEvents(eventsJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6 drop-shadow-md">
          📈 Brent Oil Price Dashboard
        </h1>
        <p className="max-w-xl mx-auto text-center text-gray-600 text-lg mb-12">
          Track historical price trends and major events
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <PriceChart data={priceData} />
        </div>

        <section className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">
            📰 Key Events
          </h2>
          {events.length > 0 ? (
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              {events.map((event, idx) => (
                <li key={idx} className="leading-relaxed">
                  <strong className="text-gray-900">{event.date}:</strong> {event.label}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 italic">No events available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
