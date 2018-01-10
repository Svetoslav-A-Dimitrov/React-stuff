/**
 * Created by sve on 1.11.2017 г..
 */
let funcHolder = {}

let observer = {
  addObservr: (name, func)=>{
    funcHolder[name] = func
  },
  executeObserver: (name, params)=>{
    funcHolder[name](params)
  }
}

export default observer