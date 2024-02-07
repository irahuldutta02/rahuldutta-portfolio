import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/context";
import { getFilterItems, getProjects } from "../data/data";
import { ThemeToggler } from "../theme/ThemeToggler";
import { NavBar } from "./components/NavBar";
import { ProjectCard } from "./components/ProjectCard";
import "./projects.css";

export function Projects() {
  const [projects] = useState(getProjects());
  const [filterItem] = useState(getFilterItems());
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const flitteredProjects = projects.filter((project) => {
    if (
      project.title.toLowerCase().includes(search.toLowerCase()) &&
      selectedFilter.length === 0
    ) {
      return true;
    }

    if (
      project.title.toLowerCase().includes(search.toLowerCase()) &&
      selectedFilter.length > 0
    ) {
      // return those projects which have all the selected filters and whose title includes the search string
      return (
        selectedFilter.every((filter) => project.filter.includes(filter)) &&
        project.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  useEffect(() => {
    document.title = "Rahul-Dutta/projects";
    window.scrollTo(0, 0);
    document
      .querySelector(":root")
      .style.setProperty("--project-page-color-1", theme);
  });

  return (
    <>
      <NavBar />
      <ThemeToggler />

      <main className="main">
        <div className="container">
          {/* <!-- Filter --> */}
          <div className="filters">
            <ul className="filter-items">
              <li
                className={`filter-item ${
                  selectedFilter.length === 0 ? "active" : ""
                }`}
                onClick={() => {
                  setSearch("");
                  setSelectedFilter([]);
                }}
              >
                all
              </li>
              {filterItem.map((item, idx) => {
                let count = 0;
                projects.forEach((project) => {
                  if (project.filter.includes(item)) {
                    count++;
                  }
                });
                return (
                  <li
                    key={idx}
                    className={`filter-item ${
                      selectedFilter.includes(item) ? "active" : ""
                    }`}
                    onClick={() => {
                      setSearch("");
                      if (selectedFilter.includes(item)) {
                        setSelectedFilter(
                          selectedFilter.filter((filter) => filter !== item)
                        );
                      } else {
                        setSelectedFilter([...selectedFilter, item]);
                      }
                    }}
                  >
                    {item}
                    <span className="badge">{count}</span>
                    {item === filterItem[0] && (
                      <span className="badge-new">New</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <!-- Search --> */}
          <div className="search__project__item">
            <div className="search">
              <input
                type="text"
                autoComplete="off"
                name="search__project"
                id="search__project"
                placeholder="search project using project title..."
                value={search}
                onChange={(e) => {
                  setSelectedFilter([]);
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>

          {/* <!-- Project Count --> */}
          <div className="project__count__div">
            <p
              style={{
                color: flitteredProjects.length <= 0 ? "red" : "black",
              }}
            >
              <span className="project__count">
                {flitteredProjects.length <= 0 && "No Projects Found"}
                {flitteredProjects.length > 0 &&
                  `${flitteredProjects.length} projects found`}{" "}
                {selectedFilter.length > 0 && `using `}
              </span>
              <span className="filter__message">
                {selectedFilter.length > 0 && `${selectedFilter.join(", ")}`}
              </span>
            </p>
          </div>

          {/* <!-- Projects --> */}
          <div className="projects">
            {flitteredProjects.map((project, idx) => {
              return <ProjectCard key={idx} project={project} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
