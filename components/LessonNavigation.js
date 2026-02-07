import Link from 'next/link'

export default function LessonNavigation({ previousLesson, nextLesson }) {
  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {previousLesson ? (
          <Link href={previousLesson.href}>
            <a className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition border border-slate-200">
              <div className="text-sm text-slate-600">← Previous Lesson</div>
              <div className="text-lg font-semibold text-slate-900">{previousLesson.label}</div>
            </a>
          </Link>
        ) : (
          <div />
        )}
        
        {nextLesson ? (
          <Link href={nextLesson.href}>
            <a className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition border border-slate-200 text-right">
              <div className="text-sm text-slate-600">Next Lesson →</div>
              <div className="text-lg font-semibold text-slate-900">{nextLesson.label}</div>
            </a>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
