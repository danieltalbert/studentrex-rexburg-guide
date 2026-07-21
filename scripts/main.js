import { activities, filterActivities } from "./activities.js";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const activitiesGrid = document.getElementById("activities-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultsCount = document.querySelector(".results-count");

function toggleMenu() {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("show");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
}

function createCardHTML(activity) {
    return `
        <article class="activity-card">
            <img class="card-img" src="${activity.image}" alt="${activity.alt}" loading="lazy" width="600" height="400" />
            <div class="card-body">
                <h3>${activity.name}</h3>
                <span class="card-category">${activity.category}</span>
                <p>${activity.description}</p>
                <div class="card-details">
                    <span>Difficulty: ${activity.difficulty}</span>
                    <span>Cost: ${activity.cost}</span>
                </div>
                <a class="card-source" href="${activity.url}" target="_blank" rel="noreferrer">Check official details <span aria-hidden="true">↗</span></a>
            </div>
        </article>
    `;
}

function renderActivities(activityList) {
    if (!activitiesGrid) return;
    activitiesGrid.innerHTML = activityList.map(createCardHTML).join("");
    if (!resultsCount) return;
    resultsCount.textContent = activityList.length === 1
        ? "Showing 1 activity"
        : `Showing ${activityList.length} activities`;
}

function setActiveFilter(selectedFilter) {
    filterButtons.forEach(button => {
        button.classList.toggle("active", button.dataset.filter === selectedFilter);
    });
}

function handleFilterClick(event) {
    const selectedFilter = event.currentTarget.dataset.filter;
    setActiveFilter(selectedFilter);
    renderActivities(filterActivities(selectedFilter));
    localStorage.setItem("studentrex-filter", selectedFilter);
}

function init() {
    if (hamburger) hamburger.addEventListener("click", toggleMenu);
    filterButtons.forEach(button => button.addEventListener("click", handleFilterClick));

    if (activitiesGrid) {
        const savedFilter = localStorage.getItem("studentrex-filter");
        const validFilter = ["all", "hiking", "adventure", "nightlife", "chill"].includes(savedFilter)
            ? savedFilter
            : "all";
        setActiveFilter(validFilter);
        renderActivities(filterActivities(validFilter));
    }
}

init();
