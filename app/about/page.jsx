import Image from 'next/image';

const teamMembers = [
    {
        name: 'Oleksandr Kovanev',
        role: 'Founder',
        image: '/images/team/person1.jpg',
        bio: '.NET Architect and former scientist with 15+ years building scalable enterprise systems and 5+ years mentoring students in applied computer science.'   
    },
    {
        name: 'Oleksii Cheremisin',
        role: 'Founder',
        image: '/images/team/person2.jpg',
        bio: '.NET Architect with 15+ years of backend expertise, delivering high-quality solutions and exploring new technologies and problem-solving methods.'
    },
    {
        name: 'Tetiana Krylova',
        role: 'Founder',
        image: '/images/team/person3.jpg',
        bio: 'Software Engineering Manager with 15 years experience, driving business impact and delivering value through skilled teams and optimal technology.'
    }
];

export const metadata = {
    title: 'About Us'
};

export default function About() {
    return (
        <div className="py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    The passionate people behind our mission
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                        <div className="relative w-48 h-48 mb-6">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                sizes="192px"
                                className="object-cover rounded-full border-4 border-primary"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-primary-dark font-medium mb-3">{member.role}</p>
                        <p className="text-text-secondary">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
