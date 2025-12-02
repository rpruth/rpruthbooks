import { BookOpen, Pen, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <article>
        <header className="bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              About R.P. Ruth Books
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              With nearly four decades of experience in the computer field, I recently discovered a newfound passion for creating books. Unbeknownst to me, it seems to have been a hidden interest all along. Now that I've unearthed this latent love, my plan is to embark on a journey of crafting numerous books, aiming to bring enjoyment to readers far and wide.
            </p>
          </div>
        </header>
      </article>

    </div>
  );
}
