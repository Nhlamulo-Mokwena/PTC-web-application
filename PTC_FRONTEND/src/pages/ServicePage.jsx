import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";

const ServicePage = () => {
  return (
    <div className="bg-light-blue p-5">
      <div>
        <h1 className="text-2xl text-center font-semibold mt-5 mb-9">
          Corporate & Consulting Services
        </h1>
        <div className="grid gap-5 lg:grid-cols-4">
          <Card border_colour={'earthy-red'}>
            <h1 className="text-[19px] font-medium mb-3">
              Accredited Workplace Training
            </h1>
            <p>
              We deliver SETA-accredited training tailored to business
              environments. Our facilitators travel to your site or host your
              staff at our Welkom campus.
            </p>
          </Card>
          <Card border_colour={'earthy-red'}>
            <h1 className="text-[19px] font-medium mb-3">
              Skills Development Consulting
            </h1>
            <p>
              We help companies and government departments develop and execute
              effective skills plans in line with sectoral requirements.
            </p>
          </Card>
          <Card border_colour={'earthy-red'}>
            <h1 className="text-[19px] font-medium mb-3">
              Workplace Assessments
            </h1>
            <p>
              Our registered assessors conduct workplace assessments and provide
              reports for compliance, improvement and certification purposes.
            </p>
          </Card>
          <Card border_colour={'earthy-red'}>
            <h1 className="text-[19px] font-medium mb-3">
              Custom Program Design
            </h1>
            <p>
              Have a specific staff development need? We co-create courses or
              short learning programs customized to your goals and industry.
            </p>
          </Card>
          <Card border_colour={'earthy-red'}>
            <h1 className="text-[19px] font-medium mb-3">
              Compliance & Accreditation
            </h1>
            <p>
              We assist businesses with meeting compliance for skills audits,
              training records, and SETA documentation.
            </p>
          </Card>
        </div>
        <div className="mt-7 mb-7 flex flex-col justify-center items-center text-center
        space-y-5">
          <p className="text-[16px] font-medium">
            Interested in partnering with us for staff training or consulting?
          </p>
          <Link
            to={'/contact'}
            className="bg-gold-yellow p-2 shadow rounded-2xl w-70 hover:cursor-pointer"
          >
            Get in Touch
          </Link>
        </div>
        <NewsLetter/>
      </div>
    </div>
  );
};

export default ServicePage;
