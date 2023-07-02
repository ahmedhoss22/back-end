const validator = require('validator');

const courseValidation = (name,instructor, level,numLessons, language,startDate,duration,certificate,intro,assessment,requirements,materials,publishDate,enroll) => {
  const errors = {};

  if (validator.isEmpty(name)) errors.name = 'Name is required';
  if (validator.isEmpty(instructor)) errors.instructor = 'instructor is required';
  if (validator.isInt(level)) errors.level = 'level must be number';
  if (validator.isEmpty(level)) errors.level = 'level is required';
  if (validator.isEmpty(numLessons)) errors.numLessons = 'numLessons id is required';
  if (validator.isInt(numLessons)) errors.numLessons = 'numLessons must be number';
  if (validator.isEmpty(language)) errors.language ="language is required"
  if (validator.isEmpty(startDate)) errors.startDate ="startDate is required"
  if (validator.isEmpty(duration)) errors.duration ="duration is required"
  if (validator.isInt(duration)) errors.duration ="duration must be number"
  if (validator.isBoolean(certificate)) errors.certificate ="certificate must be True Or False"
  if (validator.isEmpty(certificate)) errors.certificate ="certificate is required"
  if (validator.isEmpty(intro)) errors.intro ="intro is required"
  if (validator.isEmpty(assessment)) errors.assessment ="assessment is required"
  if (validator.isEmpty(requirements)) errors.requirements ="requirements is required"
  if (validator.isEmpty(materials)) errors.materials ="materials is required"
  if (validator.isEmpty(publishDate)) errors.publishDate ="publishDate is required"
  if (validator.isEmpty(enroll)) errors.enroll ="enroll is required"

  return {errors,isValid: Object.keys(errors).length === 0};
};

module.exports = courseValidation;
