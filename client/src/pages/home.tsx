import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Rocket, Users, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchGitHubProfile } from "@/lib/github";
import { siteSettings } from "@shared/settings";

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
}

export default function HomePage() {
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHub = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchGitHubProfile(siteSettings.github.username);
      setGithubData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load GitHub profile");
      console.error("GitHub API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHub();
  }, []);

  const teamMembers = siteSettings.team;

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {" "}Future{" "}
              </span>
              <br />of Web
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of developers creating innovative web solutions that drive business growth and user engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/projects">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Rocket className="mr-2 h-5 w-5" />
                  View Our Work
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  <Users className="mr-2 h-5 w-5" />
                  Meet the Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Profile Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">GitHub Profile</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with our development journey and explore our open-source contributions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-50 border border-slate-200 shadow-lg">
              <CardContent className="p-8">
                {loading && (
                  <div className="text-center py-12">
                    <div className="flex items-center justify-center mb-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                      <span className="ml-3 text-blue-500 font-semibold">Loading GitHub profile...</span>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="text-center py-12">
                    <div className="text-red-500 mb-4">
                      <ExternalLink className="h-12 w-12 mx-auto mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Unable to load GitHub profile</h3>
                    <p className="text-slate-600 mb-4">{error}</p>
                    <Button onClick={fetchGitHub} className="bg-blue-500 hover:bg-blue-600">
                      <Rocket className="mr-2 h-4 w-4" />
                      Retry
                    </Button>
                  </div>
                )}

                {githubData && !loading && (
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={githubData.avatar_url}
                        alt="GitHub Avatar"
                        className="w-32 h-32 rounded-full shadow-lg border-4 border-white"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {githubData.name || githubData.login}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {githubData.bio || "No bio available"}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                        {githubData.location && (
                          <div className="flex items-center text-slate-700">
                            <MapPin className="mr-2 h-4 w-4 text-slate-500" />
                            <span>{githubData.location}</span>
                          </div>
                        )}
                        <div className="flex items-center text-slate-700">
                          <Calendar className="mr-2 h-4 w-4 text-slate-500" />
                          <span>Joined {new Date(githubData.created_at).getFullYear()}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-blue-500">{githubData.public_repos}</div>
                          <div className="text-sm text-slate-600">Repositories</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-emerald-500">{githubData.followers}</div>
                          <div className="text-sm text-slate-600">Followers</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-purple-500">{githubData.following}</div>
                          <div className="text-sm text-slate-600">Following</div>
                        </div>
                      </div>
                      <a
                        href={githubData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Preview Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Talented developers, designers, and innovators working together to create exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/about">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 font-semibold">
                <Users className="mr-2 h-5 w-5" />
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
