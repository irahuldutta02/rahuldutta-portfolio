import { useCallback, useEffect, useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaSearch, FaTimes } from "react-icons/fa";
import { getFilterItems, getProjects } from "../data/data";
import { Nav } from "../NavBar/Nav";
import { ProjectCard } from "./components/ProjectCard";
import { ScrollUp } from "./components/ScrollUp";
import { Cinematic } from "../components/Cinematic";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";

export function Projects() {
  const [projects] = useState(getProjects());
  const [filterItem] = useState(getFilterItems());
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 12; // divisible by 1, 2, 3 and 4 grid columns: no half-empty last row
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
      <Seo
        title="Projects | Rahul Dutta"
        description="Web projects by Rahul Dutta, a full stack developer: React, Next.js, Node.js, Express, MongoDB and more. Filter by technology and open the live demo or source code."
        path="/projects"
      />
      <a className="skip-link" href="#main">Skip to content</a>
      <Cinematic />
      <ScrollUp />
      <Nav />

      <main className="main" id="main">

        <div className="container">
          <Reveal className="project-page-header">
            <span className="eyebrow">Archive</span>
            <h1>My Projects</h1>
          </Reveal>

          {/* <!-- Filter --> */}
          <div className="filters">
            <ul className="filter-items">
              <li>
                <button
                  type="button"
                  className={`filter-item ${
                    selectedFilter.length === 0 ? "active" : ""
                  }`}
                  aria-pressed={selectedFilter.length === 0}
                  onClick={() => handleFilterClick()}
                >
                  all
                </button>
              </li>
              {filterItem.map((item) => {
                const count = projects.filter((project) =>
                  project.filter.includes(item)
                ).length;

                return (
                  <li key={item}>
                    <button
                      type="button"
                      className={`filter-item ${
                        selectedFilter.includes(item) ? "active" : ""
                      }`}
                      aria-pressed={selectedFilter.includes(item)}
                      onClick={() => handleFilterClick(item)}
                    >
                      {item}
                      <span className="badge">{count}</span>
                    </button>
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
                aria-label="Search projects by title"
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
                  role="button"
                  aria-label="Clear search"
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: isSearchFocused ? "var(--c-accent-glow)" : "var(--c-text-faint)",
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
                    color: isSearchFocused ? "var(--c-accent-glow)" : "var(--c-text-faint)",
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
            <p style={{ color: filteredProjects.length <= 0 ? "var(--c-accent-glow)" : "var(--c-text-muted)" }}>
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
                  color: "var(--c-text-faint)",
                  width: "100%",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div style={{ fontSize: "4rem", opacity: 0.2 }}>🔍</div>
                <div style={{ fontSize: "1.3rem", color: "var(--c-text-muted)" }}>
                  No projects match your filters
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedFilter([]);
                    setSearch("");
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
