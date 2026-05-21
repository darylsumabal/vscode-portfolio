import { GitHubCalendar } from "react-github-calendar";

const GithubPage = () => {
  return (
    <div className="space-y-10">
      <h2>My Contributions</h2>
      <div className="space-y-10">
        <GitHubCalendar username="darylsumabal" year={2024} />
        <GitHubCalendar username="darylsumabal" year={2025} />
        <GitHubCalendar username="darylsumabal" year={2026} />
      </div>
    </div>
  );
};

export default GithubPage;
