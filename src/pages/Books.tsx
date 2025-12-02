import { useState, useMemo } from 'react';
import { Book } from '../types';
import { ArrowRight, Filter } from 'lucide-react';

interface BooksProps {
  books: Book[];
}

export default function Books({ books }: BooksProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const availableBooks = books.filter((book) => book.available);

  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    availableBooks.forEach((book) => {
      book.genre.forEach((g) => genres.add(g));
    });
    return Array.from(genres).sort();
  }, [availableBooks]);

  const filteredBooks = useMemo(() => {
    if (selectedGenre === 'all') return availableBooks;
    return availableBooks.filter((book) => book.genre.includes(selectedGenre));
  }, [availableBooks, selectedGenre]);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Books</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Explore the complete collection of works by R.P. Ruth. Each story offers
            a unique perspective and unforgettable journey.
          </p>
        </div>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-label="Book Catalog">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-slate-600" />
              <h2 className="text-lg font-semibold text-slate-900">Filter by Genre</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedGenre('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedGenre === 'all'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Books
              </button>
              {allGenres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedGenre === genre
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4 text-sm text-slate-600">
            Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <article
                key={book.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={book.coverImage}
                    alt={`Book cover: ${book.title}${book.subtitle ? ' - ' + book.subtitle : ''}`}
                    loading="lazy"
                    className="h-full object-contain"
                    style={{
                      transform: book.coverImageScale ? `scale(${book.coverImageScale})` : undefined
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="text-sm text-slate-500 mb-3">{book.subtitle}</p>
                  )}
                  <p className="text-sm text-slate-600 mb-4 line-clamp-4 leading-relaxed flex-grow">
                    {book.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.genre.map((g) => (
                      <span
                        key={g}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-slate-900 font-medium hover:text-slate-700 transition-colors text-sm"
                    >
                      View on Amazon
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600">
                No books found in this genre. Try selecting a different filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
