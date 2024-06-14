
let _cb = undefined

export const signal = (initial) => {

    let _signalCb = undefined
    let current = initial

    const get = () => {
        if (_cb) _signalCb = _cb
        return current
    }

    const set = (newValue) => {
        current = newValue
        if (_signalCb) _signalCb()
    }

    return [get, set]
}

export const effect = (callback) => {
    _cb = callback
    callback()
    _cb = undefined
}
