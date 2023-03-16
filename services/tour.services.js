const Tour = require("../model/tour.model.js");

exports.getTourServices = async (filters, queries) => {
  const bus = await Tour.find()
    // .skip(queries.skip)
    // .limit(queries.limit)
    // .select(queries.fields)
    // .sort(queries.sortBy);

  console.log(bus);
  const total = await Tour.countDocuments(filters);
  // const page = Math.ceil(totalTours / queries.limit);
  return { total, bus };
};

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};
