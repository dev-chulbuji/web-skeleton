const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncidentHistory = new Schema({
	incident_id: { type: String },
	responsibility_person: { type: String },
	responsibility_part: { type: String },
	symptom: { type: String },
	cause: { type: String },
	action: { type: String },
	target_device: { type: String },
	effect: { type: String },
	prevention_way: { type: String },
	find_cause_way: { type: String },
	recognition_way: { type: String },
	memo: { type: String },
	// finder: { type: Number },
	finder: { type: String },
	occured_at: { type: Date, required: true },
	fined_at: { type: Date, required: true },
	actioned_at: { type: Date, required: true },
	solved_at: { type: Date, required: true },
	created_at: { type: Date, default: Date.now },
})


IncidentHistory.statics.getList = async function (id) {
	return this.find({ incident_id: id })
	.exec()
}

IncidentHistory.statics.create = async function (option) {
	const item = new this(option)
	return item.save()
}

module.exports = mongoose.model('History', IncidentHistory)
