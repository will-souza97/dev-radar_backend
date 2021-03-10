import axios from 'axios';
import Dev from '../models/Dev';

const parseStringAsArray = require('../../utils/parseStringAsArray');

class RegisterDevService {
  async run({ github_username, techs, latitude, longitude }) {
    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });

    return dev;
  }
}

export default new RegisterDevService();
