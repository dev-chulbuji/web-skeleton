const incidentDAO = require('../../models/incident')
const incidentHistoryDAO = require('../../models/history')
const dateFormat = require('../../utils/format').dateFormat

exports.getList = async (req, res, next) => {
	const { page = 1, total = 10 } = req.params
	const addOnItemCount = 5 // 삭제를 위해 추가 아이템
	const rowsPerPage = Number.parseInt(total) + addOnItemCount

	try {
		const items = await incidentDAO.getList(page, rowsPerPage)
		const totalSize = await incidentDAO.getTotal()

		const rtv = {
			items,
			totalSize,
			currentPage: page,
		}
		res.json(rtv)
	} catch (e) {
		next(e)
	}
}

exports.get = async (req, res, next) => {
	const { id } = req.query

	try {
		const incident = await incidentDAO.get(id)
		const histories = await incidentHistoryDAO.getList(incident._id)

		if (!incident) throw new Error("1000")

		res.json({
			item: incident,
			histories
		})
	} catch (e) {
		next(e)
	}
}

exports.post = async (req, res, next) => {
	const {
		responsibility_person,
		responsibility_part,
		symptom,
		cause,
		action,
		target_device,
		effect,
		prevention_way,
		find_cause_way,
		recognition_way,
		memo,
		finder,
		occured_at,
		fined_at,
		actioned_at,
		solved_at
	} = req.body

	const option = {
		responsibility_person,
		responsibility_part,
		symptom,
		cause,
		action,
		target_device,
		effect,
		prevention_way,
		find_cause_way,
		recognition_way,
		memo,
		finder,
		occured_at,
		fined_at,
		actioned_at,
		solved_at
	}

	try {
		account = await incidentDAO.create(option);
		res.json('post incidens')
	} catch (e) {
		next(e)
	}
}

exports.delete = async (req, res, next) => {
	const { ids } = req.body

	console.log(ids)

	try {
		await incidentDAO.deleteMany({ _id: ids })
		res.json({ ids })
	} catch(e) {
		next(e)
	}
}

exports.put = async (req, res, next) => {
	const {
		_id,
		responsibility_person,
		responsibility_part,
		symptom,
		cause,
		action,
		target_device,
		effect,
		prevention_way,
		find_cause_way,
		recognition_way,
		memo,
		finder,
		occured_at,
		fined_at,
		actioned_at,
		solved_at
	} = req.body

	const option = {
		_id,
		responsibility_person,
		responsibility_part,
		symptom,
		cause,
		action,
		target_device,
		effect,
		prevention_way,
		find_cause_way,
		recognition_way,
		memo,
		finder,
		occured_at,
		fined_at,
		actioned_at,
		solved_at,
	}

	try {
		const incident = await incidentDAO.get(_id)
		if (!incident) throw new Error("1000")

		const response = await incidentDAO.put(option)

		const history = {
			incident_id: incident._id,
			responsibility_person: incident.responsibility_person,
			responsibility_part: incident.responsibility_part,
			symptom: incident.symptom,
			cause: incident.cause,
			action: incident.action,
			target_device: incident.target_device,
			effect: incident.effect,
			prevention_way: incident.prevention_way,
			find_cause_way: incident.find_cause_way,
			recognition_way: incident.recognition_way,
			memo: incident.memo,
			finder: incident.finder,
			occured_at: incident.occured_at,
			fined_at: incident.fined_at,
			actioned_at: incident.actioned_at,
			solved_at: incident.solved_at,
		}

		await incidentHistoryDAO.create(history)

		res.json({ _id })
	} catch (e) {
		next(e)
	}
}
