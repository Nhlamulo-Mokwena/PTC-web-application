import React from "react";
import Card from "../components/Card";
import NewsLetter from "../components/NewsLetter";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const res = await axios.get("http://localhost:8081/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setEvents(res.data);
      } catch (error) {
        console.log("failed fetching events!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-light-blue p-5">
      <div>
        <h1 className="text-deep-green font-semibold text-center text-2xl mb-10">
          Upcoming Events & Important Dates
        </h1>
        <div>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <div className="grid gap-5 lg:grid-cols-3 mb-5">
              {events.map((e) => (
                <div>
                  <Card border_colour={"earthy-red"}>
                    <h1 className="text-deep-green font-medium text-[19px] mb-2">
                      {e.title}
                    </h1>
                    <p className="text-gold-yellow font-medium mb-2">
                      {e.date}
                    </p>
                    <p>{e.description.substring(0,100) + '...'}</p>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default EventsPage;
