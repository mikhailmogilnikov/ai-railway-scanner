
export const parserCSV = (data) => {
    const lines = data.replaceAll('"', '').replaceAll('\\r', '').split('\n').slice(1)


    // console.log(lines)
    const parsedData = [];

    for (let line of lines) {
        if(!line.length) break
        line = line.replaceAll('\\r', '')
        let name = line.substring(0, line.search(',')); //console.log('name: ', name)
        let _line = line.slice(line.search(',') + 1); //console.log('_line: ', _line)
        let count = _line.substring(0, _line.search(',')); //console.log('count: ', count)
        let __line = _line.slice(_line.search(',') + 1);
        let arr = JSON.parse(__line.replace(/'/g, '"'));

        let obj = {
            filename: name,
            cases_count: count,
            timestamps: arr
        }

        console.log(obj)
        parsedData.push(obj)
    }
    return parsedData
}