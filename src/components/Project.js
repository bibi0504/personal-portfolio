import { BsGithub } from 'react-icons/bs';
import { MdOutlineLink } from 'react-icons/md';
import Link from 'next/link';
import OgImage from './OgImage';

export default function Project({ project }) {
    return (
        <div className="card">
            <OgImage src={project.coverUrl} alt={project.name} />

            <div className="flex flex-col justify-start gap-3">
                <h1 className="font-bold text-neutral-900 dark:text-neutral-200">{project.name}</h1>
                <p className="text-sm text-gray-400 dark:text-neutral-400 line-clamp-5">
                    {project.description}
                </p>

                <div className="flex items-center gap-1 flex-wrap">
                    {project.keywords.map((keyword, index) => {
                        return (
                            <span
                                key={index}
                                className="bg-gray-100 dark:bg-darkPrimary text-gray-500 rounded px-2 py-1 text-xs"
                            >
                                {keyword}
                            </span>
                        );
                    })}
                </div>

                <div className="mt-auto p-2 w-fit flex items-center gap-4">
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            title="Source Code on Github"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black dark:hover:text-white"
                            passHref
                        >
                            <BsGithub className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                        </Link>
                    )}
                    {project.previewUrl && (
                        <Link
                            href={project.previewUrl}
                            title="Live Preview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black dark:hover:text-white"
                            passHref
                        >
                            <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
