export const stringify(data){
  // 判断是否存在循环引用
  const isCyclic=(obj)=>{
    // 使用Set数据类型存储已经检测过的对象
    let stackSet=new Set()
    let detected=false

    const detect=(detectObj)=>{
      // 不是对象类型的话，跳过
      if(detectObj&&typeof detectObj !=='object'){
        return
      }
      // 当要检查的对象已经存在于stackSet中时，表示存在循环引用
      if(stackSet.has(detectObj)){
        return detected=true
      }
      // 将当前obj存到stackSet
      stackSet.add(detectObj)

      for (const key in detectObj) {
        // 对detectObj下的属性遍历检查
        if(detectObj.hasOwnProperty(key)){
          detect[obj[key]]
        }
      }
      // 平级检测完成之后，将当前对象删除，防止误判
      stackSet.delete(obj)
    }
    
  }  
}