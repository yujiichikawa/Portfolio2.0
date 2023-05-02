import React, { useEffect, useState } from "react";

export const RepositorieGit = () => {
  const [repository, setRepository] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/yujiichikawa/repos")
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {repository.map((repo, index) => {
        return (
          <div className="min-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-5 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600" key={index}>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{repo.name}</h2>
                <p className="mt-2 text-gray-600">{repo.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              { repo.language ? <>#{repo.language}</> : <>nenhum</> }
              </span>
            </div>
              <div className="flex justify-end mt-4">
                <a href={repo.html_url} className="text-xl font-medium text-indigo-500">Ver Projeto</a>
              </div>
          </div>
        );
      })}
    </div>
  );
};
