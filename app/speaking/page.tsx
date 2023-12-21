import Card from '@/components/Card'
import Link from '@/components/Link'
import speakingData from '@/data/speakingData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Speaking',
  description: 'Conferences & user groups I speak at',
})

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Speaking
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Conferences & user groups I speak at
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <div className="hidden md:block">
              <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-white dark:bg-surface">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      When
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Talk
                    </th>
                    <th scope="col" className="px-6 py-3">
                      At
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Where
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Video
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {speakingData
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((s, index) => (
                      <tr key={index} className="border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap  whitespace-nowrap	"
                        >
                          {s.date}
                        </th>
                        <td className="px-6 py-4">{s.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap	">{s.at}</td>
                        <td className="px-6 py-4 whitespace-nowrap	">
                          {s.country} | {s.city}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap	">
                          <Link
                            href={s.videoUrl}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            Watch
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden">
              {speakingData.map((s, index) => (
                <Card
                  key={index}
                  title={s.title}
                  description={`${s.date} | ${s.at} | ${s.country} | ${s.city}`}
                  href={s.videoUrl}
                  linkText={'Watch'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
