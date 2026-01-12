import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaCalendar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const ApplicantCard = ({ application }) => {
  const [viewInfoStatus, setViewInfoStatus] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewType, setPreviewType] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const changeViewInfoStatusFun = () => {
    setViewInfoStatus(!viewInfoStatus);
  };

  const date = application.applicationDate.substring(0,10)
  const time = application.applicationDate.substring(11,16);
  const timeNum = application.applicationDate.substring(11,13);

  const timeFormat = () => {
    if(timeNum < 12)
      return 'AM'
    else
      return 'PM'
  }

  const getAuthHeaders = () => {
    const token = localStorage.getItem("jwtToken");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const downloadDocument = async (docType) => {
    try {
      const endpoint = docType === "id" ? "id-document" : "results-document";
      const response = await axios.get(
        `http://localhost:8081/api/application/${application.id}/${endpoint}`,
        {
          ...getAuthHeaders(),
          responseType: "blob",
        }
      );

      // Get the content type from response
      const contentType = response.headers["content-type"];
      
      // Get filename from Content-Disposition header or use default
      const contentDisposition = response.headers["content-disposition"];
      let filename;
      
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1].replace(/['"]/g, '');
        }
      }
      
      // If no filename from header, construct one based on content type
      if (!filename) {
        const extension = contentType?.includes("pdf") ? "pdf" : 
                         contentType?.includes("image") ? "jpg" : "file";
        filename = docType === "id" 
          ? (application.idFileName || `id-document.${extension}`)
          : (application.resultsFileName || `results-document.${extension}`);
      }

      // Create blob with correct content type
      const blob = new Blob([response.data], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Document downloaded successfully!");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download document");
    }
  };

  const previewDocument = async (docType) => {
    try {
      const endpoint = docType === "id" ? "id-document" : "results-document";
      const response = await axios.get(
        `http://localhost:8081/api/application/${application.id}/${endpoint}/preview`,
        {
          ...getAuthHeaders(),
          responseType: "blob",
        }
      );

      const contentType = response.headers["content-type"];
      const blob = new Blob([response.data], { type: contentType });
      const url = window.URL.createObjectURL(blob);

      setPreviewUrl(url);
      setPreviewType(contentType);
      setIsPreviewOpen(true);

      toast.success("Document loaded!");
    } catch (error) {
      console.error("Preview error:", error);
      toast.error("Failed to load document preview");
    }
  };

  const closePreview = () => {
    if (previewUrl) {
      window.URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setPreviewType(null);
    setIsPreviewOpen(false);
  };

  return (
    <>
      <div className="bg-white p-5 shadow rounded-2xl">
        <p className="text-[18px] font-semibold mb-3">
          {application.applicantNames}
        </p>
        <div className="flex items-center space-x-2 mb-3">
          <FaCalendar color="gray" />
          <p>{date}, {time} {timeFormat()}</p>
        </div>
        <button
          onClick={changeViewInfoStatusFun}
          className="bg-blue-500 p-2 rounded-lg text-white hover:cursor-pointer hover:bg-blue-600 mb-4"
        >
          {viewInfoStatus ? <p>Hide Details</p> : <p>View Details</p>}
        </button>

        {viewInfoStatus && (
          <>
            <div className="flex flex-col space-y-3">
              <div>
                <div className="flex text-gray-400 items-center space-x-2">
                  <FaMessage />
                  <p>Email</p>
                </div>
                <p className="pl-6">{application.email}</p>
              </div>
              <div>
                <div className="flex text-gray-400 items-center space-x-2">
                  <FaPhone />
                  <p>Contact</p>
                </div>
                <p className="pl-6">{application.contact}</p>
              </div>
              <div>
                <div className="flex text-gray-400 items-center space-x-2">
                  <FaBook />
                  <p>Course</p>
                </div>
                <p className="pl-6">{application.course}</p>
              </div>
              <div>
                <div className="flex text-gray-400 items-center space-x-2">
                  <FaSchool />
                  <p>Institution</p>
                </div>
                <p className="pl-6">Pulakgadi College</p>
              </div>
            </div>
            <div className="border border-gray-300 mt-7 mb-7"></div>
            <div className="grid grid-cols-1 gap-5 md:flex md:justify-between md:items-center">
              <button
                className="border flex items-center space-x-2 border-gray-400 p-2 rounded-lg hover:bg-gray-50"
                onClick={() => previewDocument("id")}
              >
                <FaEye />
                <p>Preview ID</p>
              </button>
              <button
                className="border flex items-center space-x-2 border-gray-400 p-2 rounded-lg hover:bg-gray-50"
                onClick={() => downloadDocument("id")}
              >
                <FaDownload />
                <p>Download ID</p>
              </button>
              <button
                className="border flex items-center space-x-2 border-gray-400 p-2 rounded-lg hover:bg-gray-50"
                onClick={() => previewDocument("results")}
              >
                <FaEye />
                <p>Preview Results</p>
              </button>
              <button
                className="border flex items-center space-x-2 border-gray-400 p-2 rounded-lg hover:bg-gray-50"
                onClick={() => downloadDocument("results")}
              >
                <FaDownload />
                <p>Download Results</p>
              </button>
            </div>
            <div className="border border-gray-300 mt-7 mb-7"></div>
            <h2 className="text-[19px] font-semibold">Additional Information</h2>
            <div className="bg-gray-100 shadow rounded-lg p-5 mt-8">
              <div className="mb-4">
                <h2 className="text-gray-400">Highest qualification</h2>
                <p>{application.highestQualification}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-gray-400">Application ID</h2>
                <p>{application.id}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-gray-400">ID Document</h2>
                <p>{application.idFileName}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-gray-400">Results Document</h2>
                <p>{application.resultsFileName}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Document Preview</h3>
              <button
                onClick={closePreview}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {previewType?.includes("pdf") ? (
                <iframe
                  src={previewUrl}
                  className="w-full h-full min-h-[600px]"
                  title="Document Preview"
                />
              ) : previewType?.includes("image") ? (
                <img
                  src={previewUrl}
                  alt="Document Preview"
                  className="max-w-full h-auto mx-auto"
                />
              ) : (
                <p className="text-center text-gray-500">
                  Preview not available for this file type
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicantCard;