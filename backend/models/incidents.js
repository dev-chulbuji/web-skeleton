const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  incidentId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  isdeprecated: { type: Boolean, default: false }
});

incidentSchema.statics.create = function (payload) {
  const item = new this(payload);
  return item.save();
};

incidentSchema.statics.findAll = function () {
  return this.find({});
};

incidentSchema.statics.findOneById = function (incidentId) {
  return this.findOne({ incidentId });
};

incidentSchema.statics.updateById = function (incidentId, payload) {
  return this.findOneAndUpdate({ incidentId }, payload, { new: true });
};

incidentSchema.statics.deleteById = function (incidentId) {
  return this.remove({ incidentId });
};

module.exports = mongoose.model('Incident', incidentSchema);