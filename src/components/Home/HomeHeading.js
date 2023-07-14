import AnimatedHeading from '../FramerMotion/AnimatedHeading';

export default function HomeHeading({ title }) {
    return (
        <AnimatedHeading className="w-full font-bold text-3xl text-left my-2 font-inter">
            {title}
        </AnimatedHeading>
    );
}
