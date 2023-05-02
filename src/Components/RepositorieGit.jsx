import React, { useEffect, useState } from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

export const RepositorieGit = () => {
  const [repository, setRepository] = useState([]);
  const animation = useAnimation();
  useEffect(() => {
    fetch("https://api.github.com/users/yujiichikawa/repos")
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, []);

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section
        id="portfolio"
        className="h-76bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 py-12"
      >
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {repository.map((repo, index) => {
              return (
                <div
                  className="min-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-5 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r"
                  key={index}
                >
                  <div>
                    <h2 className="text-3xl font-semibold text-white">
                      {repo.name}
                    </h2>
                    <p className="mt-2 text-black">{repo.description}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {repo.language ? <>#{repo.language}</> : <>nenhum</>}
                    </span>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a
                      href={repo.html_url}
                      className="text-xl font-medium text-gray-900 hover:text-gray-800"
                    >
                      Ver Projeto
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
