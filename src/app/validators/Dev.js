import * as Yup from 'yup';

export default async (request, response, next) => {
  try {
    const schema = Yup.object().shape({
      github_username: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      techs: Yup.string().required(),
    });

    await schema.validate(request.body, { abortEarly: false });

    return next();
  } catch (error) {
    return response
      .status(400)
      .json({ Error: 'Validation Fails', messages: error.inner });
  }
};
