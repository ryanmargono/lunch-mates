export const allSameDept = list => {
    let dept = list[0].department
    for (let i = 0; i < list.length; i++) {
        if (list[i].department !== dept) return false
    }
    return true
}

export const allDeptCalled = (list, set) => {
    for (let i = 0; i < list.length; i++) {
        if (!set.has(list[i].department)) return false
    }
    return true
}

export const addToSets = (list, names, depts) => {
    list.forEach(person => {
        names.add(person.name)
        depts.add(person.department)
    })
}

export const addToGroup = (group, current, names, depts) => {
    if (allSameDept(current)) {
        const randI = Math.floor(Math.random() * (current.length - 0 + 1))
        group.push(current[randI])
        current.splice(randI, 1)
    }
    else {
        if (allDeptCalled(current)) prevDept.clear()
        const randI = Math.floor(Math.random() * (current.length - 0 + 1))
        const selected = current[randI]
        if (!set1.has(selected.department)){
            group.push(selected) 
            addToSets([selected], names, depts)
            current.splice(randI, 1)
        }
    }
}

        // LOGIC:

        // get a list of current employees
        // have a set of departments
        // have a set of names

        // edge cases:
            // remaining employees are in the same department
                // ignore the department, just populate the list
            // remianing employees' departments have been called
                // empty the set
            // 0 employees in the current list
                // replenish the list
            // 3 employees left in the list
                // set the current group to the remaining employees
            // less than 3 employees in the list
                // push the remaining employees to the current grouo
                // replenish the employee list
                // get random employees until the list is full
                    // check department and names