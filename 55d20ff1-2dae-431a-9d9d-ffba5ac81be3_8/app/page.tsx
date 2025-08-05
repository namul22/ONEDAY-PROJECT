
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<boolean[]>([false, false, false, false, false, false]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const teamMembers = [
    {
      name: "김명준",
      role: "전교회장 후보",
      description: "5년 경력의 풀스택 개발자로, 다양한 프로젝트를 성공적으로 이끌어온 경험이 있습니다. 팀워크와 혁신적인 아이디어를 통해 최고의 결과물을 만들어냅니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20developer%20in%20his%2030s%2C%20clean%20modern%20portrait%20with%20minimal%20white%20background%2C%20confident%20expression%2C%20wearing%20casual%20business%20attire%2C%20soft%20lighting%2C%20professional%20headshot%20style&width=400&height=500&seq=team1&orientation=portrait"
    },
    {
      name: "정예서",
      role: "전교부회장 후보",
      description: "사용자 중심의 디자인 철학을 가진 크리에이티브 디자이너입니다. 아름답고 직관적인 인터페이스를 통해 사용자에게 최고의 경험을 제공합니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20designer%20in%20her%20late%2020s%2C%20creative%20and%20modern%20portrait%20with%20minimal%20white%20background%2C%20warm%20smile%2C%20wearing%20stylish%20casual%20clothing%2C%20artistic%20lighting%2C%20professional%20headshot%20style&width=400&height=500&seq=team2&orientation=portrait"
    },
    {
      name: "최국준",
      role: "전교부회장 후보",
      description: "최신 기술 트렌드를 빠르게 습득하고 적용하는 기술 전문가입니다. 복잡한 문제를 창의적으로 해결하며, 팀의 기술적 역량을 끌어올립니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20tech%20specialist%20in%20his%20early%2030s%2C%20focused%20and%20intelligent%20expression%2C%20minimal%20white%20background%2C%20wearing%20modern%20casual%20shirt%2C%20clean%20professional%20lighting%2C%20professional%20headshot%20style&width=400&height=500&seq=team3&orientation=portrait"
    }
  ];

  const onedayLetters = [
    {
      letter: "O",
      title: "Oppertunity",
      description: "열린 마음으로 새로운 가능성을 탐구하며, 다양한 관점을 수용합니다."
    },
    {
      letter: "N",
      title: "New",
      description: "새로운 아이디어와 혁신적인 접근법으로 미래를 만들어갑니다."
    },
    {
      letter: "E",
      title: "Environment",
      description: "끊임없는 열정과 에너지로 모든 프로젝트에 최선을 다합니다."
    },
    {
      letter: "D",
      title: "Develop",
      description: "꿈을 현실로 만들어가는 과정에서 의미있는 변화를 만들어냅니다."
    },
    {
      letter: "A",
      title: "Active",
      description: "생각에서 그치지 않고 실행으로 옮겨 구체적인 결과를 만들어냅니다."
    },
    {
      letter: "Y",
      title: "You",
      description: "당신의 꿈과 목표를 함께 이루어가는 파트너가 되겠습니다."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 relative">
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-center leading-[0.8] font-[\'Helvetica_Neue\'] uppercase">
            ONEDAY
            <br />
            <span className="font-black tracking-tighter">PROJECT</span>
          </h1>
          <div className="mt-8 text-center">
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
              하루하루 새로운 가능성을 만들다
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-20 tracking-tight uppercase text-white">Members</h2>
          <div className="space-y-32">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } transition-all duration-1000 transform ${
                  visibleSections[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="flex-1 w-full max-w-md lg:max-w-none">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 lg:h-96 object-cover object-top rounded-none shadow-2xl border-4 border-white"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left border-4 border-white p-12 shadow-2xl bg-black">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase text-white">{member.name}</h3>
                  <p className="text-xl sm:text-2xl mb-6 font-light tracking-widest uppercase text-gray-300">{member.role}</p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-200 max-w-lg mx-auto lg:mx-0 font-light">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONEDAY Letters Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-20 tracking-tight uppercase text-white">What is ONEDAY PROJECT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {onedayLetters.map((item, index) => (
              <div
                key={index}
                ref={(el) => { sectionRefs.current[index + 3] = el; }}
                className={`p-8 md:p-10 rounded-none border-4 border-white bg-black transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-900 ${
                  visibleSections[index + 3]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-7xl sm:text-8xl md:text-9xl font-black mb-6 tracking-tighter text-white">
                    {item.letter}
                  </h3>
                  <h4 className="text-2xl sm:text-3xl font-light mb-4 tracking-[0.3em] uppercase text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="border-4 border-white p-16 md:p-20 shadow-2xl bg-black">
            <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter text-white">
              "하루하루, 새로운 가능성을<br/>현실로 만들어가는 <span className="italic font-light">여정</span>"
            </p>
            <div className="mt-12 w-32 h-2 bg-white mx-auto"></div>
            <p className="text-xl sm:text-2xl mt-12 max-w-3xl mx-auto font-light tracking-wide text-gray-300">
              매일을 새로운 도전의 기회로 여기며, 작은 변화가 큰 혁신으로 이어질 수 있다고 믿습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t-4 border-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight uppercase text-white">ONEDAY <span className="italic font-light">PROJECT</span></h3>
          <p className="text-gray-300 text-lg sm:text-xl font-light tracking-wide">
            하루하루 새로운 가능성을 만들어가는 프로젝트
          </p>
        </div>
      </footer>
    </div>
  );
}
