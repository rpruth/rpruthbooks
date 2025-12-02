import { Book } from '../types';
import { ArrowRight, Star } from 'lucide-react';

interface HomeProps {
  books: Book[];
  onNavigate: (page: string) => void;
}

export default function Home({ books, onNavigate }: HomeProps) {
  const featuredBooks = books.filter((book) => book.featured && book.available);

  return (
    <div className="min-h-screen">
      <header className="relative bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              R.P. Ruth Books
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              Now that I've unearthed this latent love, my plan is to embark on a journey of crafting numerous books, aiming to bring enjoyment to readers far and wide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('books')}
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Books
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
              >
                About the Author
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Featured Books">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                Featured Books
              </h2>
              <p className="text-slate-600">
                Discover the latest works from R.P. Ruth Books
              </p>
            </div>
            <button
              onClick={() => onNavigate('books')}
              className="hidden sm:flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <article
                key={book.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
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
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                      {book.title}
                    </h3>
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 flex-shrink-0 ml-2" />
                  </div>
                  {book.subtitle && (
                    <p className="text-sm text-slate-500 mb-3">{book.subtitle}</p>
                  )}
                  <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                    {book.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.genre.map((g) => (
                      <span
                        key={g}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-900 font-medium hover:text-slate-700 transition-colors"
                  >
                    View on Amazon
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex sm:hidden justify-center mt-8">
            <button
              onClick={() => onNavigate('books')}
              className="flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              View All Books
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
