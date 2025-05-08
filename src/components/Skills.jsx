import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SkillCard = ({ category, skills }) => {
    return (
        <div className="border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 mb-8">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-quaternary mb-6">
                {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={`skill-${index}`}
                        className="bg-tertiary p-4 rounded-lg"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-white text-[14px] md:text-[18px] lg:text-[22px]">
                                {skill.name}
                            </span>
                            <span className="text-quaternary text-[12px] md:text-[16px] lg:text-[20px]">
                                {skill.level}%
                            </span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                            <div
                                className="bg-quaternary h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML/CSS", level: 90 },
                { name: "Tailwind CSS", level: 85 },
                { name: "TypeScript", level: 80 },
            ],
        },
        {
            category: "Backend Development",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "SQL", level: 70 },
                { name: "REST APIs", level: 85 },
            ],
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git & Github", level: 85 },
                { name: "Copilot", level: 70 },
                { name: "Jankins", level: 45 },
                { name: "PHPMyAdmin", level: 75 },
                { name: "VS Code", level: 80 },
            ],
        },
    ];

    return (
        <div className="sm:my-20">
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionText} text-center`}>
                    Skills
                </h2>
            </motion.div>

            <div className="mt-10 md:mt-20 md:p-20">
                {skillCategories.map((category, index) => (
                    <SkillCard
                        key={`category-${index}`}
                        category={category.category}
                        skills={category.skills}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Skills, "skills"); 