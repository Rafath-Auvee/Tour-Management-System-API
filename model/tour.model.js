const mongoose = require("mongoose");
const moment = require("moment");
const { ObjectId } = mongoose.Schema.Types;

const tourSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide a name for this company."],
      trim: true,
      unique: [true, "Name must be unique"],
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    vehicle: {
      type: String,
      required: [true, "Please provide a name for this vehicle."],
      trim: true,
      unique: [true, "Name must be unique"],
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      get: (val) => moment(val).format("DD-MM-YYYY"),
      set: (val) => moment(val, "DD-MM-YYYY").toDate(),
      required: true,
    },

    // status: {
    //   type: String,
    //   enum: ["closed", "open"],
    //   default: "open",
    // },
  },
  {
    timestamps: true,
  }
);

// tourSchema.pre('save', function(next) {
//   const currentDate = new Date();
//   const tourDate = new Date(this.date);

//   if (currentDate > tourDate) {
//     this.status = 'closed';
//   } else {
//     this.status = 'open';
//   }

//   next();
// });

const Tour = mongoose.model("tour", tourSchema);

module.exports = Tour;
