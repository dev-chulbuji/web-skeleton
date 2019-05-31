const incidentHistoryDAO = require('../../models/history')

exports.getList = async (req, res, next) => {
	const { id } = req.query

	try {
		const histories = await incidentHistoryDAO.getList(id)
		res.json(histories)
	} catch (e) {
		next(e)
	}
}
