import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/context";
import { getFilterItems, getProjects } from "../data/data";
import { Nav } from "../NavBar/Nav";
import { ThemeToggler } from "../theme/ThemeToggler";
import { ProjectCard } from "./components/ProjectCard";
import { ScrollUp } from "./components/ScrollUp";

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

  // featured at first of the projects array
  flitteredProjects.sort((a, b) => {
    if (a.isFeatured) {
      return -1;
    }
    if (b.isFeatured) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    document.title = "Rahul-Dutta/projects";
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    document
      .querySelector(":root")
      .style.setProperty("--theme-toggler-bg-color-1", theme);
    document.querySelector(":root").style.setProperty("--page-color-1", theme);
  }, [theme]);

  return (
    <>
      <ScrollUp />
      <Nav />
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
              {filterItem.map((item) => {
                let count = 0;
                projects.forEach((project) => {
                  if (project.filter.includes(item)) {
                    count++;
                  }
                });
                return (
                  <li
                    key={crypto.randomUUID()}
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
            {flitteredProjects.map((project) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}