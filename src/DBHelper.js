// const api = process.env.PUBLIC_URL || '.';

const headers = {
  'Accept': 'application/json',
};

export const getAll = () =>
  fetch(`/posts.json`, { headers })
    .then(res => res.json())
    .then(data => data.posts);