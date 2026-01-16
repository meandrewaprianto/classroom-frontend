import {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        code: "CS101",
        department: "Computer Science",
        description: "Fundamentals of computer science and programming.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        name: "Calculus I",
        code: "MATH101",
        department: "Mathematics",
        description: "Introduction to differential and integral calculus.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        name: "General Physics I",
        code: "PHYS101",
        department: "Physics",
        description: "Mechanics, waves, and thermodynamics.",
        createdAt: new Date().toISOString(),
    },
];