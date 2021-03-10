import SearchDevService from '../services/SearchDevService';

class SearchController {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const devs = await SearchDevService.run({
      latitude,
      longitude,
      techs,
    });

    return response.json({ devs });
  }
}

export default new SearchController();
