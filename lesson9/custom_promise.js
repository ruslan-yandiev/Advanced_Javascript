'use strict'

class CustomPromise {
    constructor(callback) {
        this.__success__ = []
        this.__error__ = []
        this._callback = callback;
        this._status = 'pending'

        if (callback) {
            setTimeout(() => {
                callback(this._resolve.bind(this), this._reject.bind(this))
            }, 0)
        }
    }

    then(successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb)
        }
        if (rejectCb) {
            this.__error__.push(rejectCb)
        }
    }

    catch (rejectCb) {
        this.then(null, rejectCb)
    }

    _resolve(result) {
        this.__success__.forEach(cb => cb(result))
    }

    _reject(err) {
        this.__error__.forEach(cb => cb(err))
    }
};

let promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        reject(1)
    }, 1000)
});

promise.then(console.log('Hi'));
promise.catch((err) => {
    console.log('Rejected', err)
});

let promise2 = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
});

promise2.then((resolve) => {
    console.log('Result', resolve)
});

promise2.then(console.log);
