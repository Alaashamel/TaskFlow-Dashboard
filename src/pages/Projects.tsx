import { useState } from "react";

import { projects as initialProjects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

import type { Project } from "../types/project";


export default function Projects() {

  const [projects, setProjects] = useState<Project[]>(
    initialProjects
  );


  const [showModal, setShowModal] = useState(false);



  const createProject = (data: {
    name: string;
    description: string;
  }) => {

    const newProject: Project = {
      id: Date.now(),
      name: data.name,
      description: data.description,
      status: "Pending",
      members: 1,
      progress: 0,
    };


    setProjects([
      ...projects,
      newProject,
    ]);


    setShowModal(false);
  };



  return (
    <div className="p-8">


      <div className="flex justify-between items-center mb-8">


        <div>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your projects
          </p>
        </div>



        <button
          onClick={() => setShowModal(true)}
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-3
          rounded-lg
          "
        >
          + New Project
        </button>


      </div>





      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        "
      >


        {projects.map((project) => (

          <div
            key={project.id}
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            "
          >


            <h2 className="text-xl font-bold">
              {project.name}
            </h2>



            <p className="text-gray-500 mt-2">
              {project.description}
            </p>



            <div className="mt-5">


              <div className="flex justify-between text-sm mb-2">

                <span>
                  Progress
                </span>


                <span>
                  {project.progress}%
                </span>

              </div>



              <div
                className="
                bg-gray-200
                h-2
                rounded-full
                "
              >

                <div
                  className="
                  bg-blue-600
                  h-2
                  rounded-full
                  "
                  style={{
                    width:`${project.progress}%`
                  }}
                />

              </div>


            </div>




            <div className="flex justify-between mt-5">


              <span
                className="
                bg-blue-100
                text-blue-700
                px-3
                py-1
                rounded-full
                text-sm
                "
              >
                {project.status}
              </span>



              <span>
                👥 {project.members}
              </span>


            </div>


          </div>

        ))}


      </div>



      {
        showModal && (
          <ProjectModal
            onClose={() => setShowModal(false)}
            onCreate={createProject}
          />
        )
      }



    </div>
  );
}