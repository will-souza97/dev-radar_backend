import * as Yup from 'yup';

export default async (request, response, next) => {
  try {
    const schema = Yup.object().shape({
      latitude: Yup.string().required(),
      longitude: Yup.string().required(),
      techs: Yup.string().required(),
      distance: Yup.string().required(),
    });

    await schema.validate(request.query, { abortEarly: false });

    return next();
  } catch (error) {
    return response
      .status(400)
      .json({ Error: 'Validation Fails', messages: error.inner });
  }
};
