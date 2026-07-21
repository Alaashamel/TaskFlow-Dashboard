import{ tasks } from "../data/tasks";


export default function Tasks(){

return (

<div className="p-8">


<h1 className="text-3xl font-bold mb-2">
Tasks
</h1>


<p className="text-gray-500 mb-8">
Manage your tasks
</p>



<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
">


{
tasks.map(task=>(


<div
key={task.id}
className="
bg-white
rounded-xl
shadow
p-6
"
>


<h2 className="text-xl font-bold">
{task.title}
</h2>


<p className="text-gray-500 mt-2">
{task.description}
</p>



<div className="mt-5 flex justify-between">


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

{task.status}

</span>



<span
className="
bg-red-100
text-red-700
px-3
py-1
rounded-full
text-sm
"
>

{task.priority}

</span>



</div>



<div className="mt-5 text-sm text-gray-500">

Assigned to:
<b className="ml-2 text-gray-700">
{task.assignee}
</b>

</div>


</div>


))

}


</div>


</div>

)


}