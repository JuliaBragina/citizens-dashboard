export function paginate(items, requestedPage, pageSize = 10) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const number = Number(requestedPage)
  const page = Number.isSafeInteger(number) && number > 0 ? Math.min(number, pageCount) : 1
  const start = (page - 1) * pageSize
  return {
    page,
    pageCount,
    rows: items.slice(start, start + pageSize),
    from: items.length ? start + 1 : 0,
    to: Math.min(start + pageSize, items.length),
  }
}
