import Link from '@/components/Link'
import speakingData from '@/data/speakingData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Speaking', description: 'Conferences & user groups I speak at' })

export default async function Page() {
  const speakingList = speakingData

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Speaking
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">My personal projects</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <table>
              <thead>
                <tr>
                  <td>When</td>
                  <td>Talk</td>
                  <td>At</td>
                  <td>Where</td>
                  <td>Video</td>
                </tr>
              </thead>
              <tbody>
                {speakingList.map((s) => (
                  <tr>
                    <td>{s.date}</td>
                    <td>{s.title}</td>
                    <td>{s.at}</td>
                    <td>{s.country} | {s.city}</td>
                    <td><a href={s.videoUrl}>Watch</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
