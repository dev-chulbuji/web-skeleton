const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Incident = new Schema({
	/**
	 * 담당자
	 * 담당부서
	 * 증상
	 * 발생일시
	 * 발견일시
	 * 발견자
	 * 대응일시
	 * 해결일시
	 * 원인
	 * 대응
	 * 대상장비
	 * 서비스영향
	 * 방지방안
	 * 원인 파악 방법
	 * 인지 방법
	 * 세부사항  N/A
	 */
	// responsibility_person: { type: Number },
	// responsibility_part: { type: Number },
	responsibility_person: {type: String},
	responsibility_part: {type: String},
	symptom: {type: String},
	cause: {type: String},
	action: {type: String},
	target_device: {type: String},
	effect: {type: String},
	prevention_way: {type: String},
	find_cause_way: {type: String},
	recognition_way: {type: String},

	memo: {type: String},
	// finder: { type: Number },
	finder: {type: String},
	occured_at: {type: Date, required: true},
	fined_at: {type: Date, required: true},
	actioned_at: {type: Date, required: true},
	solved_at: {type: Date, required: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now},
})


Incident.statics.get = async function (id) {
	return this.findOne({_id: id}).exec()
}

Incident.statics.getList = async function (page, total) {
	return this.find()
		.skip(total * (page - 1))
		.limit(total)
		.sort({created_at: 'desc'})
		.exec()
}

Incident.statics.getTotal = async function (page, total) {
	return this.collection.countDocuments()
}

Incident.statics.create = async function (option) {
	const item = new this(option)
	return item.save()
}

Incident.statics.delete = async function (option) {
	const {id} = option
	return this.findByIdAndRemove(id).exec()
}

Incident.statics.put = async function (option) {
	const { _id } = option
	return this.updateOne({ _id }, option).exec()
}

module.exports = mongoose.model('Incidents', Incident)
