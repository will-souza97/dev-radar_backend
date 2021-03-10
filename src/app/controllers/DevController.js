import Dev from '../models/Dev';
import RegisterDevService from '../services/RegisterDevService';

class DevController {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  }

  async store(request, response) {
    const devExists = await Dev.findOne({
      github_username: request.body.github_username,
    });

    if (devExists) {
      return response.json(devExists);
    }

    const { github_username, techs, latitude, longitude } = request.body;

    const dev = await RegisterDevService.run({
      github_username,
      techs,
      latitude,
      longitude,
    });

    return response.json(dev);
  }

  async delete(request, response) {
    const { id } = request.params;

    const dev = await Dev.findByIdAndDelete(id);

    if (!dev) {
      return response.status(400).json({ Error: "This Dev doesn't exists" });
    }

    return response.json({ 'Dev Successfully Deleted': dev });
  }
}

export default new DevController();
