'use client';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import SearchForm from '@/components/SearchForm';
import { client, queries } from '@/sanity/lib/client';
import { Year } from '@/types';
import Link from 'next/link';  
export default function Home() {
  const [years, setYears] = useState<Year[]>([]);
  const [filteredYears, setFilteredYears] = useState<Year[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openTopicId, setOpenTopicId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(queries.getAllYears);
        if (Array.isArray(result)) {
          result.reverse();
        }
        setYears(result);
        setFilteredYears(result);
        setLoading(false);
      } catch (err) {
        setError('Failed to load content');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  const handleSearchResults = (results: Year[]) => {
    setFilteredYears(results);
  };

  const toggleDropdown = (topicId: string) => {
    setOpenTopicId(openTopicId === topicId ? null : topicId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Imperfecto Medicine!</h1>
          <p className="text-xl mb-8">Share and access high-quality medical study notes</p>
          <SearchForm years={years} onSearch={handleSearchResults} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>
                {years.reduce(
                  (acc, year) =>
                    acc +
                    year.subjects.reduce(
                      (subAcc, subject) =>
                        subAcc +
                        subject.topics.reduce(
                          (topicAcc, topic) => topicAcc + topic.posts.length,
                          0
                        ),
                      0
                    ),
                  0
                )}
                +
              </CardTitle>
              <CardDescription>Study Notes</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                {years.reduce(
                  (acc, year) =>
                    acc +
                    year.subjects.reduce(
                      (subAcc, subject) => subAcc + subject.topics.length,
                      0
                    ),
                  0
                )}
                +
              </CardTitle>
              <CardDescription>Topics Covered</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                {new Set(
                  years.flatMap((year) =>
                    year.subjects.flatMap((subject) =>
                      subject.topics.flatMap((topic) =>
                        topic.posts.map((post) => post.author.name)
                      )
                    )
                  )
                ).size}
                +
              </CardTitle>
              <CardDescription>Contributors</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Topics Section */}
        <h2 className="text-2xl font-bold mb-6">MBBS Study Materials</h2>
        <div className="space-y-8">
          {filteredYears.map((year) => (
            <div key={year._id} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">{year.name}</h3>
              {year.description && (
                <p className="text-gray-600">{year.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {year.subjects.map((subject) => (
                  <Card key={subject._id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                      {subject.description && (
                        <CardDescription>{subject.description}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {subject.topics.map((topic) => (
                          <li key={topic._id} className="space-y-2">
                            <button
                              className="text-blue-600 font-semibold hover:underline focus:outline-none"
                              onClick={() => toggleDropdown(topic._id)}
                            >
                              {topic.title}
                            </button>
                            {openTopicId === topic._id && (
                              <ul className="pl-4">
                                {topic.posts.map((post) => (
                                  <li
                                    key={post._id}
                                    
                                  >
                                   <Link 
      href={`/${post.slug.current}`}
      className="text-gray-600 hover:text-blue-600"
    >
      • {post.title}
    </Link> 
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}