import React, { useEffect, useState } from "react";
import { Projects } from "../../../pages/api/data";
import { useRouter } from "next/router";
import { Icons } from "#/icon/icons";
import Image from "next/image";
import Link from "next/link";
import { ScrollBoost } from "react-scrollbooster";

export default function ProjectsTaskList() {
  const router = useRouter();
  const { project_id } = router.query;

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Projects.getProjectTasks(project_id));
  }, [router]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-10">
        <h4 className="mt-6 text-[26px] text-sky-950">Proektlar</h4>

        {/* PROJECT-STAGES   */}
        <ScrollBoost
          friction={0.02}
          direction="horizontal"
          scrollMode="transform"
        >
          {({ viewport }) => {
            return (
              <div ref={viewport}>
                <ul className="mt-12 flex items-start gap-x-5">
                  {data?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="w-[300px] min-w-[300px] overflow-hidden rounded-t-[8px] border-b-[3px] border-slate-50"
                      >
                        {/* stage-header */}
                        <div className="flex h-12 items-center justify-between gap-5 bg-gray-200/60 px-5 pb-3 pt-4">
                          <h4 className="text-[14px] text-slate-500">
                            {item?.name}
                          </h4>
                          <button>
                            <Icons.Options400 className="w-6 stroke-stone-400" />
                          </button>
                        </div>

                        {/* stage-body */}
                        <div className="bg-white p-[10px] pb-5">
                          <ul className="flex flex-col gap-y-4">
                            {item?.tasks?.map((task, taskIndex) => {
                              return (
                                <li
                                  key={taskIndex}
                                  className="rounded-[8px] bg-gray-100 p-3 pb-5"
                                >
                                  <div className="flex items-start justify-between gap-x-2">
                                    <p className="text-[14px] leading-[1.4] text-slate-500">
                                      {task?.text}
                                    </p>
                                    <button>
                                      <Icons.Pencil700 className="w-4 fill-black" />
                                    </button>
                                  </div>

                                  <Link
                                    href={`/projects/tasks/comments/${task?.id}`}
                                  >
                                    <div className="mt-5 flex items-center justify-between gap-5">
                                      <div className="flex items-center gap-x-2">
                                        <Icons.Clock400 className="w-5 fill-primary" />
                                        <p className="text-[14px] leading-[1.4] text-slate-500">
                                          {getDottedDateString(task.start_date)}
                                          &nbsp;-&nbsp;
                                          {getDottedDateString(task.end_date)}
                                        </p>
                                      </div>

                                      {/* task-users */}

                                      <ul className="flex items-center">
                                        {task?.users?.map((user, userIndex) => {
                                          return (
                                            <li
                                              key={userIndex}
                                              className="ml-[-6px] aspect-square w-6 overflow-hidden rounded-full border border-white bg-white"
                                              style={{
                                                zIndex:
                                                  task?.users?.length -
                                                  userIndex,
                                              }}
                                            >
                                              <Image
                                                src={user?.image}
                                                alt=""
                                                height={1000}
                                                width={1000}
                                                className="h-full w-full object-cover"
                                              />
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>

                          <button className="mt-5 text-nowrap rounded-[12px] bg-gray-100 px-7 py-2 pr-[60px]">
                            <p className="text-[14px] leading-[1.4] text-black">
                              +Task qo'shish
                            </p>
                          </button>
                        </div>
                      </li>
                    );
                  })}

                  <li>
                    <button className="rounded-[6px] bg-white px-11 py-2">
                      <p className="text-[14px] leading-[1.4] text-primary">
                        +Stage qo'shish
                      </p>
                    </button>
                  </li>
                </ul>
              </div>
            );
          }}
        </ScrollBoost>
      </div>
    </div>
  );
}

function getDottedDateString(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}.${month}`;
}
