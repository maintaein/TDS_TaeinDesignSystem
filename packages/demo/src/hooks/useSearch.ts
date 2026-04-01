import { useState, useMemo, useCallback } from 'react';
import { searchIndex, type SearchEntry } from '../data/searchIndex';

export interface SearchResultSection {
  title: string;
  content: string;
  matchType: 'title' | 'content';
}

export interface SearchResult {
  entry: SearchEntry;
  matchedSections: SearchResultSection[];
  score: number;
}

function normalizeQuery(query: string): string {
  return query.toLowerCase().trim();
}

function matchesTerm(text: string, term: string): boolean {
  return text.toLowerCase().includes(term);
}

function calculateScore(
  entry: SearchEntry,
  term: string,
): { score: number; matchedSections: SearchResultSection[] } {
  let score = 0;
  const matchedSections: SearchResultSection[] = [];
  const lowerTerm = normalizeQuery(term);

  if (!lowerTerm) return { score: 0, matchedSections: [] };

  // 1순위: 페이지 제목 일치 (가장 높은 점수)
  if (matchesTerm(entry.pageTitle, lowerTerm)) {
    score += 100;
  }

  // 2순위: 페이지 설명 일치
  if (matchesTerm(entry.description, lowerTerm)) {
    score += 50;
  }

  // 3순위: 섹션 제목/내용 일치
  for (const section of entry.sections) {
    const titleMatch = matchesTerm(section.title, lowerTerm);
    const contentMatch = matchesTerm(section.content, lowerTerm);

    if (titleMatch) {
      score += 30;
      matchedSections.push({
        title: section.title,
        content: section.content,
        matchType: 'title',
      });
    } else if (contentMatch) {
      score += 10;
      matchedSections.push({
        title: section.title,
        content: section.content,
        matchType: 'content',
      });
    }
  }

  // 페이지 제목 완전 일치 보너스
  if (entry.pageTitle.toLowerCase() === lowerTerm) {
    score += 200;
  }

  return { score, matchedSections };
}

export function useSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo<SearchResult[]>(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];

    const scored: SearchResult[] = [];

    for (const entry of searchIndex) {
      const { score, matchedSections } = calculateScore(entry, trimmed);
      if (score > 0) {
        scored.push({ entry, matchedSections, score });
      }
    }

    // 점수 내림차순 정렬
    scored.sort((a, b) => b.score - a.score);

    return scored;
  }, [query]);

  // 카테고리별 그룹핑
  const groupedResults = useMemo(() => {
    const groups = new Map<string, SearchResult[]>();

    for (const result of results) {
      const category = result.entry.category;
      const existing = groups.get(category);
      if (existing) {
        existing.push(result);
      } else {
        groups.set(category, [result]);
      }
    }

    return groups;
  }, [results]);

  const reset = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    setQuery,
    results,
    groupedResults,
    reset,
    hasResults: results.length > 0,
  };
}
