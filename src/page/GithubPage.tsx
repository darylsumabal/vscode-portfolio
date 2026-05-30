import { GitHubCalendar } from "react-github-calendar";

const GithubPage = () => {
  return (
    <div className="space-y-10">
      <div className="underline flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-link-icon lucide-link underline"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>{" "}
        <a href="https://github.com/darylsumabal">MY GITHUB</a>
      </div>
      <div className="space-y-4">
        <h2>My Contributions</h2>
        <div className="space-y-10">
          <GitHubCalendar username="darylsumabal" year={2024} />
          <GitHubCalendar username="darylsumabal" year={2025} />
          <GitHubCalendar username="darylsumabal" year={2026} />
        </div>
      </div>
    </div>
  );
};

export default GithubPage;
