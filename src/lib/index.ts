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

// export const parseMetadata = (metadata: string[]) => {
//     let metadataHTML = {
//         title: "",
//         author: "",
//         avatar: "",
//         date: "",
//         email: "",
//         github: ""
//     }

//     for (const data of metadata) {
//         let key = data.trim().split(': ')
        
//         if (key.length > 1) {
//             switch (key[0]) {
//                 case "title":
//                     metadataHTML.title = `<div class="title font-bold text-xl">${ key[1] }</div>`
//                     break
//                 case "author":
//                     metadataHTML.author = `<div class="author text-lg">${ key[1] }</div>`
//                     break
//                 case "avatar":
//                     metadataHTML.avatar = `<img src="${ key[1] }" class="avatar circle"/>`
//                     break
//                 case "date":
//                     metadataHTML.date = `<div class="datetime text-overlay1 text-sm">${ parseDate(parseInt(key[1])) }</div>`
//                     break
//                 case "email":
//                     let emailData = key[1].split(' ')
//                     if (emailData.length > 1) {
//                         metadataHTML.email = `<div class="text-sm"><a href="mailto:${ emailData[1] }">${ emailData[0] }</a></div>`
//                     } else {
//                         metadataHTML.email = `<div class="text-sm text-subtext1">${ emailData }</div>`
//                     }
//                     break
//                 case "github":
//                     let githubData = key[1].split(' ')
//                     if (githubData.length > 1) {
//                         metadataHTML.github = `<div class="text-sm"><a href="${ githubData[1] }">${ githubData[0] }</a></div>`
//                     } else {
//                         metadataHTML.github = `<div class="text-sm text-subtext1">${ githubData }</div>`
//                     }
//                     break
//                 default: break
//             }
//         }
//     }

//     return `
//         <div class="md-header">
//             <div class="row align-center gap-md p-md border-thin border-b-crust">
//                 ${ metadataHTML.avatar ? metadataHTML.avatar : "" }
//                 <div class="justify-center align-start">
//                     ${ metadataHTML.author ? metadataHTML.author : "" }
//                     <div class="row align-center gap-md">
//                         ${ metadataHTML.github ? metadataHTML.github : "" }
//                         ${ metadataHTML.email ? metadataHTML.email : "" }
//                     </div>
//                     ${ metadataHTML.date ? metadataHTML.date : "" }
//                 </div>
//             </div>
//             <div class="p-md">
//                 ${ metadataHTML.title ? metadataHTML.title : "" }
//             </div>
//         </div>
        
//     `
// }

export const parse = (markdown: string) => {
    console.log('full parser ...', markdown)
}