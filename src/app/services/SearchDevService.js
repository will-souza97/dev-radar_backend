import Dev from '../models/Dev';
import parseStringAsArray from '../../utils/parseStringAsArray';

class SearchDevService {
  async run({ latitude, longitude, techs, distance }) {
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: Number(distance) * 1000,
        },
      },
    });

    return devs;
  }
}

export default new SearchDevService();
