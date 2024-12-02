import React, { useEffect, useState } from "react";
import "./index.css";
import Pagination from "./Pagination";

const API_URL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('data values', data);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + rowsPerPage);

  console.log('pagination', currentProjects);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  console.log("Projects State:", projects);

  return (
    <div className="app-container">
      <h2 className="app-title">Frontend Assignment</h2>
      <table className="project-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects?.map(function (project, index) {
            console.log(project, '1111', project.percentage_funded)
            return (<tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td>{project["percentage.funded"]}</td>
              <td>{project["amt.pledged"]}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
        totalRecords={projects.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
