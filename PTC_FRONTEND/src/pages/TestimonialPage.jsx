import React from "react";
import Card from "../components/Card";
import NewsLetter from "../components/NewsLetter";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        const res = await axios.get("http://localhost:8081/api/testimonials", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setTestimonials(res.data);
      } catch (error) {
        console.log("failed fetching testimonials!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-light-blue p-5">
      <div>
        <h1 className="text-deep-green font-semibold text-2xl text-center mb-19">
          What Our Students & Partners Say
        </h1>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <div>
            <div className="grid gap-5 lg:grid-cols-3 mb-5">
              {testimonials.map((t) => (
                <Card
                  border_colour={"gold-yellow"}
                  styles={"transform ease-in hover:translate-y-[-5px]"}
                >
                  <p className="mb-4">
                    <q>
                      {t.message}
                    </q>
                  </p>
                  <h3 className="text-deep-green font-medium">{t.name}</h3>
                  <p className="text-gray-400">{t.position}</p>
                </Card>
              ))}
              {/* <Card
                border_colour={"gold-yellow"}
                styles={"transform ease-in hover:translate-y-[-5px]"}
              >
                <p className="mb-4">
                  <q>
                    As a lecturer, I’ve seen students transformed through these
                    accredited programs. Proud to be part of Pulakgadi.
                  </q>
                </p>
                <h3 className="text-deep-green font-medium">Mr. Dlamini</h3>
                <p className="text-gray-400">Facilitator - Computer Studies</p>
              </Card> */}
            </div>
          </div>
        )}
      </div>
      <NewsLetter />
    </div>
  );
};

export default TestimonialPage;
