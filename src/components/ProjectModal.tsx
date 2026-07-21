import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const projectSchema = z.object({
  name: z
    .string()
    .min(3, "Project name must be at least 3 characters"),

  description: z
    .string()
    .min(5, "Description is too short"),
});


type ProjectForm = z.infer<typeof projectSchema>;


interface Props {
  onClose: () => void;
  onCreate: (data: ProjectForm) => void;
}


export default function ProjectModal({
  onClose,
  onCreate,
}: Props) {


  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm<ProjectForm>({
    resolver:zodResolver(projectSchema)
  });



  return (
    <div className="
      fixed
      inset-0
      bg-black/40
      flex
      items-center
      justify-center
    ">


      <div className="
        bg-white
        rounded-xl
        p-6
        w-96
      ">


        <h2 className="
          text-2xl
          font-bold
          mb-5
        ">
          Create Project
        </h2>



        <form
          onSubmit={handleSubmit(onCreate)}
          className="space-y-4"
        >


          <input
            {...register("name")}
            placeholder="Project name"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          />


          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}



          <textarea
            {...register("description")}
            placeholder="Description"
            className="
            w-full
            border
            rounded-lg
            p-3
            "
          />



          {errors.description && (
            <p className="text-red-500 text-sm">
              {errors.description.message}
            </p>
          )}



          <div className="flex gap-3">


            <button
              type="button"
              onClick={onClose}
              className="
              flex-1
              bg-gray-300
              py-2
              rounded-lg
              "
            >
              Cancel
            </button>


            <button
              type="submit"
              className="
              flex-1
              bg-blue-600
              text-white
              py-2
              rounded-lg
              "
            >
              Create
            </button>


          </div>


        </form>


      </div>


    </div>
  );
}