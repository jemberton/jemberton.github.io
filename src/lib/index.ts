export interface IMarkdownPost {
    title: string
    author?: string
    avatar?: string
    date: string
    email?: string[]
    github?: string[]
    body: string
}

export const parseDate = (datestamp: number) => {
    let parsedObject = new Date(datestamp)
    return parsedObject.toISOString()
}

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
        return line.replace(/^\>\s(.+)/, '<blockquote class="bg-base p-lg rounded-xs font-retina m-md border-thin border-crust">$1</blockquote>')
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
    let metadataHTML: IMarkdownPost = {
        title: "",
        author: "",
        avatar: "",
        date: "",
        email: [""],
        github: [""],
        body: ""
    }

    for (const data of metadata) {
        let key = data.trim().split(': ')
        
        if (key.length > 1) {
            switch (key[0]) {
                case "title":
                    metadataHTML.title = key[1]
                    break
                case "author":
                    metadataHTML.author = key[1]
                    break
                case "avatar":
                    metadataHTML.avatar = key[1]
                    break
                case "date":
                    metadataHTML.date = parseDate(parseInt(key[1]))
                    break
                case "email":
                    let emailData = key[1].split(' ')
                    metadataHTML.email = emailData
                    break
                case "github":
                    let githubData = key[1].split(' ')
                    metadataHTML.github = githubData
                    break
                default: break
            }
        }
    }

    return metadataHTML
}

export const parse = (markdown: string) => {
    console.log('full parser ...', markdown)
}