const items = []
for(i = 0; i < 100; i ++) {
	items.push({
		idx: i,
		title: `title${i}`,
		content: `content${i}`
	})
}

exports.gets = async (req, res, next) => {
	const { page, perPage } = req.params
	res.json({
		items: items.sort((a, b) => b.idx - a.idx).slice((page - 1) * perPage, page * perPage),
		currentPage: page,
		totalSize: items.length,
	})
}

exports.get = async (req, res, next) => {
	res.json(`get incident by id`)
}

exports.put = async (req, res, next) => {
	res.json(`update incident by id`)
}

exports.post = async (req, res, next) => {
	const { title, content } = req.body
	const idx = items.length
	const item = { idx, title, content }

	items.push(item)
	
	res.json(item.idx)
}

exports.delete = async (req, res, next) => {
	res.json(`delete incident by id`)
}
