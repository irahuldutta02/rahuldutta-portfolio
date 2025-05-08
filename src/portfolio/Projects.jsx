import { useContext, useEffect, useState, useMemo, useCallback } from "react";
import { ThemeContext } from "../context/context";
import { getFilterItems, getProjects } from "../data/data";
import { Nav } from "../NavBar/Nav";
import { ThemeToggler } from "../theme/ThemeToggler";
import { ProjectCard } from "./components/ProjectCard";
import { ScrollUp } from "./components/ScrollUp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function Projects() {
  const [projects] = useState(getProjects());
  const [filterItem] = useState(getFilterItems());
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  // Use useMemo to avoid recalculating filtered projects on every render
  const flitteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const titleMatches = project.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      if (selectedFilter.length === 0) {
        return titleMatches;
      }

      return (
        titleMatches &&
        selectedFilter.every((filter) => project.filter.includes(filter))
      );
    });

    // Sort by featured
    return filtered.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [projects, search, selectedFilter]);

  useEffect(() => {
    document.title = "Rahul-Dutta/projects";
    const root = document.querySelector(":root");
    root.style.setProperty("--theme-toggler-bg-color-1", theme);
    root.style.setProperty("--page-color-1", theme);
  }, [theme]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedFilter]);

  const handleFilterClick = useCallback((item) => {
    setSearch("");
    if (item === undefined) {
      setSelectedFilter([]);
      return;
    }

    setSelectedFilter((prev) =>
      prev.includes(item)
        ? prev.filter((filter) => filter !== item)
        : [...prev, item]
    );
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "instant",
      });
    }, 1);
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(flitteredProjects.length / rowsPerPage),
    [flitteredProjects.length, rowsPerPage]
  );

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return flitteredProjects.slice(start, end);
  }, [flitteredProjects, currentPage, rowsPerPage]);

  return (
    <>
      <ScrollUp />
      <Nav />
      <ThemeToggler />

      <main className="main">
        <div className="container">
          <div className="project-page-header">
            <h1>My Projects</h1>
          </div>

          {/* <!-- Filter --> */}
          <div className="filters">
            <ul className="filter-items">
              <li
                className={`filter-item ${
                  selectedFilter.length === 0 ? "active" : ""
                }`}
                onClick={() => handleFilterClick()}
              >
                all
              </li>
              {filterItem.map((item) => {
                const count = projects.filter((project) =>
                  project.filter.includes(item)
                ).length;

                return (
                  <li
                    key={item}
                    className={`filter-item ${
                      selectedFilter.includes(item) ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick(item)}
                  >
                    {item}
                    <span className="badge">{count}</span>
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
                className="search-projects"
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
              style={{ color: flitteredProjects.length <= 0 ? "red" : "black" }}
            >
              <span className="project__count">
                {flitteredProjects.length <= 0
                  ? "No Projects Found"
                  : `${flitteredProjects.length} projects `}
                {selectedFilter.length > 0 && "using "}
              </span>
              <span className="filter__message">
                {selectedFilter.length > 0 && selectedFilter.join(", ")}
              </span>
            </p>
          </div>

          {/* Projects */}
          <div className="projects">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-container">
            {totalPages > 1 && (
              <>
                <button
                  onClick={() => {
                    scrollToBottom();
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                  }}
                  className={`pagination-button ${
                    currentPage <= 1 && "disabled"
                  }`}
                  disabled={currentPage <= 1}
                >
                  <FaAngleLeft size={25} />
                </button>
                <span className="pagination-text">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => {
                    scrollToBottom();
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }}
                  className={`pagination-button ${
                    currentPage >= totalPages && "disabled"
                  }`}
                  disabled={currentPage >= totalPages}
                >
                  <FaAngleRight size={25} />
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
