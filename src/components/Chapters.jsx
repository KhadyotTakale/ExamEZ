import React from 'react';
import { Link } from 'react-router-dom';

const Chapters = () => {
    const chapters = [
        { name: "Real Numbers", route: "realnumbers" },
        { name: "Polynomials", route: "polynomials" },
        { name: "Pair of Linear Equations in Two Variables", route: "pair-linearequations" },
        { name: "Quadratic Equations", route: "quadraticequations" },
        { name: "Arithmetic Progressions", route: "arithmeticprogressions" },
        { name: "Triangles", route: "triangles" },
        { name: "Coordinate Geometry", route: "coordinategeometry" },
        { name: "Introduction to Trigonometry", route: "introductiontotrigonometry" },
        { name: "Some Applications of Trigonometry", route: "applicationsoftrigonometry" },
        { name: "Circles", route: "circles" },
        { name: "Constructions", route: "constructions" },
        { name: "Areas Related to Circles", route: "areasrelatedtocircles" },
        { name: "Surface Areas and Volumes", route: "surfaceareasandvolumes" },
        { name: "Statistics", route: "statistics" },
        { name: "Probability", route: "probability" }
    ];

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-yellow-100 p-6 rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Select Chapter</h1>
                <ul>
                    {chapters.map((chapter, index) => (
                        <li key={index}>
                            {/* Update the route path to "/realnumbers" */}
                            <Link to={`/${chapter.route}`} className="btn block mb-2">{chapter.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Chapters;
