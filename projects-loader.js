// Shared project dataset for the Tennessee map and featured work section.
// Update projects.json whenever you add, remove, or revise a project entry.
window.OGCProjectDataPromise = fetch('./projects.json')
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Unable to load projects.json');
    }
    return response.json();
  })
  .then(function (data) {
    return Array.isArray(data) ? data : [];
  })
  .catch(function (error) {
    console.warn('Project data could not be loaded:', error);
    return [];
  });
