const recursive_fibonnaci = (n) => {
  if (n === 1) {
    return [0, 1]
  } else {
    const s = recursive_fibonnaci(n - 1)
    s.push(s[s.length - 1] + s[s.length - 2])
    return s
  }
}

export const fibonnaci = (req, res) => {
  console.log("ok")
  res.json(recursive_fibonnaci(req.params.number))
}