import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaSearch, FaTimes } from "react-icons/fa";
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

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Use useMemo to avoid recalculating filtered projects on every render
  const filteredProjects = useMemo(() => {
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

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const clearSearch = useCallback(() => {
    setSearch("");
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(filteredProjects.length / rowsPerPage),
    [filteredProjects.length, rowsPerPage]
  );

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredProjects.slice(start, end);
  }, [filteredProjects, currentPage, rowsPerPage]);

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
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onChange={(e) => {
                  setSelectedFilter([]);
                  setSearch(e.target.value);
                }}
                style={{
                  paddingRight: search ? "2.5rem" : "1rem",
                }}
              />
              {search && (
                <FaTimes
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: isSearchFocused ? "white" : "#666",
                    zIndex: 2,
                    fontSize: "1rem",
                  }}
                  onClick={clearSearch}
                />
              )}
              {!search && (
                <FaSearch
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: isSearchFocused ? "white" : "#666",
                    opacity: 0.7,
                    zIndex: 2,
                    fontSize: "1rem",
                  }}
                />
              )}
            </div>
          </div>

          {/* <!-- Project Count --> */}
          <div className="project__count__div">
            <p style={{ color: filteredProjects.length <= 0 ? "red" : "#333" }}>
              <span className="project__count">
                {filteredProjects.length <= 0
                  ? "No Projects Found"
                  : `${filteredProjects.length} projects `}
                {selectedFilter.length > 0 && "using "}
              </span>
              <span className="filter__message">
                {selectedFilter.length > 0 && (
                  <>
                    {selectedFilter.map((filter, index) => (
                      <span key={filter} style={{ position: "relative" }}>
                        {filter}
                        {index < selectedFilter.length - 1 && ", "}
                      </span>
                    ))}
                  </>
                )}
              </span>
            </p>
          </div>

          {/* Projects */}
          <div
            className={`projects ${
              filteredProjects.length === 0 ? "no-projects" : ""
            }`}
          >
            {filteredProjects.length === 0 ? (
              <div
                style={{
                  padding: "3rem",
                  textAlign: "center",
                  color: "#666",
                  width: "100%",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div style={{ fontSize: "5rem", opacity: 0.3 }}>🔍</div>
                <div style={{ fontSize: "1.5rem" }}>
                  No projects match your filters
                </div>
                <button
                  onClick={() => {
                    setSelectedFilter([]);
                    setSearch("");
                  }}
                  style={{
                    background: "var(--page-color-1)",
                    color: "white",
                    border: "none",
                    padding: "0.7rem 1.5rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "3px 3px 5px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaTimes /> Clear Filters
                </button>
              </div>
            ) : (
              paginatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>

          {/* Pagination */}
          {filteredProjects.length > 0 && totalPages > 1 && (
            <div className="pagination-container">
              <button
                onClick={() => {
                  scrollToTop();
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
                className={`pagination-button ${
                  currentPage <= 1 ? "disabled" : ""
                }`}
                disabled={currentPage <= 1}
                aria-label="Previous page"
              >
                <FaAngleLeft size={25} />
              </button>
              <span className="pagination-text">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => {
                  scrollToTop();
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                }}
                className={`pagination-button ${
                  currentPage >= totalPages ? "disabled" : ""
                }`}
                disabled={currentPage >= totalPages}
                aria-label="Next page"
              >
                <FaAngleRight size={25} />
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
