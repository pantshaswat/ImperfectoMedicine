'use client';
import { useState } from 'react';
import { Year } from '@/types';

interface SearchFormProps {
  years: Year[];
  onSearch: (results: Year[]) => void;
}

export default function SearchForm({ years, onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const searchQuery = query.toLowerCase();
    
    if (!searchQuery.trim()) {
      onSearch(years);
      return;
    }

    const results = years.map(year => ({
      ...year,
      subjects: year.subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchQuery) ||
        subject.topics.some(topic =>
          topic.title.toLowerCase().includes(searchQuery) ||
          topic.description?.toLowerCase().includes(searchQuery)
        )
      )
    })).filter(year => year.subjects.length > 0);

    onSearch(results);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (!e.target.value.trim()) {
      onSearch(years); // Reset to show all results when search is cleared
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search topics, subjects, or notes..."
        className="w-full px-4 py-3 pl-12 rounded-lg bg-white/20 
                 text-white placeholder-white/70 border border-white/30"
      />
      <button 
        type="submit" 
        className="absolute right-4 top-3.5 text-white hover:text-blue-100"
      >
        Search
      </button>
    </form>
  );
}