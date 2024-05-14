export const parseImage = () => {
    console.log('lib/index.ts --> parseImage()')
}

export const parseHeadings = (line: string) => {
    if (line.startsWith('#')) {
        let symbols = line.match(/^\#+/g) || []
        let count = 0

        if (symbols.length > 0) {
            count = (symbols[0]?.match(/#/g) || []).length
            return line.replace(/^#+\s(.*)/g, `<h${ count } class="m-font">$1</h${ count }>`)
        }
    }

    return line
}

export const parseBlockQuote = (line: string) => {
    if (line.startsWith('>')) {
        return line.replace(/^\>\s(.+)/, '<blockquote class="bg-crust p-lg rounded-xs font-retina">$1</blockquote>')
    }

    return line
}

export const parseHorizontalRule = (line: string) => {
    if (line.startsWith('---')) {
        return "<hr>"
    }

    return line
}

export const parseMetadata = (metadata: string[]) => {
    console.log('parseMetadata()')

    let metadataHTML = {
        title: "",
        author: "",
        avatar: "",
        date: ""
    }

    for (const data of metadata) {
        let key = data.trim().split(': ')
        
        if (key.length > 1) {
            switch (key[0]) {
                case "title":
                    metadataHTML.title = `<div class="text-red">${ key[1] }</div>`
                    break
                case "author":
                    metadataHTML.author = `<div>${ key[1] }</div>`
                    break
                case "avatar":
                    metadataHTML.avatar = `<div>${ key[1] }</div>`
                    break
                case "date":
                    metadataHTML.date = `<div>${ parseInt(key[1]) }</div>`
                    break
                default: break
            }
        }
    }

    return `<div class="md-header">${ metadataHTML.avatar }${ metadataHTML.author }</div><div>${ metadataHTML.title }${ metadataHTML.date }</div>`
}

export const parse = (markdown: string) => {
    console.log('full parser ...')
}